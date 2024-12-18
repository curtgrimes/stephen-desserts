import { useRouter } from "next/router";
import { useEffect } from "react";

export default function YearPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect
    router.push(`/2024/about`);
  });

  return null;
}
