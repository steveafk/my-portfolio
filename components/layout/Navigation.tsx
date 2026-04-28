import { NavigationItem } from "@/lib/type";

const navItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function Navigation({ mobile, onClose }: NavigationProps) {
  if (mobile) {
    return (
      <nav className="flex flex-col gap-4 mt-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium text-lg border-b border-white/10 pb-3"
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}