import { SocialLink, NavigationItem } from "@/lib/type";

const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/steveafk", icon: "GH" },
  { platform: "Facebook", url: "https://www.facebook.com/steve.kurt.bayona.2024", icon: "FB" },
  { platform: "Twitter", url: "https://www.instagram.com/tebcdef/", icon: "IG" },
];

const footerNav: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060b18] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="text-xl font-bold font-mono text-white">
              <span className="text-amber-400">&lt;</span>Steve Kurt Bayona<span className="text-amber-400">/&gt;</span>
            </a>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Building thoughtful digital experiences, one line at a time.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">Connect</h4>
            <a href="mailto:you@example.com" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block mb-4">
              bayona.sk1@gmail.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">&copy; {year} steveafk. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built with <span className="text-amber-400/70">Next.js & Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  );
}