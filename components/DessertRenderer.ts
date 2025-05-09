import { Dessert } from "interfaces";
import { MutableRefObject } from "react";
import {
  Cache,
  Group,
  MathUtils,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface DessertRendererOptions {
  doInitialSpin?: boolean;
}

export class DessertRenderer {
  private dessert: Dessert;
  private elementRef: MutableRefObject<HTMLElement>;

  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private controls: OrbitControls;
  private model: Group;

  private autoRotateSpeed = 1.5;

  public initialized: boolean = false;
  private paused: boolean = false;
  private doInitialSpin: boolean = true;

  constructor(
    dessert: Dessert,
    elementRef: MutableRefObject<HTMLElement>,
    options: DessertRendererOptions = {}
  ) {
    this.dessert = dessert;
    this.elementRef = elementRef;
    this.doInitialSpin = options.doInitialSpin;
  }

  render() {
    if (this.initialized) {
      // Already initialized. Skip initializing again.
      // This could happen after hot reload during development.
      return;
    }

    this.initializeRenderer();

    this.initializeCamera();
    this.initializeControls();
    this.initializeScene();
    this.loadModel();
    this.mountRenderer();

    this.initialized = true;
    this.paused = false;
    this.animate();
    this.updateCanvasSize({ force: true });
  }

  destroy() {
    this.pause();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer = null;
  }

  private initializeRenderer() {
    Cache.enabled = true;
    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,

      // https://attackingpixels.com/tips-tricks-optimizing-three-js-performance/
      powerPreference: "high-performance",
    });
    this.renderer.outputColorSpace = SRGBColorSpace;
  }

  private initializeScene() {
    this.scene = new Scene();
    this.scene.background = null;

    const pmremGenerator = new PMREMGenerator(this.renderer);
    this.scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;
  }

  private initializeCamera() {
    this.camera = new PerspectiveCamera(50, 1, 1, 100);
    this.camera.position.set(10, 5, 8);
  }

  private initializeControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0.25, 0);
    this.controls.update();
    this.controls.enableRotate = true;
    this.controls.enablePan = false;
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = this.doInitialSpin
      ? 160
      : this.autoRotateSpeed;
    this.controls.minPolarAngle = 1;
    this.controls.maxPolarAngle =
      this.dessert.model.allowedUserRotation === "horizontal-only"
        ? this.controls.minPolarAngle
        : 2;
  }

  static loader: GLTFLoader;
  private async loadModel() {
    if (!DessertRenderer.loader) {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderConfig({ type: "js" });
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      DessertRenderer.loader = new GLTFLoader();
      DessertRenderer.loader.setDRACOLoader(dracoLoader);
    }

    try {
      this.model = (
        await DessertRenderer.loader.loadAsync(this.dessert.model.path)
      ).scene;

      this.model.scale.set(
        this.dessert.model.scale,
        this.dessert.model.scale,
        this.dessert.model.scale
      );
      this.model.rotateX(this.dessert.model.rotation.x);
      this.model.rotateY(this.dessert.model.rotation.y);
      this.model.rotateZ(this.dessert.model.rotation.z);
      this.scene.add(this.model);
    } catch (e) {
      console.error("Unable to load model:", e);
    }

    if (this.doInitialSpin) {
      // We were already spinning faster at start. Now slow down.
      setTimeout(() => {
        this.controls.autoRotateSpeed = this.autoRotateSpeed;
      }, 150);
    }
  }

  private animate() {
    if (!this.initialized) {
      // Not ready yet to animate. When initialized it will start automatically.
      // We could end up here if we called resume() before initialization.
      return;
    }

    if (this.paused) {
      return;
    }

    this.controls?.update();
    this.renderer?.render(this.scene, this.camera);

    // Continue animation loop
    requestAnimationFrame(this.animate.bind(this));
  }

  private mountRenderer() {
    if (this.elementRef.current.childNodes.length) {
      // Something is already mounted. Maybe we're hot reloading right now?
      // Remove existing nodes.

      while (this.elementRef.current.firstChild) {
        this.elementRef.current.removeChild(this.elementRef.current.lastChild);
      }
    }

    this.elementRef.current.appendChild(this.renderer.domElement);
  }

  updateCanvasSize({ force = false }: { force: boolean }) {
    const fov = 20;
    const planeAspectRatio = 16 / 9;

    if (this.camera.aspect > planeAspectRatio) {
      // window too large
      this.camera.fov = fov;
    } else {
      // window too narrow
      const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
      const ratio = this.camera.aspect / planeAspectRatio;
      const newCameraHeight = cameraHeight / ratio;
      this.camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
    }

    if (!this.elementRef.current) {
      this.pause();
      return;
    }

    const { width, height } = this.elementRef.current.getBoundingClientRect();

    // adjust displayBuffer size to match
    if (
      force ||
      this.renderer.domElement.width !== width ||
      this.renderer.domElement.height !== height
    ) {
      // you must pass false here or three.js sadly fights the browser
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  pause() {
    this.paused = true;
  }

  resume() {
    this.paused = false;
    this.animate();
  }
}
