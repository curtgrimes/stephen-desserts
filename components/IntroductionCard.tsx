import {
  FaHeart as HeartIcon,
  FaLongArrowAltUp as RightArrowIcon,
} from "react-icons/fa";
import { WiSnowflakeCold as SnowflakeIcon } from "react-icons/wi";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDesserts } from "hooks/useDesserts";

export default function IntroductionCard({ onNavigateToFirstDessert }) {
  return (
    <div className="h-card w-full flex flex-col items-center justify-center px-1 pb-11">
      <div className="h-full w-full bg-amber-800 rounded-3xl shadow-inner bg-opacity-10 flex flex-col relative items-center justify-center text-center p-10">
        <p className="uppercase tracking-veryWide font-black text-xs">
          December 2021
        </p>
        <h1 className="text-2xl text-amber-600">
          Stephen&apos;s Desserts,
          <br /> Made Just for You
        </h1>
        <SnowflakeIcon className="hidden sm:block text-5xl text-amber-800 my-2" />
        <p className="text-amber-800 text-opacity-80 font-bold">
          Learn more about the desserts Stephen has made for you this Christmas
          season. And if you really like one of them, feel free to grab the
          recipe!
        </p>
        <p className="device-touchscreen text-lg flex items-center my-0 sm:my-10">
          Swipe to continue{" "}
          <span className="rotate-90 ml-2 text-4xl">
            <RightArrowIcon className="animate-bounce" />
          </span>
        </p>
        <p className="device-not-touchscreen text-lg flex items-center my-5 sm:my-10">
          <button
            onClick={onNavigateToFirstDessert}
            className="flex rounded button px-4 sm:px-14 items-center max-w-full"
          >
            <span className="mb-1 mr-2">Continue</span>
            <FaChevronRight />
          </button>
        </p>
        <p className="absolute bottom-2 inset-x-8 text-sm opacity-70">
          Made with <HeartIcon className="inline text-red-600" />{" "}
          <span className="whitespace-nowrap">by Stephen and Curt</span>
        </p>
      </div>
    </div>
  );
}
