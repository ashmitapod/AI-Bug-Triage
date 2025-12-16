import Sidebar from "./Sidebar";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-(--bg-app)">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-(--border-subtle)">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 px-10 py-8">
        {children}
      </main>
    </div>
  );
}
