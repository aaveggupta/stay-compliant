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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileTextIcon, PlusIcon, SearchIcon, FilterIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data - in a real app this would come from your database
const mockLicenses = [
  {
    id: 1,
    name: "Business License",
    assetName: "Main Office",
    issuingAuthority: "City Hall",
    renewalDate: "2024-03-15",
    status: "overdue" as const,
    renewalFrequency: "Annually",
  },
  {
    id: 2,
    name: "Food Service Permit",
    assetName: "Kitchen Equipment",
    issuingAuthority: "Health Department",
    renewalDate: "2024-04-20",
    status: "dueSoon" as const,
    renewalFrequency: "Annually",
  },
  {
    id: 3,
    name: "Fire Safety Certificate",
    assetName: "Building",
    issuingAuthority: "Fire Department",
    renewalDate: "2024-06-10",
    status: "active" as const,
    renewalFrequency: "Annually",
  },
  {
    id: 4,
    name: "Liquor License",
    assetName: "Bar Area",
    issuingAuthority: "State Alcohol Board",
    renewalDate: "2024-05-01",
    status: "dueSoon" as const,
    renewalFrequency: "Annually",
  },
  {
    id: 5,
    name: "Building Permit",
    assetName: "Renovation Project",
    issuingAuthority: "Building Department",
    renewalDate: "2024-08-15",
    status: "active" as const,
    renewalFrequency: "One-Time",
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

export default function LicensesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredLicenses = mockLicenses.filter((license) => {
    const matchesSearch =
      license.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      license.assetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      license.issuingAuthority.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || license.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const sortedLicenses = [...filteredLicenses].sort((a, b) => {
    // Sort by status priority: overdue > dueSoon > active
    const statusPriority = { overdue: 0, dueSoon: 1, active: 2 };
    const statusDiff = statusPriority[a.status] - statusPriority[b.status];

    if (statusDiff !== 0) return statusDiff;

    // Then sort by renewal date
    return (
      new Date(a.renewalDate).getTime() - new Date(b.renewalDate).getTime()
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Licenses</h1>
          <p className="text-muted-foreground">
            Manage all your organization's licenses and permits
          </p>
        </div>
        <Button asChild>
          <Link href="/licenses/new">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add License
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FilterIcon className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search licenses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="dueSoon">Due Soon</SelectItem>
                <SelectItem value="active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* License List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileTextIcon className="h-5 w-5" />
            All Licenses ({sortedLicenses.length})
          </CardTitle>
          <CardDescription>
            Licenses are sorted by priority (overdue first) and renewal date
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sortedLicenses.length === 0 ? (
            <div className="text-center py-8">
              <FileTextIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No licenses found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filters"
                  : "Get started by adding your first license"}
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Button asChild>
                  <Link href="/licenses/new">Add License</Link>
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedLicenses.map((license) => (
                <div
                  key={license.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileTextIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{license.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {license.assetName} • {license.issuingAuthority}
                      </p>
                      <div className="flex items-center gap-4 mt-1">
                        <p className="text-sm text-muted-foreground">
                          Renewal:{" "}
                          {new Date(license.renewalDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Frequency: {license.renewalFrequency}
                        </p>
                      </div>
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}
