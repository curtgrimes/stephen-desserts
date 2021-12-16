import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass, { Pagination } from "swiper";
import { useDesserts } from "hooks/useDesserts";
import "swiper/css";
import "swiper/css/pagination";
import DessertCard from "components/DessertCard";
import IntroductionCard from "components/IntroductionCard";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDidMount, usePreviousDifferent } from "rooks";
import { Dessert } from "interfaces";

export default function DessertSwiper() {
  const router = useRouter();
  const [swiper, setSwiper] = useState(null);
  const { desserts } = useDesserts(router.query.year as string);

  const onSlideChange = ({ activeIndex }: SwiperClass) => {
    const dessertIndex = activeIndex - 1; // account for introduction card

    if (dessertIndex >= 0) {
      router.replace(`/${router.query.year}/${desserts[dessertIndex].slug}`);
    } else {
      // Introduction card
      router.replace(`/${router.query.year}/about`);
    }
  };

  const currentDessertSlug = useMemo(
    () => router.query.dessertSlug as Dessert["slug"],
    [router.query.dessertSlug]
  );

  const getCardIndex = useCallback(
    (dessertSlug: Dessert["slug"]) =>
      dessertSlug
        ? desserts.findIndex((dessert) => dessert.slug === currentDessertSlug) +
          1 // account for introduction card
        : 0,
    [desserts, currentDessertSlug]
  );

  const previousDessertSlug = usePreviousDifferent(currentDessertSlug);
  useEffect(() => {
    if (!previousDessertSlug && currentDessertSlug) {
      // It changed for the first time
      swiper.slideTo(getCardIndex(currentDessertSlug));
    }
  }, [previousDessertSlug, swiper, getCardIndex, currentDessertSlug]);

  return (
    <div className="flex sm:h-screen items-center my-2">
      <Swiper
        onSwiper={setSwiper}
        modules={[Pagination]}
        slidesPerView={1.15}
        spaceBetween={0}
        breakpoints={{
          650: {
            // when screen is >= 650
            slidesPerView: 1.15,
          },
          800: {
            slidesPerView: 2.15,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3.15,
          },
        }}
        pagination={{ clickable: true }}
        onSlideChange={onSlideChange}
        initialSlide={getCardIndex(currentDessertSlug)}
        centeredSlides={true}
      >
        <SwiperSlide key="introduction">
          <IntroductionCard />
        </SwiperSlide>
        {desserts.map((dessert, index) => (
          <SwiperSlide key={dessert.slug}>
            <DessertCard dessert={dessert} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
