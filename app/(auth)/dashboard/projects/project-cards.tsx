"use client";

import { IconExternalLink, IconShare3, IconTrash } from "@tabler/icons-react";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { USER_ID, WORKSPACE_ID } from "@/lib/constants";

export function ProjectCards() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const projects = useQuery(api.projects.get, {
    workspaceId: WORKSPACE_ID,
    userId: USER_ID,
  });

  const remove = useMutation(api.projects.remove);

  const router = useRouter();

  const handleOpen = (projectId: string) => {
    router.push(`/dashboard/projects/${projectId}`);
  };

  const handleShare = (projectId: string) => {
    // Handle share
    console.log("Share project:", projectId);
  };

  const handleDelete = (projectId: Id<"projects">) => {
    remove({ id: projectId })
      .then(() => {
        toast.success("Project deleted successfully");
      })
      .catch(() => {
        toast.error("Failed to delete project");
      });
  };

  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-6 xl:grid-cols-4">
      {projects?.map((project) => {
        const isSelected = selectedProjectId === project._id;
        return (
          <ContextMenu key={project._id}>
            <ContextMenuTrigger asChild>
              <Card
                className={`cursor-pointer gap-0 overflow-hidden border bg-transparent p-0 shadow-none ${
                  isSelected
                    ? "outline-2 outline-[#1877F2] outline-offset-2"
                    : ""
                }`}
                onClick={() =>
                  setSelectedProjectId(isSelected ? null : project._id)
                }
                onDoubleClick={() => handleOpen(project._id)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    {project.thumbnailUrl ? (
                      <Image
                        src={project.thumbnailUrl}
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
              <ContextMenuItem onClick={() => handleOpen(project._id)}>
                <IconExternalLink className="size-4" />
                <span>Open</span>
              </ContextMenuItem>
              <ContextMenuItem onClick={() => handleShare(project._id)}>
                <IconShare3 className="size-4" />
                <span>Share</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem
                variant="destructive"
                onClick={() => handleDelete(project._id)}
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
