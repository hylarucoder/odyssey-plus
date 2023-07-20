import GitHubProvider from "@auth/core/providers/github";
import type { SolidAuthConfig } from "@solid-auth/base";

export const authOptions: SolidAuthConfig = {
  providers: [
    GitHubProvider({
      clientId: "id",
      clientSecret: "cs",
    }),
  ],
};
