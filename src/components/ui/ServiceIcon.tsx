import {
  Accessibility,
  HandHelping,
  HeartHandshake,
  MessageCircle,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  "heart-handshake": HeartHandshake,
  accessibility: Accessibility,
  "hand-helping": HandHelping,
  "message-circle": MessageCircle,
  users: Users,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Stethoscope;
  return <Icon className={className} aria-hidden="true" />;
}
