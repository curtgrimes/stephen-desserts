import { useRouter } from "next/router";
import { useEffect } from "react";

export default function YearPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect
    router.push(`/2021/about`);
  });

  return null;
}
