import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDesserts } from '../hooks/useDesserts';

export default function YearPage() {
  const router = useRouter();
  const { currentYear } = useDesserts();

  useEffect(() => {
    // Redirect
    router.push(`/${currentYear}/about`);
  });

  return null;
}
