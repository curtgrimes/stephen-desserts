import { Dessert } from "interfaces";
import { BsGrid as GridIcon } from "react-icons/bs";
import Link from "next/link";
import Dessert3DView from "components/Dessert3DView";
import DessertDescription from "components/DessertDescription";
import { useRouter } from "next/router";

export default function DessertCardMini({ dessert }: { dessert: Dessert }) {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl shadow-lg">
      <Link href={`/${router.query.year}/${dessert.slug}`}>
        <a>
          <Dessert3DView dessert={dessert} />
        </a>
      </Link>
    </div>
  );
}
