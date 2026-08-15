import { useTranslations } from "next-intl";

export function DescriptionContent() {
    const t = useTranslations();

    const points = [
        t("descriptionPoint1"),
        t("descriptionPoint2"),
        t("descriptionPoint3"),
    ];

    const highlights = [
        t("highlightDriver"),
        t("highlightBatteryLife"),
        t("highlightFastCharge"),
        t("highlightHiRes"),
        t("highlightAnc"),
        t("highlightBluetooth"),
        t("highlightCarryCase"),
        t("highlightMultipoint"),
    ];

    return (
        <div className="">
            <h2 className="text-[24px] font-semibold text-[var(--main)]">
                {t("engineeredForPureSound")}
            </h2>

            <ul className="mt-2 space-y-2 pl-3 text-[16px] leading-[1.65] text-[var(--text-muted)]">
                {points.map((point) => (
                    <li key={point} className="list-disc">
                        {point}
                    </li>
                ))}
            </ul>

            <h2 className="mt-8 text-[24px] font-semibold text-[var(--main)]">
                {t("keyHighlights")}
            </h2>

            <ul className="mt-2 space-y-2 pl-3 text-[16px] leading-[1.5] text-[var(--text-muted)]">
                {highlights.map((highlight) => (
                    <li key={highlight} className="list-disc">{highlight}</li>
                ))}
            </ul>
        </div>
    );
}