"use client";

import { useQuery } from "convex/react";
import { SignOutButton } from "@/components/signout-button";
import { api } from "@/convex/_generated/api";

export function TodoList() {
  const tasks = useQuery(api.tasks.get);
  const user = useQuery(api.auth.getCurrentUser);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-start gap-2">
        <div>Hello, {user?.email}</div>
        <SignOutButton />
      </div>
      <h1>Todo List</h1>
      <main className="flex flex-col gap-2">
        {tasks?.map(({ _id, text }) => (
          <div key={_id}>{text}</div>
        ))}
      </main>
    </div>
  );
}
