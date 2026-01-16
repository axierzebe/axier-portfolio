import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "about", label: t("nav.about") },
    { to: "experience", label: t("nav.experience") },
    { to: "projects", label: t("nav.projects") },
    { to: "skills", label: t("nav.skills") },
    { to: "education", label: t("nav.education") },
    { to: "contact", label: t("nav.contact") },
  ];

  const toggleLang = () => setLanguage(language === "EN" ? "ES" : "EN");

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <ScrollLink 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">Axier</span>
          <span className="text-foreground">Zeberio</span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-1">
            {links.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer rounded-full hover:bg-primary/5"
                activeClass="!text-primary font-semibold bg-primary/5"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>
          
          <div className="h-6 w-px bg-border mx-2" />
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLang}
              className="flex items-center gap-2 font-mono text-xs font-medium hover:bg-primary/5 hover:text-primary transition-colors rounded-full"
            >
              <Globe className="h-3.5 w-3.5" />
              {language}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLang}
            className="h-9 w-9 hover:bg-primary/5 hover:text-primary transition-colors rounded-full"
          >
            <span className="font-mono text-xs font-bold">{language}</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary py-2 cursor-pointer border-b border-border/50"
                  >
                    {link.label}
                  </ScrollLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
