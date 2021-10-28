import { Dessert } from "interfaces";
import { BsGrid as GridIcon } from "react-icons/bs";
import Link from "next/link";
import Dessert3DView from "components/Dessert3DView";
import DessertDescription from "components/DessertDescription";

export default function DessertCard({ dessert }: { dessert: Dessert }) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="h-[90vh] w-[90vw] bg-amber-50 rounded-3xl shadow-2xl flex flex-col relative">
        <Link href="/2021">
          <a className="absolute top-3 left-4 flex opacity-70">
            <GridIcon className="w-8 h-8 text-amber-600" />
          </a>
        </Link>
        <Dessert3DView dessert={dessert} />
        <DessertDescription dessert={dessert} />
      </div>
    </div>
  );
}
