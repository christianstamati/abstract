import type { Metadata } from "next";
import { ProjectCards } from "@/app/(auth)/dashboard/projects/project-cards";

export const metadata: Metadata = {
  title: "Projects | Abstract",
  description: "Projects page",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="relative flex flex-col gap-4 overflow-auto px-4 py-1 lg:px-6">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
}
