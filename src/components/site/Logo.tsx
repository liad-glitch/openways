import logo from "@/assets/openways-logo.png";
import logoLight from "@/assets/openways-logo-light.png";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <img
      src={variant === "light" ? logoLight : logo}
      alt="OpenWays"
      className={"h-7 w-auto sm:h-8 " + (className ?? "")}
      loading="eager"
      decoding="async"
    />
  );
}
