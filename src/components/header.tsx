"use client";

import { useState, useEffect } from "react";
import { Menu, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Главная" },
  { href: "#datasets", label: "Датасеты" },
  { href: "#deployment", label: "Развёртывание" },
  { href: "#fine-tuning", label: "Дообучение" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#legal", label: "Правовая информация" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-primary font-bold text-xl"
          >
            <Brain className="h-7 w-7" />
            <span>ИИ-Монолит</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-3">
              <a href="#contact">Связаться</a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="flex items-center gap-2 text-primary font-bold text-lg mb-6">
                <Brain className="h-5 w-5" />
                ИИ-Монолит
              </SheetTitle>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href="#contact" onClick={handleNavClick}>
                    Связаться
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
