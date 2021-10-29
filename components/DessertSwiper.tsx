import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import { useDesserts } from "hooks/useDesserts";
import "swiper/css";
import DessertCard from "components/DessertCard";
import { useRouter } from "next/router";

export default function DessertSwiper() {
  const router = useRouter();
  const { desserts } = useDesserts(router.query.year as string);

  const onSlideChange = ({ activeIndex }: SwiperClass) => {
    router.replace(`/${router.query.year}/${desserts[activeIndex].slug}`);
  };

  const initialSlide = () =>
    router.query.dessertSlug
      ? desserts.findIndex(
          (dessert) => dessert.slug === router.query.dessertSlug
        )
      : 0;

  return (
    <div className="h-screen flex">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={onSlideChange}
        initialSlide={initialSlide()}
      >
        {desserts.map((dessert) => (
          <SwiperSlide key={dessert.slug}>
            <DessertCard dessert={dessert} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
