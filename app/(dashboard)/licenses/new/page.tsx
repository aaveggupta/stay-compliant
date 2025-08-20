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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowLeftIcon, PlusIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewLicensePage() {
  const [requiredDocs, setRequiredDocs] = useState<string[]>([""]);

  const addRequiredDoc = () => {
    setRequiredDocs([...requiredDocs, ""]);
  };

  const removeRequiredDoc = (index: number) => {
    if (requiredDocs.length > 1) {
      setRequiredDocs(requiredDocs.filter((_, i) => i !== index));
    }
  };

  const updateRequiredDoc = (index: number, value: string) => {
    const newDocs = [...requiredDocs];
    newDocs[index] = value;
    setRequiredDocs(newDocs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your API
    console.log("Form submitted");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/licenses">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Licenses
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New License</h1>
          <p className="text-muted-foreground">
            Create a comprehensive license record with renewal details
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>License Information</CardTitle>
          <CardDescription>
            Fill in the details for your new license or permit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="licenseName">License Name *</Label>
                <Input
                  id="licenseName"
                  placeholder="e.g., Business License, Food Service Permit"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="assetName">Associated Asset/Machine</Label>
                <Input
                  id="assetName"
                  placeholder="e.g., Main Office, Kitchen Equipment"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="issuingAuthority">Issuing Authority</Label>
                <Input
                  id="issuingAuthority"
                  placeholder="e.g., City Hall, Health Department"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="renewalFrequency">Renewal Frequency *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annually">Annually</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="one-time">One-Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="renewalDate">Renewal Date *</Label>
              <Input id="renewalDate" type="date" required />
            </div>

            {/* Renewal Process Notes */}
            <div className="space-y-2">
              <Label htmlFor="renewalNotes">Renewal Process Notes</Label>
              <Textarea
                id="renewalNotes"
                placeholder="Enter detailed renewal process notes. You can use Markdown formatting for lists, links, and emphasis.

Example:
- Submit Form 104-B to the issuing authority
- Include proof of payment (receipt required)
- Allow 2-3 weeks for processing
- Contact: renewal@authority.gov"
                rows={6}
              />
              <p className="text-sm text-muted-foreground">
                Use Markdown formatting for better organization. Supports lists,
                links, and emphasis.
              </p>
            </div>

            {/* Required Documents Checklist */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Required Documents Checklist</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addRequiredDoc}
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Document
                </Button>
              </div>

              <div className="space-y-3">
                {requiredDocs.map((doc, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="e.g., Previous Year's Certificate, Form 104-B, Proof of Payment"
                      value={doc}
                      onChange={(e) => updateRequiredDoc(index, e.target.value)}
                    />
                    {requiredDocs.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeRequiredDoc(index)}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                List all documents required for renewal. This helps ensure
                nothing is missed during the renewal process.
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Create License
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/licenses">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
