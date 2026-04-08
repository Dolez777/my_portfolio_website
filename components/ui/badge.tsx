import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        // Category variants from SPEC.md
        web: "border-transparent bg-[hsl(var(--cat-web)/0.1)] text-[hsl(var(--cat-web))] hover:bg-[hsl(var(--cat-web)/0.2)]",
        mobile: "border-transparent bg-[hsl(var(--cat-mobile)/0.1)] text-[hsl(var(--cat-mobile))] hover:bg-[hsl(var(--cat-mobile)/0.2)]",
        data: "border-transparent bg-[hsl(var(--cat-data)/0.1)] text-[hsl(var(--cat-data))] hover:bg-[hsl(var(--cat-data)/0.2)]",
        automation: "border-transparent bg-[hsl(var(--cat-automation)/0.1)] text-[hsl(var(--cat-automation))] hover:bg-[hsl(var(--cat-automation)/0.2)]",
        ai: "border-transparent bg-[hsl(var(--cat-ai)/0.1)] text-[hsl(var(--cat-ai))] hover:bg-[hsl(var(--cat-ai)/0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
