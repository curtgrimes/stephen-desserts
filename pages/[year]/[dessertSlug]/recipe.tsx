import { useDessert } from "hooks/useDesserts";
import YearLayout from "layouts/YearLayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  AiFillCloseCircle as CloseIcon,
  AiFillPrinter as PrintIcon,
} from "react-icons/ai";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
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
    <motion.div className="fixed inset-0 z-10 overflow-y-auto pt-5 bg-black bg-opacity-50">
      <div className="min-h-screen bg-white rounded-t-3xl mx-1">
        <div className="max-w-lg mx-auto p-4">
          <div className="flex text-gray-400 text-xs print-d-none">
            <button
              className="flex items-center"
              onClick={() => window.print()}
            >
              <PrintIcon className="w-5 h-5 mr-1" /> Print
            </button>
            <button
              className="ml-auto"
              onClick={() =>
                backPathIsPreviousInHistory
                  ? router.back()
                  : router.push(backPath)
              }
            >
              <CloseIcon className="w-7 h-7" />
            </button>
          </div>
          {loading ? (
            "Loading..."
          ) : (
            <>
              <div className="text-center mt-10">
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
