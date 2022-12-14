import { motion } from "framer-motion";
import { useDessert } from "hooks/useDesserts";
import YearLayout from "layouts/YearLayout";
import { useRouter } from "next/router";
import {
  AiFillCloseCircle as CloseIcon,
  AiFillPrinter as PrintIcon,
} from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useDidMount } from "rooks";
export default function RecipePage() {
  const { dessert, loading } = useDessert();
  const router = useRouter();
  const backPath = `/${router.query.year}/${router.query.dessertSlug}`;
  const backPathIsPreviousInHistory =
    backPath === globalThis?.sessionStorage?.getItem("previousPath");

  useDidMount(() => {
    if (dessert) {
      router.replace(`/${router.query.year}/${dessert.slug}/recipe`);
    }
  });

  return (
    <motion.div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 pt-5">
      <div className="mx-1 rounded-t-3xl bg-white">
        <div className="mx-auto max-w-lg p-4">
          <div className="print-d-none flex text-xs text-gray-400">
            <button
              className="flex items-center"
              onClick={() => window.print()}
            >
              <PrintIcon className="mr-1 h-5 w-5" /> Print
            </button>
            <button
              className="ml-auto"
              onClick={() =>
                backPathIsPreviousInHistory
                  ? router.back()
                  : router.push(backPath)
              }
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>
          {loading ? (
            "Loading..."
          ) : (
            <>
              <div className="mt-10 text-center">
                <h1 className="text-2xl">{dessert.name}</h1>
                <p>{dessert.description}</p>
              </div>
              <hr className="my-5" />
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {dessert.recipe}
              </ReactMarkdown>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

RecipePage.getLayout = YearLayout;
