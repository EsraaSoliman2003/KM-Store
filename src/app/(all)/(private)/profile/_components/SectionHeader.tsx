import { useRouter } from "next/navigation";

export function SectionHeader({
  title,
  action,
  href,
}: {
  title: string;
  action?: string;
  href?: string;
}) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between border-b border-(--border-dark) px-4 py-4.5">
      <h2 className="text-[16px] font-semibold text-(--text-primary)">
        {title}
      </h2>

      {action && (
        <button
          type="button"
          className="text-[14px] font-medium text-(--main) border-b border-(--main)"
          onClick={() => href && router.push(href)}
        >
          {action}
        </button>
      )}
    </div>
  );
}