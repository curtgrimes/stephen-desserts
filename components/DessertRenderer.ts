import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Group,
  sRGBEncoding,
  PMREMGenerator,
  MathUtils,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MutableRefObject } from "react";

interface DessertRendererOptions {
  doInitialSpin?: boolean;
}

export class DessertRenderer {
  private modelPath: string;
  private elementRef: MutableRefObject<HTMLElement>;

  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private controls: OrbitControls;
  private model: Group;

  private autoRotateSpeed = 3;

  public initialized: boolean = false;
  private paused: boolean = false;
  private doInitialSpin: boolean = true;

  constructor(
    modelPath: string,
    elementRef: MutableRefObject<HTMLElement>,
    options: DessertRendererOptions = {}
  ) {
    this.modelPath = modelPath;
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
    this.initializeScene();
    this.initializeCamera();
    this.initializeControls();
    this.loadModel();
    this.mountRenderer();

    this.initialized = true;
    this.paused = false;
    this.animate();
    this.updateCanvasSize({ force: true });
  }

  private initializeRenderer() {
    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.outputEncoding = sRGBEncoding;
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
    this.camera.position.set(5, 2, 8);
  }

  private initializeControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0.5, 0);
    this.controls.update();
    this.controls.enableRotate = true;
    this.controls.enablePan = false;
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = this.doInitialSpin
      ? 160
      : this.autoRotateSpeed;
    this.controls.minPolarAngle = 1;
    this.controls.maxPolarAngle = 2;
  }

  private async loadModel() {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: "js" });
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    const gltf = await loader.loadAsync(this.modelPath);
    this.model = gltf.scene;
    this.model.scale.set(0.1, 0.1, 0.1);
    this.model.rotateX(0.4);
    this.model.rotateY(3);
    this.model.rotateZ(0.4);
    this.scene.add(this.model);

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
    const fov = 50;
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
