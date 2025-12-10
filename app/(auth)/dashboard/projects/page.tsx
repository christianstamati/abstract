import type { Metadata } from "next";
import { ProjectCards } from "@/app/(auth)/dashboard/projects/project-cards";

export const metadata: Metadata = {
  title: "Projects | Abstract",
  description: "Projects page",
};

// TODO: Replace with actual data from your data source
const mockProjects = [
  {
    id: "1",
    name: "Project Alpha",
    thumbnail: undefined,
    collaborators: [
      { id: "1", name: "John Doe", avatar: undefined },
      { id: "2", name: "Jane Smith", avatar: undefined },
    ],
  },
  {
    id: "2",
    name: "Project Beta",
    thumbnail: undefined,
    collaborators: [{ id: "3", name: "Alice Johnson", avatar: undefined }],
  },
  {
    id: "3",
    name: "Project Gamma",
    thumbnail: undefined,
    collaborators: [
      { id: "1", name: "John Doe", avatar: undefined },
      { id: "2", name: "Jane Smith", avatar: undefined },
      { id: "3", name: "Alice Johnson", avatar: undefined },
      { id: "4", name: "Bob Wilson", avatar: undefined },
    ],
  },
  {
    id: "4",
    name: "Project Delta",
    thumbnail: undefined,
    collaborators: [],
  },
  {
    id: "5",
    name: "Project Epsilon",
    thumbnail: undefined,
    collaborators: [{ id: "1", name: "John Doe", avatar: undefined }],
  },
  {
    id: "6",
    name: "Project Zeta",
    thumbnail: undefined,
    collaborators: [
      { id: "2", name: "Jane Smith", avatar: undefined },
      { id: "3", name: "Alice Johnson", avatar: undefined },
    ],
  },
  {
    id: "7",
    name: "Project Eta",
    thumbnail: undefined,
    collaborators: [],
  },
  {
    id: "8",
    name: "Project Theta",
    thumbnail: undefined,
    collaborators: [
      { id: "1", name: "John Doe", avatar: undefined },
      { id: "2", name: "Jane Smith", avatar: undefined },
      { id: "3", name: "Alice Johnson", avatar: undefined },
    ],
  },
  {
    id: "9",
    name: "Project Iota",
    thumbnail: undefined,
    collaborators: [{ id: "4", name: "Bob Wilson", avatar: undefined }],
  },
  {
    id: "10",
    name: "Project Kappa",
    thumbnail: undefined,
    collaborators: [],
  },
  {
    id: "11",
    name: "Project Lambda",
    thumbnail: undefined,
    collaborators: [
      { id: "1", name: "John Doe", avatar: undefined },
      { id: "2", name: "Jane Smith", avatar: undefined },
    ],
  },
  {
    id: "12",
    name: "Project Mu",
    thumbnail: undefined,
    collaborators: [
      { id: "3", name: "Alice Johnson", avatar: undefined },
      { id: "4", name: "Bob Wilson", avatar: undefined },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="relative flex flex-col gap-4 overflow-auto px-4 py-1 lg:px-6">
            <ProjectCards projects={mockProjects} />
          </div>
        </div>
      </div>
    </div>
  );
}
