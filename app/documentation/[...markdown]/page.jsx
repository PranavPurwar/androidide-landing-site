import Footer from "@/components/Footer";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./page.module.css";

export const metadata = {
  title: "Documentation",
  description: "Guide for using AndroidIDE.",
};

export default async function DocMarkdown({ params: { markdown } }) {
  let markdownString;
  try {
    const markdownPath = `${process.env.NEXT_PUBLIC_DOCS_URL}/${markdown.join(
      "/"
    )}.md`;
    const res = await fetch(markdownPath, { next: { revalidate: 0 } });
    markdownString = await res.text();
  } catch {
    markdownString = "";
  }
  return (
    <>
      <main className="bg-base-200 min-h-[60%] flex flex-col items-stretch">
        <div
          className={`w-full max-w-[100%] md:max-w-2xl p-8 overflow-x-scroll ${styles.markdown}`}
        >
          <ReactMarkdown
            children={markdownString}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-semibold" {...props} />
              ),
              a: ({ node, ...props }) => <a className="link" {...props} />,
              sup: ({ node, ...props }) => (
                <sup className="text-xs -top-[0.75rem]" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="bg-base-300 p-1 text-sm rounded" {...props} />
              ),
              pre: ({ node, ...props }) => (
                <div className="mockup-code w-full min-w-0">
                  <pre data-prefix="$" className="pb-0">
                    <code {...props} className="pr-4" />
                  </pre>
                </div>
              ),
              ul: ({ node, ...props }) => (
                <ul {...props} style={{ all: "revert" }} />
              ),
              li: ({ node, ...props }) => (
                <li {...props} style={{ all: "revert" }} />
              ),
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
