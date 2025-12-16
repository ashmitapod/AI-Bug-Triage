export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-(--border-subtle) bg-(--bg-card) p-6">
      {children}
    </div>
  );
}
