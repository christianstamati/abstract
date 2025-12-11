"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { USER_ID, WORKSPACE_ID } from "@/lib/constants";

export function NewProjectDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  const createProject = useMutation(api.projects.create);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const slug = name.toLowerCase().replace(/ /g, "-");
    const description = formData.get("description") as string;
    createProject({
      workspaceId: WORKSPACE_ID,
      createdBy: USER_ID,
      name,
      slug,
      description,
    })
      .then(() => {
        toast.success("Project created successfully");
        setOpen(false);
      })
      .catch(() => {
        toast.error("Failed to create project");
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Create a new project</DialogTitle>
            <DialogDescription>Create a new project.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" placeholder="Forgotten Realm" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description-1">Description</Label>
              <Textarea
                id="description-1"
                name="description"
                placeholder="A mysterious realm filled with danger and secrets."
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Create project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
