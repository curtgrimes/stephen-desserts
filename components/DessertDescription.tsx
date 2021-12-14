import { Dessert } from "interfaces";
import { useRouter } from "next/dist/client/router";
import Note from "./Note";
import Link from "next/link";
import { CgSmartHomeRefrigerator as RefrigeratorIcon } from "react-icons/cg";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { useLayoutEffect, useRef, useState } from "react";

export default function DessertDescription({ dessert }: { dessert: Dessert }) {
  const router = useRouter();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const descriptionElementRef = useRef();

  useLayoutEffect(
    () =>
      setIsOverflowing(
        (descriptionElementRef.current as HTMLElement).clientHeight <
          (descriptionElementRef.current as HTMLElement).scrollHeight
      ),
    [descriptionElementRef]
  );

  const handleScroll = (e) =>
    setIsScrolledToBottom(
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    );

  return (
    <div
      ref={descriptionElementRef}
      onScroll={handleScroll}
      className="bg-white p-7 h-2/3 text-yellow-700 rounded-b-3xl flex flex-col max-h-[23rem] overflow-y-auto"
    >
      <div className="mb-auto">
        {/* Overlay that appears on overflowed text */}
        <div
          className={`absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-[rgba(255,255,255,0)]  to-white transition-opacity pointer-events-none ${
            isOverflowing && !isScrolledToBottom ? "opacity-100" : "opacity-0"
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
        <Link href={`/${router.query.year}/${router.query.dessertSlug}/recipe`}>
          <a className="button mt-4">View Recipe</a>
        </Link>
      )}
    </div>
  );
}
