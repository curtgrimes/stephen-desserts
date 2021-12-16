import { Dessert } from "interfaces";
import Dessert3DView from "components/Dessert3DView";
import DessertDescription from "components/DessertDescription";

export default function DessertCard({ dessert }: { dessert: Dessert }) {
  return (
    <div className="h-card px-1 pb-11 w-full cursor-grab">
      <div className="h-full w-full bg-yellow-50 rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
        <div className="h-1/3">
          <Dessert3DView dessert={dessert} />
        </div>
        <DessertDescription dessert={dessert} />
      </div>
    </div>
  );
}
