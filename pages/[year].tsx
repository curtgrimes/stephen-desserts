import DessertSwiper from "components/DessertSwiper";

// import { useRoute, useRouter } from "vue-router";
// const router = useRouter();
// const route = useRoute();

// const desserts = useDesserts({ year: route.params.year as string });

// const didSelectDessert = (newDessertSlug: string) => {
// https://github.com/vercel/next.js/discussions/18072#discussioncomment-109059
// router.replace(`/${route.params.year}/${newDessertSlug}`);
// const newUrl = `/${route.params.year}/${newDessertSlug}`;
// window.history.replaceState(
//   { ...window.history.state, as: newUrl, url: newUrl },
//   "",
//   newUrl
// );
// };

export default function YearPage() {
  return (
    <div>
      <DessertSwiper />
    </div>
  );
}
