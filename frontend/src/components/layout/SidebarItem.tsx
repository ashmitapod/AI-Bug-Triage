"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-(--blue-soft) text-(--blue-primary)"
          : "text-(--text-secondary) hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );
}
