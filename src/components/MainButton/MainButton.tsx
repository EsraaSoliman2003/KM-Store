import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function MainButton({
  text,
  className = "",
  style,
  href = "#",
  onClick,
}: Props) {
  const t = useTranslations();
  return (
    <Link
      href={href}
      style={style}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-[16px] group
        bg-gradient-to-r from-[#005F9F] to-[#0D3B5E]
        px-4 py-2.5
        sm:px-5 sm:py-3
        lg:px-8 lg:py-3
        text-sm sm:text-base
        font-medium text-white
        whitespace-nowrap
        transition-all duration-200
        hover:opacity-80
        ${className}
      `}
    >
      <span>{text}</span>
      <span className="relative z-10 text-lg leading-none transition-all duration-300 group-hover:rotate-[-15deg] sm:text-xl">
        {t("dir") === "ltr" ? "→" : " ←"}
      </span>
    </Link>
  );
}