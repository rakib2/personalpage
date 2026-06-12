import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Renders essay markdown into HUD-styled prose. */
export function EssayBody({ content }: { content: string }) {
  return (
    <div className="prose-hud">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
