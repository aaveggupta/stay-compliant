# Stay-Compliant

A comprehensive license management platform designed specifically for Indian businesses to track, manage, and automate their compliance requirements.

## Features

- **Centralized License Management**: Track all your business licenses in one place
- **Automated Renewal Reminders**: Never miss a deadline with smart notifications
- **Document Storage**: Store and organize all license-related documents
- **Team Collaboration**: Share access with your team members
- **Status Tracking**: Color-coded status indicators (Active, Due Soon, Overdue)

## Route Structure

- `/` - Landing page with compelling copy and call-to-action
- `/dashboard` - Main dashboard (redirects to `/(dashboard)`)
- `/(dashboard)` - Dashboard layout with sidebar navigation
- `/(dashboard)/(home)` - Dashboard home page with license overview

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Landing Page

The landing page addresses key pain points for Indian business owners:

- **Problem Section**: Highlights the risks of manual tracking, fines, and scattered information
- **Solution Section**: Showcases the centralized compliance platform
- **How It Works**: 3-step process to get started
- **Target Audience**: Specific sections for restaurants, clinics, schools, and retail businesses
- **Call-to-Action**: Clear path to sign up for free

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Development

The project uses a modern Next.js structure with route groups for better organization:

- `app/page.tsx` - Landing page
- `app/dashboard/page.tsx` - Dashboard redirect
- `app/(dashboard)/layout.tsx` - Dashboard layout with sidebar
- `app/(dashboard)/page.tsx` - Main dashboard page
- `app/(dashboard)/(home)/page.tsx` - Dashboard home content
- `components/` - Reusable UI components
- `components/ui/` - shadcn/ui components
