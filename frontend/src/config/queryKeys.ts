export const queryKeys = {
  auth: ["auth"],
  me: {
    gen: (accessToken: string) => ["me", accessToken],
  },
}
