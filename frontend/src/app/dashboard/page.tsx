import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of bug activity and system health"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <p className="text-sm text-(--text-secondary)">
            Open Bugs
          </p>
          <p className="mt-3 text-3xl font-semibold text-(--blue-primary)">
            —
          </p>
        </Card>

        <Card>
          <p className="text-sm text-(--text-secondary)">
            Critical Bugs
          </p>
          <p className="mt-3 text-3xl font-semibold text-(--blue-primary)">
            —
          </p>
        </Card>

        <Card>
          <p className="text-sm text-(--text-secondary)">
            Resolved Today
          </p>
          <p className="mt-3 text-3xl font-semibold text-(--blue-primary)">
            —
          </p>
        </Card>
      </div>
    </div>
  );
}
