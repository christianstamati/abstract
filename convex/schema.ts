// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  workspaces: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("slug", ["slug"]),

  workspaceMembers: defineTable({
    workspaceId: v.id("workspaces"),
    // Store Better Auth user _id as string
    userId: v.string(),
    role: v.union(
      v.literal("owner"),
      v.literal("admin"),
      v.literal("member"),
      v.literal("viewer"),
    ),
    joinedAt: v.number(),
  })
    .index("workspaceId", ["workspaceId"])
    .index("userId", ["userId"])
    .index("workspaceId_userId", ["workspaceId", "userId"]),

  projects: defineTable({
    workspaceId: v.id("workspaces"),
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
    // Better Auth user _id as string
    createdBy: v.string(),
  })
    .index("workspaceId", ["workspaceId"])
    .index("workspaceId_slug", ["workspaceId", "slug"])
    .index("createdBy", ["createdBy"]),

  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});
