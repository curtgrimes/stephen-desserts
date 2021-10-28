import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { useEffect, useRef, useState } from "react";
import { Dessert } from "interfaces";
import { useDidMount, useIntersectionObserverRef } from "rooks";
import { DessertRenderer } from "./DessertRenderer";

export default function Dessert3DView({ dessert }: { dessert: Dessert }) {
  const [isVisible, setIsVisible] = useState(false);
  const the3dview = useRef(null);
  const dessertRender = useRef(
    new DessertRenderer(
      "/models/2021/chocolate-pretzel-rice-crispy.gltf",
      the3dview
    )
  );

  useDidMount(() => {
    const initializeResizeObserver = () => {
      const resizeObserver = new ResizeObserver(() =>
        dessertRender.current.updateCanvasSize({ force: true })
      );

      resizeObserver.observe(the3dview.current, { box: "content-box" });
    };

    const initializeIntersectionObserver = () => {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries?.[0]?.isIntersecting);
        },
        { threshold: 0.5 }
      );

      intersectionObserver.observe(the3dview.current);
    };

    dessertRender.current.render();
    initializeResizeObserver();
    initializeIntersectionObserver();
  });

  useEffect(() => {
    if (isVisible) {
      dessertRender.current.resume();
    } else {
      dessertRender.current.pause();
    }
  }, [isVisible]);

  return (
    <div className="h-3/8 rounded-t-3xl">
      <div
        ref={the3dview}
        className={`swiper-no-swiping h-full transition-opacity delay-100 duration-300 ${
          true ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
