import Link from "next/link";
import {
  FaChevronRight,
  FaHeart as HeartIcon,
  FaLongArrowAltUp as RightArrowIcon,
} from "react-icons/fa";
import { WiSnowflakeCold as SnowflakeIcon } from "react-icons/wi";

export default function IntroductionCard({ onNavigateToFirstDessert, year }) {
  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center">
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded-3xl bg-amber-800/10 p-10 text-center shadow-inner">
        <p className="text-xs font-black uppercase tracking-veryWide">
          December {year}
        </p>
        <h1 className="text-2xl text-amber-600">
          Stephen&apos;s Desserts,
          <br /> Made Just for You
        </h1>
        <SnowflakeIcon className="my-2 hidden text-5xl text-amber-800 sm:block" />
        <p className="font-bold text-amber-800 text-opacity-80">
          Learn more about the desserts Stephen has made for you this Christmas
          season. And if you really like one of them, feel free to grab the
          recipe!
        </p>
        <p className="device-touchscreen my-0 flex items-center text-lg sm:my-10">
          Swipe to continue{" "}
          <span className="ml-2 rotate-90 text-4xl">
            <RightArrowIcon className="animate-bounce" />
          </span>
        </p>
        <p className="device-not-touchscreen my-5 flex items-center text-lg sm:my-10">
          <button
            onClick={onNavigateToFirstDessert}
            className="button flex max-w-full items-center rounded px-4 sm:px-14"
          >
            <span className="mb-1 mr-2">Continue</span>
            <FaChevronRight />
          </button>
        </p>
        {year === "2022" && (
          <Link
            href="/2021/about"
            className="button rounded py-2 px-3 text-sm opacity-90"
          >
            View last year&apos;s desserts
          </Link>
        )}
        <p className="absolute inset-x-8 bottom-2 text-sm opacity-70">
          Made with <HeartIcon className="inline text-red-600" />{" "}
          <span className="whitespace-nowrap">by Stephen and Curt</span>
        </p>
      </div>
    </div>
  );
}
