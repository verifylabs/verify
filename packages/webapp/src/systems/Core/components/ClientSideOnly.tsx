import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type ClientSideOnlyProps = {
  children: ReactNode;
};

export function ClientSideOnly({ children }: ClientSideOnlyProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient && children}</>;
}
