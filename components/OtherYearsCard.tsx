import { useDesserts } from "hooks/useDesserts";
import { useDessertsYears } from "hooks/useDessertsYears";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronRight } from "react-icons/fa";

export default function IntroductionCard() {
  const router = useRouter();
  const years = useDessertsYears();

  const ViewYearButton = ({ year }: { year: number }) => {
    const { desserts, currentYear } = useDesserts(String(year));

    return Number(router.query.year) !== year && (
      <Link
        href={`/${year}/${desserts[0]?.slug}`}
        className="button h-full w-full bg-amber-200/30 text-lg"
      >
        {
          currentYear === year ?
            <>View this year&apos;s desserts <FaChevronRight /></>
            : <>Desserts from {year} <FaChevronRight /></>
        }
      </Link>
    );
  };

  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center gap-8">
      {years.map(year => <ViewYearButton year={year} />)}
    </div>
  );
}
