export function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[90px_minmax(0,1fr)] items-center gap-3 px-3 py-4 sm:grid-cols-[140px_minmax(0,1fr)]">
      <p className="text-[12px] text-(--text-muted)">
        {label}
      </p>

      <p className="truncate text-[14px] font-medium text-(--text-secondary)">
        {value}
      </p>
    </div>
  );
}