"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileTextIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
} from "lucide-react";
import Link from "next/link";

// Mock data - in a real app this would come from your database
const mockLicenses = [
  {
    id: 1,
    name: "Business License",
    assetName: "Main Office",
    issuingAuthority: "City Hall",
    renewalDate: "2024-03-15",
    status: "overdue" as const,
  },
  {
    id: 2,
    name: "Food Service Permit",
    assetName: "Kitchen Equipment",
    issuingAuthority: "Health Department",
    renewalDate: "2024-04-20",
    status: "dueSoon" as const,
  },
  {
    id: 3,
    name: "Fire Safety Certificate",
    assetName: "Building",
    issuingAuthority: "Fire Department",
    renewalDate: "2024-06-10",
    status: "active" as const,
  },
];

const getStatusBadge = (status: "overdue" | "dueSoon" | "active") => {
  const variants = {
    overdue: { variant: "overdue" as const, text: "Overdue" },
    dueSoon: { variant: "dueSoon" as const, text: "Due Soon" },
    active: { variant: "active" as const, text: "Active" },
  };

  const config = variants[status];
  return <Badge variant={config.variant}>{config.text}</Badge>;
};

const getStatusIcon = (status: "overdue" | "dueSoon" | "active") => {
  switch (status) {
    case "overdue":
      return <AlertTriangleIcon className="h-5 w-5 text-red-500" />;
    case "dueSoon":
      return <ClockIcon className="h-5 w-5 text-yellow-500" />;
    case "active":
      return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
  }
};

export default function DashboardContent() {
  const overdueCount = mockLicenses.filter(
    (l) => l.status === "overdue"
  ).length;
  const dueSoonCount = mockLicenses.filter(
    (l) => l.status === "dueSoon"
  ).length;
  const activeCount = mockLicenses.filter((l) => l.status === "active").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your license compliance status
          </p>
        </div>
        <Button asChild>
          <Link href="/licenses/new">Add License</Link>
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertTriangleIcon className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {overdueCount}
            </div>
            <p className="text-xs text-muted-foreground">
              Licenses past renewal date
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due Soon</CardTitle>
            <ClockIcon className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {dueSoonCount}
            </div>
            <p className="text-xs text-muted-foreground">
              Renewals within 30 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <CheckCircleIcon className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {activeCount}
            </div>
            <p className="text-xs text-muted-foreground">
              Licenses in good standing
            </p>
          </CardContent>
        </Card>
      </div>

      {/* License List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileTextIcon className="h-5 w-5" />
            Recent Licenses
          </CardTitle>
          <CardDescription>
            Licenses requiring attention or recently updated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockLicenses.map((license) => (
              <div
                key={license.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  {getStatusIcon(license.status)}
                  <div>
                    <h3 className="font-medium">{license.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {license.assetName} • {license.issuingAuthority}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Renewal:{" "}
                      {new Date(license.renewalDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(license.status)}
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/licenses/${license.id}`}>View</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
