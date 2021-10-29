import { useDessert } from "hooks/useDesserts";
import YearLayout from "layouts/YearLayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CgCloseO as CloseIcon } from "react-icons/cg";
import { useRouter } from "next/router";
import { useDidMount } from "rooks";

export default function RecipePage() {
  const { dessert, loading } = useDessert();
  const router = useRouter();
  const backPath = `/${router.query.year}/${router.query.dessertSlug}`;
  const backPathIsPreviousInHistory =
    backPath === globalThis?.sessionStorage?.getItem("previousPath");

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto py-5">
      <div className="min-h-screen bg-white rounded-3xl mx-1">
        <div className="max-w-lg mx-auto p-4">
          <div className="flex">
            <button
              className="ml-auto text-gray-400"
              onClick={() =>
                backPathIsPreviousInHistory
                  ? router.back()
                  : router.replace(backPath)
              }
            >
              <CloseIcon className="w-7 h-7" />
            </button>
          </div>
          {loading ? (
            "Loading..."
          ) : (
            <>
              <div className="text-center mt-4">
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
    </div>
  );
}

RecipePage.getLayout = YearLayout;
