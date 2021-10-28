import { Dessert } from "interfaces";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function DessertDescription({ dessert }: { dessert: Dessert }) {
  const router = useRouter();

  return (
    <div className="bg-white p-7 h-5/8 flex-grow-1 text-amber-600 rounded-b-3xl overflow-y-auto flex flex-col">
      <div className="mb-auto">
        <h1>{dessert.name}</h1>
        <p>{dessert.description}</p>

        {/* <Note v-if="dessert.refrigerationRecommended">Refrigeration recommended</Note> */}
      </div>
      <Link href={`/${router.query.year}/${router.query.dessertSlug}/recipe`}>
        <a className="button">View Recipe</a>
      </Link>
    </div>
  );
}
