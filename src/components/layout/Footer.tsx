import Link from 'next/link';
import { ShoppingCart, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { trustIndicators } from '@/data/mock-data';

const footerLinks = {
  services: [
    { label: 'Conversion QA Audit', href: '/services#conversion-audit' },
    { label: 'Bug Bash (Expert QA Testing)', href: '/services#bug-bash' },
    { label: 'Monthly Release QA Support', href: '/services#monthly-support' },
    { label: 'Dedicated QA Specialist', href: '/services#custom-support' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Free Mini Audit', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Pre-Footer CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
        <div className="container-custom py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="heading-3 text-foreground mb-2">
                Ready to protect your Shopify revenue? 👉
              </h3>
              <p className="text-muted-foreground">
                Get your Free Mini Audit today
              </p>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-white btn-glow">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShoppingCart className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                Shopify<span className="text-primary">QA</span>
              </span>
            </Link>
            <p className="text-sm font-medium text-foreground mb-2">
              Professional QA Testing for High-Converting Shopify Stores
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              We help Shopify brands protect revenue by testing checkout, payments, and customer journeys before issues impact sales.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">Email:</span>
              <a href="mailto:hello@shopifyqa.com" className="text-sm hover:text-primary transition-colors">
                hello@shopifyqa.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Assurance Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Trust & Assurance
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {trustIndicators.map((indicator) => (
                <li key={indicator} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>{indicator}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShopifyQA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
