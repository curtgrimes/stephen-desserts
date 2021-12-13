import { Dessert } from "interfaces";
import Dessert3DView from "components/Dessert3DView";
import DessertDescription from "components/DessertDescription";

export default function DessertCard({ dessert }: { dessert: Dessert }) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-1 py-3 pb-11">
      <div className="h-full w-full bg-yellow-50 rounded-3xl shadow-xl flex flex-col relative">
        <div className="h-1/3">
          <Dessert3DView dessert={dessert} />
        </div>
        <DessertDescription dessert={dessert} />
      </div>
    </div>
  );
}
