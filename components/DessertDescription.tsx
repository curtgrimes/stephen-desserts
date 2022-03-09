import { Dessert } from "interfaces";
import { useRouter } from "next/dist/client/router";
import Note from "./Note";
import Link from "next/link";
import { CgSmartHomeRefrigerator as RefrigeratorIcon } from "react-icons/cg";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserverRef } from "rooks";
import {
  FaChevronLeft as ChevronLeftIcon,
  FaChevronRight as ChevronRightIcon,
} from "react-icons/fa";

export default function DessertDescription({
  dessert,
  onNavigateToPreviousSlide,
  onNavigateToNextSlide,
  isLast,
}: {
  dessert: Dessert;
  onNavigateToPreviousSlide: Function;
  onNavigateToNextSlide: Function;
  isLast: boolean;
}) {
  const router = useRouter();
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

  return (
    <div
      ref={descriptionElementRef}
      className="bg-white p-7 h-2/3 text-yellow-700 rounded-b-3xl flex flex-col"
      style={{ overscrollBehaviorY: "none" }}
    >
      <div className="overflow-y-auto" ref={visibilityRef}>
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
      <div className="flex mt-auto pt-4 gap-x-2">
        <button
          onClick={() => onNavigateToPreviousSlide()}
          className="device-not-touchscreen button w-1/4 opacity-60 hover:opacity-100"
        >
          <ChevronLeftIcon />
        </button>
        {dessert.recipe && (
          <Link href={`/${router.query.year}/${dessert.slug}/recipe`}>
            <a className="button swiper-no-swiping w-full">View Recipe</a>
          </Link>
        )}
        <button
          onClick={() => onNavigateToNextSlide()}
          disabled={isLast}
          className="device-not-touchscreen button w-1/4 opacity-60 hover:opacity-100"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
