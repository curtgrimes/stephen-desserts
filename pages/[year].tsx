// import { useRoute, useRouter } from "vue-router";
// const router = useRouter();
// const route = useRoute();

import DessertCardMini from "components/DessertCardMini";
import { useDesserts } from "hooks/useDesserts";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { desserts } = useDesserts(router.query.year as string);

  return (
    <div className="grid grid-cols-2 gap-4 m-4">
      {desserts.map((dessert) => (
        <DessertCardMini dessert={dessert} key={dessert.slug} />
      ))}
    </div>
  );
}
