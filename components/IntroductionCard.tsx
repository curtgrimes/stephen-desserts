import {
  FaHeart as HeartIcon,
  FaLongArrowAltUp as RightArrowIcon,
} from "react-icons/fa";
import { WiSnowflakeCold as SnowflakeIcon } from "react-icons/wi";

export default function IntroductionCard({}: {}) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-1 py-3 pb-11">
      <div className="h-full w-full bg-yellow-800 rounded-3xl shadow-inner bg-opacity-10 flex flex-col relative items-center justify-center text-center p-10">
        <p className="uppercase tracking-veryWide font-black text-lg">
          December 2021
        </p>
        <h1 className="text-4xl text-yellow-600">
          Stephen's Desserts,
          <br /> Made Just for You
        </h1>
        <SnowflakeIcon className="text-5xl text-yellow-800 my-2" />
        <p className="text-yellow-800 text-opacity-80 font-bold text-xl">
          Learn more about the desserts Stephen has made for you this Christmas
          season. And if you really like one of them, feel free to grab the
          recipe!
        </p>
        <p className="text-2xl flex items-center mt-10">
          Swipe to continue{" "}
          <span className="rotate-90 ml-2 text-4xl">
            <RightArrowIcon className="animate-bounce" />
          </span>
        </p>
        <p className="absolute bottom-0 mb-12 mx-10">
          Made with <HeartIcon className="inline text-red-600" />{" "}
          <span className="whitespace-nowrap">by Stephen and Curt</span>
        </p>
      </div>
    </div>
  );
}
