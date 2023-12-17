import { useDessert } from "hooks/useDesserts";
import YearLayout from "layouts/YearLayout";
import Head from "next/head";

export default function DessertPage() {
  const { dessert } = useDessert();

  return (
    <div>
      <Head>
        <title>
          {dessert
            ? `${dessert.name} - Stephen's Desserts`
            : "Stephen's Desserts - December 2023"}
        </title>
      </Head>
    </div>
  );
}

DessertPage.getLayout = YearLayout;
