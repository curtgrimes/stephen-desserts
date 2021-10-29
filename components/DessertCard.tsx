import { Dessert } from "interfaces";
import { BsGrid as GridIcon } from "react-icons/bs";
import Link from "next/link";
import Dessert3DView from "components/Dessert3DView";
import DessertDescription from "components/DessertDescription";

export default function DessertCard({ dessert }: { dessert: Dessert }) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-5 ">
      <div className="h-full w-full bg-yellow-50 rounded-3xl shadow-xl flex flex-col relative">
        <Link href="/2021">
          <a className="absolute top-3 left-4 flex opacity-70">
            <GridIcon className="w-8 h-8 text-yellow-600" />
          </a>
        </Link>
        <div className="h-1/3">
          <Dessert3DView dessert={dessert} />
        </div>
        <DessertDescription dessert={dessert} />
      </div>
    </div>
  );
}
