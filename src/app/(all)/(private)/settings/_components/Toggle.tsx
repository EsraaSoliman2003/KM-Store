import { useTranslations } from "next-intl";

export function Toggle({ checked = false }: { checked?: boolean }) {
    const t = useTranslations();

    return (
        <button
            type="button"
            aria-pressed={checked}
            className={`
                relative flex h-[22px] w-[40px] shrink-0
                items-center rounded-full
                p-[3px]
                transition-colors duration-200
                ${checked ? "bg-(--main)" : "bg-(--text-muted)"}
            `}
        >
            <span
                className={`
                    block h-4 w-4 rounded-full
                    bg-white shadow-sm
                    transition-transform duration-200
                    ${checked ? `${t("dir") === "rtl" ? "translate-x-[-18px]" : "translate-x-[18px]"}` : "translate-x-0"}
                `}
            />
        </button>
    );
}