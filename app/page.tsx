"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileTextIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarIcon,
  MailIcon,
  ShieldIcon,
  BuildingIcon,
  UtensilsIcon,
  StethoscopeIcon,
  GraduationCapIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
  CheckIcon,
  ZapIcon,
  UsersIcon,
  XIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  BarChart3Icon,
  DollarSignIcon,
  TimerIcon,
  BrainIcon,
  FolderIcon,
  SearchIcon,
  SettingsIcon,
  TrendingUpIcon,
  TargetIcon,
  LightbulbIcon,
  StarIcon,
  AwardIcon,
  GlobeIcon,
  SmartphoneIcon,
  MonitorIcon,
  TabletIcon,
  BellIcon,
} from "lucide-react";
import { useState, useEffect } from "react";

// Cool animation components
const FadeInOnScroll = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div
      className="animate-fade-in-up opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

const SlideInFromLeft = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div
      className="animate-slide-in-left opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

const SlideInFromRight = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div
      className="animate-slide-in-right opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

const FloatingCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="animate-float hover:animate-pulse transition-all duration-300 hover:scale-105">
      {children}
    </div>
  );
};

const GlowingButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative">{children}</div>
    </div>
  );
};

const BouncingIcon = ({ children }: { children: React.ReactNode }) => {
  return <div className="animate-bounce hover:animate-ping">{children}</div>;
};

// Navigation Component
const Navigation = () => (
  <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="relative">
            <FileTextIcon className="h-8 w-8 text-blue-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">
            Stay-Compliant
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://forms.gle/vCes8uW1XVFyGyrh7" target="_blank">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

// Hero Section Component
const HeroSection = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <SlideInFromLeft>
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse-glow">
              <BouncingIcon>
                <StarIcon className="h-4 w-4 mr-2" />
              </BouncingIcon>
              Trusted by 500+ Indian Businesses
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stop Worrying About{" "}
              <span className="gradient-text">Expired Licenses</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              The simplest way for Indian businesses to track, manage, and
              automate their license renewals. Never miss a deadline again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <GlowingButton className="w-full sm:w-auto">
                <Link
                  href="https://forms.gle/vCes8uW1XVFyGyrh7"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4"
                  >
                    Join Waitlist
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </GlowingButton>
              <Link href="https://calendly.com/aaveg/30min" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-4 hover-lift"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                Setup in 5 minutes
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                Start free trial
              </div>
            </div>
          </div>
        </SlideInFromLeft>

        <SlideInFromRight delay={200}>
          <div className="relative">
            <FloatingCard>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-transform duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">
                      Stay-Compliant Dashboard
                    </h3>
                    <div className="flex space-x-2">
                      <Badge variant="overdue">2 Overdue</Badge>
                      <Badge variant="dueSoon">3 Due Soon</Badge>
                      <Badge variant="active">8 Active</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200 animate-pulse">
                      <AlertTriangleIcon className="h-8 w-8 text-red-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-600">2</div>
                      <div className="text-sm text-gray-600">Overdue</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center border border-yellow-200">
                      <ClockIcon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-yellow-600">
                        3
                      </div>
                      <div className="text-sm text-gray-600">Due Soon</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                      <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-sm text-gray-600">Active</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-center space-x-3">
                        <AlertTriangleIcon className="h-5 w-5 text-red-500" />
                        <div>
                          <div className="font-medium text-gray-900">
                            FSSAI License
                          </div>
                          <div className="text-sm text-gray-500">
                            Expired 5 days ago
                          </div>
                        </div>
                      </div>
                      <Badge variant="overdue">Overdue</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
                      <div className="flex items-center space-x-3">
                        <ClockIcon className="h-5 w-5 text-yellow-500" />
                        <div>
                          <div className="font-medium text-gray-900">
                            GST Registration
                          </div>
                          <div className="text-sm text-gray-500">
                            Due in 12 days
                          </div>
                        </div>
                      </div>
                      <Badge variant="dueSoon">Due Soon</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center space-x-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium text-gray-900">
                            Trade License
                          </div>
                          <div className="text-sm text-gray-500">
                            Valid until Dec 2024
                          </div>
                        </div>
                      </div>
                      <Badge variant="active">Active</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                Live Demo
              </div>
            </FloatingCard>
          </div>
        </SlideInFromRight>
      </div>
    </div>
  </section>
);

// Current Problem Section Component
const CurrentProblemSection = () => (
  <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeInOnScroll>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <AlertTriangleIcon className="h-4 w-4 mr-2" />
            The Current Reality
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Most Indian Businesses Are Currently Managing Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A story of spreadsheets, missed deadlines, and constant stress
          </p>
        </div>
      </FadeInOnScroll>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <SlideInFromLeft>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-200">
            <div className="flex items-center mb-6">
              <FileTextIcon className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                The Spreadsheet Nightmare
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Manual Data Entry
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Someone manually enters license details into Excel/Google
                    Sheets
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Calendar Reminders
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Set up Google Calendar/Outlook reminders for each renewal
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Scattered Documents
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Important files stored in emails, local folders, and
                    physical files
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Human Dependency
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Everything relies on someone remembering to check and act
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SlideInFromLeft>

        <SlideInFromRight delay={200}>
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-center mb-4">
                <AlertTriangleIcon className="h-6 w-6 text-red-600 mr-2" />
                <h4 className="font-semibold text-red-800">The Hidden Costs</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Missed Renewals</span>
                  <span className="font-bold text-red-600">
                    ₹50,000 - ₹5,00,000
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Operational Disruption</span>
                  <span className="font-bold text-red-600">2-5 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Stress & Anxiety</span>
                  <span className="font-bold text-red-600">Constant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Time Spent Monthly</span>
                  <span className="font-bold text-red-600">8-12 Hours</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-orange-600 mr-2" />
                <h4 className="font-semibold text-orange-800">
                  Real Business Impact
                </h4>
              </div>
              <p className="text-gray-700 text-sm">
                &ldquo;Last month, we missed our FSSAI renewal by 3 days. The
                fine was ₹25,000, and we had to shut down for 2 days. Our
                revenue loss was ₹2,50,000. All because someone forgot to check
                the spreadsheet.&rdquo;
              </p>
              <p className="text-orange-700 text-sm font-medium mt-2">
                - Restaurant Owner, Mumbai
              </p>
            </div>
          </div>
        </SlideInFromRight>
      </div>
    </div>
  </section>
);

// Competitive Analysis Section
const CompetitiveAnalysisSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeInOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Other Solutions Don&apos;t Work for Indian SMEs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve analyzed the market and found the gaps that leave Indian
            businesses vulnerable
          </p>
        </div>
      </FadeInOnScroll>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <FadeInOnScroll delay={100}>
          <Card className="border-red-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileTextIcon className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-red-800">
                Spreadsheets & Calendars
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Free & Familiar</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Flexible</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Manual & Error-prone</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Manual Reminders</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Poor Collaboration</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        <FadeInOnScroll delay={200}>
          <Card className="border-yellow-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-yellow-800">
                Enterprise ERP Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Powerful Features</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Deep Integration</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">₹10L+ Cost</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Massive Overkill</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Years to Setup</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        <FadeInOnScroll delay={300}>
          <Card className="border-blue-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-blue-800">
                Global SaaS Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Mature Features</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Polished UI</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Not India-Focused</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Expensive Pricing</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Missing Local Licenses</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>

        <FadeInOnScroll delay={400}>
          <Card className="border-purple-200 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-purple-800">
                Service-Based Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                  <span>Done-For-You</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Expensive Hourly Rates</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">Reactive, Not Proactive</span>
                </div>
                <div className="flex items-center text-sm">
                  <XIcon className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-red-600">No Self-Service</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInOnScroll>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CurrentProblemSection />
      <CompetitiveAnalysisSection />

      {/* Solution Flow Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <ZapIcon className="h-4 w-4 mr-2" />
                The Stay-Compliant Solution
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your Complete Compliance Transformation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From chaos to complete control in just 3 simple steps
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeInOnScroll delay={100}>
              <div className="text-center hover-lift">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Centralize Everything
                </h3>
                <p className="text-gray-600 mb-6">
                  Add all your critical licenses—from your Trade License and GST
                  to Fire Safety and FSSAI—into a single, organized dashboard.
                </p>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <FileTextIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">
                      Add New License
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded border">
                      <div className="text-sm font-medium text-gray-700">
                        License Name
                      </div>
                      <div className="text-sm text-gray-500">
                        FSSAI Food License
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border">
                      <div className="text-sm font-medium text-gray-700">
                        Expiry Date
                      </div>
                      <div className="text-sm text-gray-500">15 March 2025</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <div className="text-sm font-medium text-blue-700">
                        Status
                      </div>
                      <div className="text-sm text-blue-600">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="text-center hover-lift">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Get Smart Reminders
                </h3>
                <p className="text-gray-600 mb-6">
                  Our system sends intelligent email reminders to you and your
                  team 30, 15, and 7 days before any license is due for renewal.
                </p>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <MailIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">
                      Smart Notifications
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-yellow-800">
                            30 Days Before
                          </div>
                          <div className="text-xs text-yellow-600">
                            First reminder sent
                          </div>
                        </div>
                        <MailIcon className="h-4 w-4 text-yellow-600" />
                      </div>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-red-800">
                            7 Days Before
                          </div>
                          <div className="text-xs text-red-600">
                            Final urgent reminder
                          </div>
                        </div>
                        <AlertTriangleIcon className="h-4 w-4 text-red-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <div className="text-center hover-lift">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <span className="text-3xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Create a Renewal Playbook
                </h3>
                <p className="text-gray-600 mb-6">
                  Store step-by-step renewal notes and a checklist of required
                  documents for every license.
                </p>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <ShieldIcon className="h-6 w-6 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">
                      License Details
                    </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                      <div className="text-sm font-medium text-blue-800 mb-2">
                        FSSAI Food License
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-blue-700">
                        <div>
                          Status: <span className="font-medium">Active</span>
                        </div>
                        <div>
                          Expires:{" "}
                          <span className="font-medium">15 Mar 2025</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        Required Documents
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                          Food Safety Management Plan
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                          Kitchen Layout Plan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Time Savings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How Much Time Can You Save?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real numbers from Indian businesses using Stay-Compliant
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInFromLeft>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <TimerIcon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Before Stay-Compliant
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly Time Spent</span>
                      <span className="font-bold text-red-600">8-12 Hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Setup Time</span>
                      <span className="font-bold text-red-600">2-3 Days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Risk of Missing Deadlines
                      </span>
                      <span className="font-bold text-red-600">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Team Coordination</span>
                      <span className="font-bold text-red-600">Manual</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <ZapIcon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      With Stay-Compliant
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly Time Spent</span>
                      <span className="font-bold text-green-600">
                        30 Minutes
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Setup Time</span>
                      <span className="font-bold text-green-600">
                        5 Minutes
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Risk of Missing Deadlines
                      </span>
                      <span className="font-bold text-green-600">Zero</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Team Coordination</span>
                      <span className="font-bold text-green-600">
                        Streamlined
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInFromLeft>

            <SlideInFromRight delay={200}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Your Time Savings Calculator
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      95%
                    </div>
                    <div className="text-gray-600">Time Saved Monthly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      ₹50,000
                    </div>
                    <div className="text-gray-600">Average Fines Avoided</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600">Renewal Success Rate</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-blue-800 font-medium">
                      &ldquo;We used to spend 10 hours monthly on compliance.
                      Now it&apos;s just 30 minutes. That&apos;s 9.5 hours saved
                      every month!&rdquo;
                    </p>
                    <p className="text-blue-600 text-sm mt-2">
                      - Clinic Director, Delhi
                    </p>
                  </div>
                </div>
              </div>
            </SlideInFromRight>
          </div>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get Started in 5 Minutes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No complex setup, no training required, no credit card needed
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInOnScroll delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sign Up Free
                </h3>
                <p className="text-gray-600">
                  Create your account in 30 seconds. No credit card required.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Add Your Licenses
                </h3>
                <p className="text-gray-600">
                  Import existing licenses or add them one by one. Takes 2-3
                  minutes.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  You&apos;re Done!
                </h3>
                <p className="text-gray-600">
                  Start receiving smart reminders and enjoy peace of mind.
                </p>
              </div>
            </FadeInOnScroll>
          </div>

          <FadeInOnScroll delay={400}>
            <div className="text-center mt-12">
              <Link href="https://forms.gle/vCes8uW1XVFyGyrh7" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4"
                >
                  Join Waitlist
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                Join 500+ Indian businesses already using Stay-Compliant
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Multi-Tenancy Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Multi-Tenancy for Growing Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage multiple stores, locations, and team members from a
                single powerful dashboard
              </p>
            </div>
          </FadeInOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <SlideInFromLeft>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <UsersIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Team Collaboration
                    </h3>
                    <p className="text-gray-600">
                      Invite unlimited team members with role-based access.
                      Assign different permissions for managers, accountants,
                      and compliance officers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <BuildingIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Multiple Locations
                    </h3>
                    <p className="text-gray-600">
                      Manage licenses for different branches, stores, or
                      business units. Each location can have its own set of
                      licenses and team members.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <ShieldIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Centralized Control
                    </h3>
                    <p className="text-gray-600">
                      Get a bird&apos;s eye view of all your compliance status
                      across locations. Monitor deadlines, track renewals, and
                      manage documents centrally.
                    </p>
                  </div>
                </div>
              </div>
            </SlideInFromLeft>

            <SlideInFromRight>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 rounded-t-xl -mt-8 -mx-8 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">
                      Multi-Location Dashboard
                    </h3>
                    <div className="flex space-x-2">
                      <Badge
                        variant="active"
                        className="bg-white text-purple-600"
                      >
                        3 Locations
                      </Badge>
                      <Badge
                        variant="active"
                        className="bg-white text-purple-600"
                      >
                        12 Team Members
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center space-x-3">
                      <BuildingIcon className="h-5 w-5 text-purple-500" />
                      <div>
                        <div className="font-medium text-gray-900">
                          Mumbai Branch
                        </div>
                        <div className="text-sm text-gray-500">
                          8 licenses • 4 team members
                        </div>
                      </div>
                    </div>
                    <Badge variant="active">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center space-x-3">
                      <BuildingIcon className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-medium text-gray-900">
                          Delhi Branch
                        </div>
                        <div className="text-sm text-gray-500">
                          6 licenses • 3 team members
                        </div>
                      </div>
                    </div>
                    <Badge variant="active">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center space-x-3">
                      <BuildingIcon className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium text-gray-900">
                          Bangalore Branch
                        </div>
                        <div className="text-sm text-gray-500">
                          5 licenses • 2 team members
                        </div>
                      </div>
                    </div>
                    <Badge variant="active">Active</Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Total Licenses:</span>
                    <span className="font-semibold text-blue-600">19</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Due This Month:</span>
                    <span className="font-semibold text-yellow-600">3</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Team Members:</span>
                    <span className="font-semibold text-green-600">9</span>
                  </div>
                </div>
              </div>
            </SlideInFromRight>
          </div>

          <FadeInOnScroll>
            <div className="text-center">
              <Link href="https://forms.gle/vCes8uW1XVFyGyrh7" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4"
                >
                  Start Managing Multiple Locations
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-gray-600 text-sm mt-4">
                Perfect for businesses with multiple branches, franchises, or
                locations
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Compliance Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of Indian businesses that have eliminated compliance
              stress
            </p>
            <Link href="https://forms.gle/vCes8uW1XVFyGyrh7" target="_blank">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100"
              >
                Join Waitlist
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              Setup takes 5 minutes • Start free trial • No hidden costs
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FileTextIcon className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-bold">Stay-Compliant</span>
            </div>
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Stay-Compliant. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
