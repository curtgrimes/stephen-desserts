import { useEffect, useRef, useState } from "react";
import { Dessert } from "interfaces";
import { useDidMount, useWillUnmount } from "rooks";
import { DessertRenderer } from "./DessertRenderer";

export default function Dessert3DView({ dessert }: { dessert: Dessert }) {
  const [isVisible, setIsVisible] = useState(false);
  const the3dview = useRef(null);
  const dessertRender = useRef(
    new DessertRenderer(
      "/static/models/2021/chocolate-pretzel-rice-crispy.gltf",
      the3dview
    )
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

    resizeObserver.observe(the3dview.current, { box: "content-box" });
    intersectionObserver.observe(the3dview.current);
  });

  useWillUnmount(() => {
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
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
      ref={the3dview}
      className={`swiper-no-swiping h-full transition-opacity delay-100 duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
}
