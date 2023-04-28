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
    const res = await fetch(markdownPath);
    markdownString = await res.text();
  } catch {
    markdownString = "";
  }
  return (
    <>
      <main className="bg-base-200 min-h-[60%] p-8 flex flex-col items-stretch">
        <div className={styles.markdown}>
          <ReactMarkdown
            children={markdownString}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
