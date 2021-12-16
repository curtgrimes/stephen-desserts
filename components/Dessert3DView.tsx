import { useEffect, useRef, useState, useMemo } from "react";
import { Dessert } from "interfaces";
import { useDidMount, useWillUnmount } from "rooks";
import { DessertRenderer } from "./DessertRenderer";
import React from "react";

export default function Dessert3DView({
  dessert,
  doInitialSpin = false,
}: {
  dessert: Dessert;
  doInitialSpin?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const container = useRef(null);
  const dessertRender = useRef(null);

  const resizeObserver = new ResizeObserver(() =>
    dessertRender.current?.updateCanvasSize({ force: true })
  );

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      setIsVisible(entries?.[0]?.isIntersecting);
    },
    { threshold: 0 }
  );

  useDidMount(() => {
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
      if (!dessertRender.current) {
        dessertRender.current = new DessertRenderer(dessert, container, {
          doInitialSpin,
        });
        dessertRender.current.render();
      }

      dessertRender.current.resume();
    } else if (dessertRender.current) {
      dessertRender.current.pause();
    }
  }, [isVisible, dessert, doInitialSpin]);

  return (
    <div
      ref={container}
      className={`swiper-no-swiping h-full transition-opacity delay-100 duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
}
