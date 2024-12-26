import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import type { ExcalidrawMathElement } from "../element/types";
import { getFontFamilyString } from "../utils";

interface MathElementProps {
  element: ExcalidrawMathElement;
  onEdit?: (element: ExcalidrawMathElement) => void;
}

export const MathElement = ({ element, onEdit }: MathElementProps) => {
  return (
    <div
      className="excalidraw-math-element"
      style={{
        fontFamily: "inherit",
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {element.text}
      </ReactMarkdown>
    </div>
  );
};
