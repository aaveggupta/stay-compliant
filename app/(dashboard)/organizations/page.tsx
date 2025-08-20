"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2Icon, PlusIcon, UsersIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";

// Mock data - in a real app this would come from your database
const mockOrganizations = [
  {
    id: 1,
    name: "AYZ Hospital",
    licenseCount: 12,
    memberCount: 8,
    subscriptionPlan: "Professional",
    isActive: true,
  },
  {
    id: 2,
    name: "Aaveg's Corner Shop",
    licenseCount: 5,
    memberCount: 2,
    subscriptionPlan: "Basic",
    isActive: true,
  },
  {
    id: 3,
    name: "Downtown Restaurant",
    licenseCount: 8,
    memberCount: 4,
    subscriptionPlan: "Professional",
    isActive: false,
  },
];

export default function OrganizationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organizations</h1>
          <p className="text-muted-foreground">
            Manage your business entities and their licenses
          </p>
        </div>
        <Button asChild>
          <Link href="/organizations/new">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Organization
          </Link>
        </Button>
      </div>

      {/* Current Organization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2Icon className="h-5 w-5" />
            Current Organization
          </CardTitle>
          <CardDescription>
            You are currently viewing: AYZ Hospital
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-accent/50">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg">AYZ Hospital</h3>
                <p className="text-sm text-muted-foreground">
                  Professional Plan • 8 members • 12 licenses
                </p>
              </div>
            </div>
            <Badge variant="secondary">Active</Badge>
          </div>
        </CardContent>
      </Card>

      {/* All Organizations */}
      <Card>
        <CardHeader>
          <CardTitle>All Organizations</CardTitle>
          <CardDescription>
            Switch between different business entities you manage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockOrganizations.map((org) => (
              <div
                key={org.id}
                className={`flex items-center justify-between p-4 border rounded-lg transition-colors ${
                  org.isActive ? "bg-accent/50" : "opacity-60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{org.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <FileTextIcon className="h-4 w-4" />
                        {org.licenseCount} licenses
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <UsersIcon className="h-4 w-4" />
                        {org.memberCount} members
                      </div>
                      <Badge variant="outline">{org.subscriptionPlan}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {org.isActive ? (
                    <Badge variant="active">Active</Badge>
                  ) : (
                    <Badge variant="secondary">Inactive</Badge>
                  )}
                  <Button variant="outline" size="sm">
                    Switch
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Organization Management */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create New Organization</CardTitle>
            <CardDescription>
              Add a new business entity to manage separately
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Each organization has its own licenses, team members, and
              subscription plan.
            </p>
            <Button asChild className="w-full">
              <Link href="/organizations/new">Create Organization</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invite to Organization</CardTitle>
            <CardDescription>
              Invite team members to collaborate on license management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Send invitations to team members to join your current
              organization.
            </p>
            <Button asChild className="w-full">
              <Link href="/team">Manage Team</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
