"use client";

import { useRouter } from "next/navigation";
import Badge from "@/components/ui/Badge";

export type Bug = {
  id: string;
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  status: "Open" | "In Progress" | "Resolved";
  assignee: string;
  createdAt: string;
};

/**
 * Severity = risk → semantic colors
 * (This is the correct use of red/yellow/green)
 */
function severityVariant(severity: Bug["severity"]) {
  switch (severity) {
    case "Low":
      return "green";
    case "Medium":
      return "yellow";
    case "High":
      return "red";
    case "Critical":
      return "red";
    default:
      return "gray";
  }
}

/**
 * Status = workflow → calmer colors
 */
function statusVariant(status: Bug["status"]) {
  switch (status) {
    case "Open":
      return "blue";
    case "In Progress":
      return "yellow";
    case "Resolved":
      return "green";
    default:
      return "gray";
  }
}

export default function BugRow({ bug }: { bug: Bug }) {
  const router = useRouter();

  return (
    <tr
      onClick={() => router.push(`/bugs/${bug.id}`)}
      className="cursor-pointer transition-colors hover:bg-gray-50"
    >
      <td className="px-6 py-4 text-sm font-medium text-gray-900">
        {bug.title}
      </td>

      <td className="px-6 py-4">
        <Badge variant={severityVariant(bug.severity)}>
          {bug.severity}
        </Badge>
      </td>

      <td className="px-6 py-4">
        <Badge variant={statusVariant(bug.status)}>
          {bug.status}
        </Badge>
      </td>

      <td className="px-6 py-4 text-sm text-gray-700">
        {bug.assignee}
      </td>

      <td className="px-6 py-4 text-sm text-gray-500">
        {bug.createdAt}
      </td>
    </tr>
  );
}
