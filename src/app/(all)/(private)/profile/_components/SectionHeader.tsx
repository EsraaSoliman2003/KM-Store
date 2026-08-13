export function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-(--border-dark) px-4 py-4.5">
      <h2 className="text-[16px] font-semibold text-(--text-primary)">
        {title}
      </h2>

      {action && (
        <button
          type="button"
          className="text-[14px] font-medium text-(--main) border-b border-(--main)"
        >
          {action}
        </button>
      )}
    </div>
  );
}