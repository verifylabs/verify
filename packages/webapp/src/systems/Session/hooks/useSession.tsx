import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import type { ProfileQuery, SessionQuery } from "~/generated/graphql";

type Context = {
  session?: SessionQuery["session"];
  profile?: ProfileQuery["profile"];
};

const ctx = createContext({} as Context);

export function useSession() {
  return useContext(ctx);
}

type SessionProviderProps = Context & {
  children: ReactNode;
};

export function SessionProvider({
  session,
  profile,
  children,
}: SessionProviderProps) {
  return <ctx.Provider value={{ session, profile }}>{children}</ctx.Provider>;
}
