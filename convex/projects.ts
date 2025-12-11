// convex/projects.ts

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {
    workspaceId: v.id("workspaces"),
    // Better Auth user id, stored as string in workspaceMembers.userId
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    // 1. Ensure this user is a member of the workspace
    const membership = await ctx.db
      .query("workspaceMembers")
      .withIndex("workspaceId_userId", (q) =>
        q.eq("workspaceId", args.workspaceId).eq("userId", args.userId),
      )
      .first();

    if (!membership) {
      // You can also return [] instead of throwing if you prefer
      throw new Error("User is not a member of this workspace");
    }

    // 2. Load projects in that workspace
    const projects = await ctx.db
      .query("projects")
      .withIndex("workspaceId", (q) => q.eq("workspaceId", args.workspaceId))
      .collect();

    return projects;
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    // both fields optional so you can change either or both
    name: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),
  },
  handler: async (ctx, { id, name, thumbnailUrl }) => {
    const patch: { name?: string; thumbnailUrl?: string } = {};
    if (name !== undefined) patch.name = name;
    if (thumbnailUrl !== undefined) patch.thumbnailUrl = thumbnailUrl;

    if (Object.keys(patch).length === 0) return;

    await ctx.db.patch(id, patch);
  },
});

export const create = mutation({
  args: {
    workspaceId: v.id("workspaces"),
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),
    createdBy: v.string(), // Better Auth user id as string
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    const projectId = await ctx.db.insert("projects", {
      workspaceId: args.workspaceId,
      name: args.name,
      slug: args.slug,
      description: args.description,
      thumbnailUrl: args.thumbnailUrl,
      createdAt: now,
      updatedAt: now,
      createdBy: args.createdBy,
    }); // `insert` returns the new document id. [[Writing data](https://docs.convex.dev/database/writing-data#inserting-new-documents)]

    return projectId;
  },
});

export const remove = mutation({
  args: {
    id: v.id("projects"),
  },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id); // delete removes an existing document. [[delete writer](https://docs.convex.dev/api/interfaces/server.GenericDatabaseWriter#delete)]
  },
});
