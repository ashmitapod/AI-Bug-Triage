interface BugBadgeProps {
  type: "severity" | "status";
  value: string;
}

export default function BugBadge({ type, value }: BugBadgeProps) {
  if (type === "severity") {
    const severityStyles: Record<string, string> = {
      Critical: "bg-blue-600 text-white",
      High: "bg-blue-500 text-white",
      Medium: "bg-blue-100 text-blue-700",
      Low: "bg-blue-50 text-blue-600",
    };

    return (
      <span
        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
          severityStyles[value] ?? "bg-gray-100 text-gray-600"
        }`}
      >
        {value}
      </span>
    );
  }

  // status
  return (
    <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
      {value}
    </span>
  );
}
