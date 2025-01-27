import "./AudioInputButton.scss";
import { Mic, MicOff } from "lucide-react";
import clsx from "clsx";
import { t } from "../i18n";
import { Island } from "./Island";

interface AudioInputButtonProps {
  checked: boolean;
  onChange: () => void;
  title: string;
}

export const AudioInputButton = ({
  checked,
  onChange,
  title,
}: AudioInputButtonProps) => {
  return (
    <Island style={{
      marginLeft: 8,
      alignSelf: "center",
      height: "fit-content",
    }}>
    <button
        className={clsx({ active: checked })}
        style={{
          backgroundColor: checked ? "var(--color-primary)" : "var(--color-secondary)",
          border: "none",
          borderRadius: "10px",
          height: "40px",
          width: "40px",

          cursor: "pointer",
        }}
        type="button"
        onClick={onChange}
        aria-label={title}
        aria-pressed={checked}
    >
        {checked ? (
        <Mic size={20} strokeWidth={2} />
        ) : (
        <MicOff size={20} strokeWidth={2} />
        )}
    </button>
    </Island>
  );
}; 