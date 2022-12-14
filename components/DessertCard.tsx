import Dessert3DView from "components/Dessert3DView";
import DessertDescription from "components/DessertDescription";
import { Dessert } from "interfaces";

export default function DessertCard({
  dessert,
  onNavigateToPreviousSlide,
  onNavigateToNextSlide,
  isLast,
}: {
  dessert: Dessert;
  onNavigateToPreviousSlide: Function;
  onNavigateToNextSlide: Function;
  isLast: boolean;
}) {
  return (
    <div className="relative mb-10 flex w-full cursor-grab flex-col overflow-hidden rounded-3xl bg-orange-50 shadow-xl">
      <div className="h-1/3">
        <Dessert3DView dessert={dessert} />
      </div>
      <DessertDescription
        dessert={dessert}
        onNavigateToPreviousSlide={onNavigateToPreviousSlide}
        onNavigateToNextSlide={onNavigateToNextSlide}
        isLast={isLast}
      />
    </div>
  );
}
