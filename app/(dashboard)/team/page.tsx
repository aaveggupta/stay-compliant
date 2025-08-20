"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  UsersIcon,
  PlusIcon,
  MailIcon,
  CrownIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

// Mock data - in a real app this would come from your database
const mockMembers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@ayzhospital.com",
    role: "admin",
    status: "active",
    joinedAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@ayzhospital.com",
    role: "member",
    status: "active",
    joinedAt: "2024-02-01",
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike.wilson@ayzhospital.com",
    role: "member",
    status: "pending",
    joinedAt: "2024-03-10",
  },
];

const mockInvitations = [
  {
    id: 1,
    email: "alice.brown@ayzhospital.com",
    role: "member",
    invitedAt: "2024-03-15",
    expiresAt: "2024-03-22",
  },
];

export default function TeamPage() {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("member");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an invitation
    console.log("Invitation sent to:", inviteEmail, "with role:", inviteRole);
    setInviteEmail("");
  };

  const getRoleBadge = (role: string) => {
    if (role === "admin") {
      return (
        <Badge variant="secondary" className="flex items-center gap-1">
          <CrownIcon className="h-3 w-3" />
          Admin
        </Badge>
      );
    }
    return <Badge variant="outline">Member</Badge>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="active">Active</Badge>;
      case "pending":
        return <Badge variant="dueSoon">Pending</Badge>;
      default:
        return <Badge variant="secondary">Inactive</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
        <p className="text-muted-foreground">
          Manage team members and their access to your organization
        </p>
      </div>

      {/* Plan Limits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5" />
            Current Plan: Professional
          </CardTitle>
          <CardDescription>
            You can invite up to 15 team members. Currently using{" "}
            {mockMembers.length + mockInvitations.length} of 15 slots.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{
                width: `${
                  ((mockMembers.length + mockInvitations.length) / 15) * 100
                }%`,
              }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {15 - (mockMembers.length + mockInvitations.length)} slots remaining
          </p>
        </CardContent>
      </Card>

      {/* Invite New Member */}
      <Card>
        <CardHeader>
          <CardTitle>Invite Team Member</CardTitle>
          <CardDescription>
            Send an invitation to join your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleInvite} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="colleague@company.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select value={inviteRole} onValueChange={setInviteRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              type="submit"
              disabled={mockMembers.length + mockInvitations.length >= 15}
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Send Invitation
            </Button>
            {mockMembers.length + mockInvitations.length >= 15 && (
              <p className="text-sm text-destructive">
                User limit reached. Please upgrade to invite more team members.
              </p>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Pending Invitations */}
      {mockInvitations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Invitations</CardTitle>
            <CardDescription>
              Invitations that have been sent but not yet accepted
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockInvitations.map((invitation) => (
                <div
                  key={invitation.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <MailIcon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{invitation.email}</h3>
                      <p className="text-sm text-muted-foreground">
                        Invited{" "}
                        {new Date(invitation.invitedAt).toLocaleDateString()} •
                        Expires{" "}
                        {new Date(invitation.expiresAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getRoleBadge(invitation.role)}
                    <Button variant="outline" size="sm">
                      Resend
                    </Button>
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Current members of your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <UserIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.email}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Joined {new Date(member.joinedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getRoleBadge(member.role)}
                  {getStatusBadge(member.status)}
                  <Button variant="outline" size="sm">
                    Edit
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
