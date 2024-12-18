import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronRight } from "react-icons/fa";

export default function IntroductionCard() {
  const router = useRouter();

  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center gap-8">
      {router.query.year !== "2024" && (
        <Link
          href="/2024/lemon-crinkle-cookies"
          className="button h-full w-full bg-amber-200/30 text-lg"
        >
          View this year&apos;s desserts <FaChevronRight />
        </Link>
      )}
      {router.query.year !== "2023" && (
        <Link
          href="/2023/peanut-butter-balls"
          className="button h-full w-full bg-amber-200/30 text-lg"
        >
          Desserts from 2023 <FaChevronRight />
        </Link>
      )}
      {router.query.year !== "2022" && (
        <Link
          href="/2022/chocolate-mint-stuffed-cookie"
          className="button h-full w-full bg-amber-200/30 text-lg"
        >
          Desserts from 2022 <FaChevronRight />
        </Link>
      )}
      {router.query.year !== "2021" && (
        <Link
          href="/2021/chocolate-pretzel-rice-crispy"
          className="button h-full w-full bg-amber-200/30 text-lg"
        >
          Desserts from 2021 <FaChevronRight />
        </Link>
      )}
    </div>
  );
}
