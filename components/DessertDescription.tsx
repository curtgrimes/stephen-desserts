import { Dessert } from "interfaces";
import { useRouter } from "next/dist/client/router";
import Note from "./Note";
import Link from "next/link";
import { CgSmartHomeRefrigerator as RefrigeratorIcon } from "react-icons/cg";
import { FaHeart as HeartIcon } from "react-icons/fa";

export default function DessertDescription({ dessert }: { dessert: Dessert }) {
  const router = useRouter();

  return (
    <div className="bg-white p-7 h-2/3 flex-grow-1 text-yellow-700 rounded-b-3xl overflow-y-auto flex flex-col">
      <div className="mb-auto">
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
          <a className="button">View Recipe</a>
        </Link>
      )}
    </div>
  );
}
