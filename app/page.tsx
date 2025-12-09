"use client";

import Link from "next/link";
import { AbstractCube } from "@/components/abstract-cube/abstract-cube";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserMenu } from "@/components/user-menu";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AbstractCube />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="font-semibold text-lg">
            Abstract
          </Link>
          <UserMenu />
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1">
        <section className="container mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 sm:py-32 md:py-40 lg:py-48">
          <div className="flex w-full flex-col items-center gap-8 text-center">
            <h1 className="max-w-4xl font-semibold text-5xl leading-[1.1] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-8xl">
              Abstract is the Unreal Engine
              <br />
              replacement I've been waiting for.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
              A platform that doesn't just meet your needs — it anticipates
              them.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24">
          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
              Clean and calm, Abstract shapes itself to how you create. In
              programming, abstraction means hiding complexity while presenting
              a simplified view. Abstract brings this philosophy to 3D content
              creation—powerful Unreal Engine capabilities, delivered through a
              clean, intuitive interface.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Abstract is a SaaS platform that lets you create stunning 3D
              digital content using Unreal Engine's powerful capabilities.
              Through real-time pixel streaming, everything runs in the
              cloud—accessible from any device, anywhere.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="container mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40"
        >
          <div className="space-y-32 lg:space-y-40">
            {/* Feature 1 */}
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="font-semibold text-3xl leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                  Space for the different sides of you.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
                  Effortlessly organize everything you create—work projects,
                  personal experiments, collaborative spaces—all in one place
                  with cloud-based organization.
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-square rounded-lg border border-border/50 bg-muted/20" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="font-semibold text-3xl leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                  Your perfect setup.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
                  Find your perfect workflow with a simplified interface that
                  hides Unreal Engine's complexity. Focus on creating, not
                  navigating menus.
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-square rounded-lg border border-border/50 bg-muted/20" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="font-semibold text-3xl leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                  The comfort of power.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
                  Since Abstract streams from the cloud, you can access Unreal
                  Engine's full power from any device. We handle the heavy
                  lifting on powerful machines—you just create.
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-square rounded-lg border border-border/50 bg-muted/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="space-y-16">
            <h2 className="text-center font-semibold text-3xl leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Why Abstract?
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="font-semibold text-xl sm:text-2xl">
                  Clean, Minimal UI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unreal Engine is powerful but complex. We've simplified the
                  interface, hiding unnecessary tools so you can focus on what
                  matters—creating amazing content.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-xl sm:text-2xl">
                  Limitless Power
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access Unreal Engine's full power from any device. We handle
                  the heavy lifting on powerful cloud machines—you just create.
                </p>
              </div>
              <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold text-xl sm:text-2xl">
                  Easy Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All your assets live in the cloud. No GitHub setup, no complex
                  workflows. Just create a project, invite your team, and start
                  collaborating instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-semibold text-3xl leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Enter your new home for 3D creation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
              Subscribe to our newsletter to get the latest updates and tips.
            </p>
            <div className="w-full max-w-md">
              <form className="flex flex-col gap-3 sm:flex-row">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>
                <Button type="submit" size="lg" className="sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-border/40 border-t py-12">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Abstract. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link
              href="#"
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
