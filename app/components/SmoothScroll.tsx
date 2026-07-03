"use client";

import { useLenis } from "@/app/hooks/useLenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}