"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type Bug = {
  id: string;
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  status: "Open" | "In Progress" | "Resolved";
  assignee: string;
  createdAt: string;
  description: string;
};

export default function BugDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  // Mock data (backend will replace this)
  const bug: Bug = {
    id,
    title: "Login page crashes on invalid token",
    severity: "High",
    status: "Open",
    assignee: "Unassigned",
    createdAt: "2025-03-01",
    description:
      "When an invalid authentication token is used, the login page crashes instead of showing an error message.",
  };

  return (
    <div>
      {/* Breadcrumbs / Back navigation */}
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/bugs" className="hover:text-gray-900">
          Bugs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{bug.id}</span>
      </nav>

      <PageHeader
        title={bug.title}
        subtitle={`Bug ID: ${bug.id}`}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h2 className="mb-2 text-sm font-medium text-gray-900">
              Description
            </h2>
            <p className="text-sm text-gray-700">
              {bug.description}
            </p>
          </Card>

          <Card>
            <h2 className="mb-2 text-sm font-medium text-gray-900">
              Activity
            </h2>
            <p className="text-sm text-gray-500">
              Activity timeline will appear here.
            </p>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card>
            <h2 className="mb-4 text-sm font-medium text-gray-900">
              Details
            </h2>

            <div className="space-y-4 text-sm">
              {/* Severity */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Severity</span>
                <select
                  defaultValue={bug.severity}
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Status</span>
                <select
                  defaultValue={bug.status}
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm"
                >
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>

              {/* Assignee */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Assignee</span>
                <span className="text-gray-900">
                  {bug.assignee}
                </span>
              </div>

              {/* Created */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Created</span>
                <span className="text-gray-900">
                  {bug.createdAt}
                </span>
              </div>
            </div>
          </Card>

          {/* AI Panel */}
          <Card>
            <h2 className="mb-2 text-sm font-medium text-gray-900">
              AI Analysis (Coming Soon)
            </h2>
            <p className="text-sm text-gray-500">
              This section will explain the root cause, suggest
              fixes, and recommend assignees using AI.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
