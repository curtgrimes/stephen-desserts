import { useRouter } from "next/router";
import { useEffect } from "react";

export default function YearPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /[year]/about
    router.push(`/${router.query.year}/about`);
  });

  return null;
}
