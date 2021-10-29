import { useEffect, useRef, useState, useMemo } from "react";
import { Dessert } from "interfaces";
import { useDidMount, useWillUnmount } from "rooks";
import { DessertRenderer } from "./DessertRenderer";
import React from "react";

function Dessert3DView({
  dessert,
  doInitialSpin = true,
}: {
  dessert: Dessert;
  doInitialSpin?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const container = useRef(null);
  const dessertRender = useRef(
    new DessertRenderer(dessert.modelPath, container, {
      doInitialSpin,
    })
  );

  const resizeObserver = new ResizeObserver(() =>
    dessertRender.current.updateCanvasSize({ force: true })
  );

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      setIsVisible(entries?.[0]?.isIntersecting);
    },
    { threshold: 0 }
  );

  useDidMount(() => {
    dessertRender.current.render();

    resizeObserver.observe(container.current, { box: "content-box" });
    intersectionObserver.observe(container.current);
  });

  useWillUnmount(() => {
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    dessertRender.current.destroy();
  });

  useEffect(() => {
    if (isVisible) {
      dessertRender.current.resume();
    } else {
      dessertRender.current.pause();
    }
  }, [isVisible]);

  return (
    <div
      ref={container}
      className={`swiper-no-swiping h-full transition-opacity delay-100 duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
}

export default React.memo(Dessert3DView);
