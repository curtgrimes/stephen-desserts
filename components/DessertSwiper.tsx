import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import { useDesserts } from "hooks/useDesserts";
import "swiper/css";
import DessertCard from "components/DessertCard";

// const initialSlide = computed(() =>
//   props.initialDessertSlug
//     ? props.desserts.findIndex(
//         (dessert) => dessert.slug === props.initialDessertSlug
//       )
//     : 0
// );

const initialSlide = 0;

const onSlideChange = ({ activeIndex }: SwiperClass) => {
  console.log("changed!");
};

export default function DessertSwiper() {
  const desserts = useDesserts("2021");

  return (
    <div className="h-screen flex">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={onSlideChange}
        initialSlide={initialSlide}
      >
        {desserts.map((dessert) => (
          <SwiperSlide key={dessert.slug}>
            <DessertCard dessert={dessert} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>{JSON.stringify(desserts)} asdf</SwiperSlide>
        <SwiperSlide>asdf2</SwiperSlide>
        <SwiperSlide>asdf3</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

// {desserts.map(dessert => <SwiperSlide
//     >
//     This is my dessert

//       </SwiperSlide>}

// <DessertCard :dessert="dessert" />

{
  /* <template>
    <div
        class="h-screen flex"
        key="hello"
    >
        <swiper
      :slides-per-view="1"
        :space-between="50"
        @slideChange="onSlideChange"
        :initialSlide="initialSlide"
    >
        <swiper-slide
            v-for="dessert in desserts"
        :key="dessert.slug"
      >
        <DessertCard :dessert="dessert" />
    </swiper-slide>
</swiper>
  </div >
</template >

<script lang="ts">
import "swiper/css";
</script>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperType from "swiper";

console.log("setup swiper");

const props = defineProps<{
  desserts: Dessert[];
  initialDessertSlug: string;
}>();

const emit = defineEmits<{
  (e: "change", id: string): void;
}>();

const initialSlide = computed(() =>
  props.initialDessertSlug
    ? props.desserts.findIndex(
        (dessert) => dessert.slug === props.initialDessertSlug
      )
    : 0
);

const onSlideChange = ({ activeIndex }: SwiperType) => {
  emit("change", props.desserts[activeIndex].slug);
};
</script> */
}
