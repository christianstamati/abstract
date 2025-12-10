"use client";

import { IconExternalLink, IconShare3, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface Project {
  id: string;
  name: string;
  thumbnail?: string;
}

interface ProjectCardsProps {
  projects: Project[];
}

export function ProjectCards({ projects }: ProjectCardsProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const router = useRouter();

  const handleOpen = (projectId: string) => {
    router.push(`/dashboard/projects/${projectId}`);
  };

  const handleShare = (projectId: string) => {
    // Handle share
    console.log("Share project:", projectId);
  };

  const handleDelete = (projectId: string) => {
    // Handle delete
    console.log("Delete project:", projectId);
  };

  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-6 xl:grid-cols-4">
      {projects.map((project) => {
        const isSelected = selectedProjectId === project.id;
        return (
          <ContextMenu key={project.id}>
            <ContextMenuTrigger asChild>
              <Card
                className={`cursor-pointer gap-0 overflow-hidden border bg-transparent p-0 shadow-none ${
                  isSelected
                    ? "outline-2 outline-[#1877F2] outline-offset-2"
                    : ""
                }`}
                onClick={() =>
                  setSelectedProjectId(isSelected ? null : project.id)
                }
                onDoubleClick={() => handleOpen(project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50 text-muted-foreground">
                        <span className="text-sm">{project.name}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-2 p-3">
                  <div className="flex min-w-0 flex-1 items-center gap-2">
                    <span className="truncate font-medium text-sm">
                      {project.name}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onClick={() => handleOpen(project.id)}>
                <IconExternalLink className="size-4" />
                <span>Open</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => handleShare(project.id)}>
                <IconShare3 className="size-4" />
                <span>Share</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem
                variant="destructive"
                onClick={() => handleDelete(project.id)}
              >
                <IconTrash className="size-4" />
                <span>Delete</span>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        );
      })}
    </div>
  );
}
