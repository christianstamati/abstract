import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from "@/convex/betterAuth/auth";

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>(), convexClient()],
});
