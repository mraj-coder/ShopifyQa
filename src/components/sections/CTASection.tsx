import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function CTASection({
  title = 'Stop Losing Sales to Hidden Issues',
  description = 'Let ShopifyQA protect your store\'s performance.',
  ctaText = 'Get Your Free Mini Audit Today',
  ctaLink = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-background-secondary to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-circle w-[400px] h-[400px] -left-[150px] top-1/2 -translate-y-1/2" />
        <div className="decorative-circle w-[300px] h-[300px] -right-[100px] top-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="heading-2 text-foreground mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {description}
          </p>
          
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-light text-white text-lg px-8 py-6 btn-glow"
            >
              <Link href={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
