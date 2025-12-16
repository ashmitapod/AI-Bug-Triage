import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col px-6 py-8">
      <div className="mb-10 text-lg font-semibold text-(--text-primary)">
        Bug Triage
      </div>

      <nav className="flex flex-col gap-1">
        <SidebarItem href="/dashboard" label="Dashboard" />
        <SidebarItem href="/bugs" label="Bugs" />
        <SidebarItem href="/settings" label="Settings" />
      </nav>
    </div>
  );
}
