import { Dessert } from "interfaces";
import { useRouter } from "next/dist/client/router";
import Note from "./Note";
import Link from "next/link";
import { CgSmartHomeRefrigerator as RefrigeratorIcon } from "react-icons/cg";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useIntersectionObserverRef } from "rooks";

export default function DessertDescription({ dessert }: { dessert: Dessert }) {
  const router = useRouter();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isScrolledNearBottom, setIsScrolledNearBottom] = useState(false);
  const descriptionElementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [visibilityRef] = useIntersectionObserverRef((entries) => {
    if (entries && entries[0]) {
      setIsVisible(entries[0].isIntersecting);
    }
  });

  useEffect(() => {
    if (isVisible) {
      (descriptionElementRef.current as HTMLElement).scrollTop = 0;
    }
  }, [isVisible]);

  useLayoutEffect(
    () =>
      setIsOverflowing(
        (descriptionElementRef.current as HTMLElement).clientHeight <
          (descriptionElementRef.current as HTMLElement).scrollHeight
      ),
    [descriptionElementRef]
  );

  const handleScroll = (e) =>
    setIsScrolledNearBottom(
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <= 100
    );

  return (
    <div
      ref={descriptionElementRef}
      onScroll={handleScroll}
      className="bg-white p-7 h-2/3 text-yellow-700 rounded-b-3xl flex flex-col overflow-y-auto"
      style={{ overscrollBehaviorY: "none" }}
    >
      <div className="mb-auto" ref={visibilityRef}>
        {/* Overlay that appears on overflowed text */}
        <div
          className={`absolute bottom-0 inset-x-0 h-32 rounded-b-3xl bg-gradient-to-b from-[rgba(255,255,255,0)]  to-white transition-opacity pointer-events-none ${
            isOverflowing && !isScrolledNearBottom ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <h1>{dessert.name}</h1>
        <p>{dessert.description}</p>

        {dessert.refrigerationRecommended && (
          <Note icon={RefrigeratorIcon}>Refrigeration recommended</Note>
        )}

        {dessert.stephensFavorite && (
          <Note icon={HeartIcon}>Stephen&apos;s personal favorite</Note>
        )}

        {dessert.curtsFavorite && (
          <Note icon={HeartIcon}>Curt&apos;s personal favorite</Note>
        )}
      </div>
      {dessert.recipe && (
        <Link href={`/${router.query.year}/${dessert.slug}/recipe`}>
          <a className="button mt-4 swiper-no-swiping">View Recipe</a>
        </Link>
      )}
    </div>
  );
}
