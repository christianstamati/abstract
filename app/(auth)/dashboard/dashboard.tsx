"use client";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { TodoList } from "./todo-list";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div>Dashboard</div>
      <Authenticated>
        <TodoList />
      </Authenticated>
      <Unauthenticated>You are not authenticated</Unauthenticated>
      <AuthLoading>Loading...</AuthLoading>
    </div>
  );
}
