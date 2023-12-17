import Link from "next/link";
import { useRouter } from "next/router";
import { FaChevronRight } from "react-icons/fa";

export default function IntroductionCard() {
  const router = useRouter();

  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center gap-8">
      <Link
        href="/2022/chocolate-mint-stuffed-cookie"
        className="button h-full w-full bg-amber-200/30 text-lg"
      >
        View Stephen&apos;s desserts from 2022 <FaChevronRight />
      </Link>
      <Link
        href="/2021/chocolate-pretzel-rice-crispy"
        className="button h-full w-full bg-amber-200/30 text-lg"
      >
        View Stephen&apos;s desserts from 2021 <FaChevronRight />
      </Link>
    </div>
  );
}
