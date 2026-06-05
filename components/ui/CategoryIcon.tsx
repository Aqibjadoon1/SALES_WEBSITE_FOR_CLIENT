import {
  AirVent,
  ChefHat,
  Coffee,
  CookingPot,
  Droplets,
  Fan,
  Flame,
  Microwave,
  MonitorSmartphone,
  Package,
  Refrigerator,
  Scissors,
  Snowflake,
  Sparkles,
  Tv,
  Utensils,
  WashingMachine,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  AirVent,
  ChefHat,
  CookingPot,
  WashingMachine,
  MonitorSmartphone,
  Refrigerator,
  Microwave,
  Coffee,
  Droplets,
  Fan,
  Flame,
  Package,
  Utensils,
  Snowflake,
  Sparkles,
  Scissors,
  Tv,
  Wind,
};

type CategoryIconProps = {
  name: string;
  className?: string;
};

export function CategoryIcon({ name, className }: CategoryIconProps) {
  const Icon = icons[name] ?? Sparkles;

  return <Icon className={cn("h-5 w-5", className)} aria-hidden="true" />;
}
