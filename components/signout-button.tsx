"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export function SignOutButton({
  redirectTo = "/sign-in",
}: {
  redirectTo?: string;
}) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push(redirectTo);
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleSignOut}>
      <LogOut size={16} className="mr-2" />
      Sign out
    </Button>
  );
}
