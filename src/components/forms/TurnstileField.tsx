"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef } from "react";
import { turnstileSiteKey } from "@/lib/turnstile-config";

export function TurnstileField({
  onToken,
  onExpire,
}: {
  onToken: (token: string) => void;
  onExpire?: () => void;
}) {
  const ref = useRef<TurnstileInstance>(null);
  const siteKey = turnstileSiteKey;

  if (!siteKey) return null;

  return (
    <Turnstile
      ref={ref}
      siteKey={siteKey}
      options={{ theme: "light", size: "normal" }}
      onSuccess={onToken}
      onExpire={() => {
        onExpire?.();
        ref.current?.reset();
      }}
    />
  );
}
