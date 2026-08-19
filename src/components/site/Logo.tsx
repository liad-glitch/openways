import logo from "@/assets/openways-logo.png.asset.json";
import logoLight from "@/assets/openways-logo-light.png.asset.json";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <img
      src={variant === "light" ? logoLight.url : logo.url}
      alt="OpenWays"
      className={"h-7 w-auto sm:h-8 " + (className ?? "")}
      loading="eager"
      decoding="async"
    />
  );
}
