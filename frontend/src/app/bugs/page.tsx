"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import BugRow from "@/components/bugs/BugRow";
import NewBugModal from "@/components/bugs/NewBugModal";

/**
 * Shared Bug type
 * (Matches BugRow expectations exactly)
 */
type Bug = {
  id: string;
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  status: "Open" | "In Progress" | "Resolved";
  assignee: string;
  createdAt: string;
};

const mockBugs: Bug[] = [
  {
    id: "1",
    title: "Login page crashes on invalid token",
    severity: "High",
    status: "Open",
    assignee: "Unassigned",
    createdAt: "2025-03-01",
  },
  {
    id: "2",
    title: "UI alignment issue on mobile",
    severity: "Low",
    status: "In Progress",
    assignee: "Aman",
    createdAt: "2025-02-27",
  },
];

export default function BugsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="Bugs"
        subtitle="Track and triage reported issues"
        action={
          <Button onClick={() => setOpen(true)}>
            New Bug
          </Button>
        }
      />

      {mockBugs.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-6 text-sm text-gray-500">
          No bugs reported yet.
        </div>
      ) : (
        <Table
          headers={[
            "Title",
            "Severity",
            "Status",
            "Assignee",
            "Created",
          ]}
        >
          {mockBugs.map((bug) => (
            <BugRow key={bug.id} bug={bug} />
          ))}
        </Table>
      )}

      {/* STEP 11: modal must be rendered */}
      <NewBugModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
