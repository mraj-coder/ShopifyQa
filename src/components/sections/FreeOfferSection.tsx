import Link from 'next/link';
import { ArrowRight, CheckCircle2, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { freeAuditIncludes } from '@/data/mock-data';

export function FreeOfferSection() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Gift className="h-4 w-4" />
              Free Offer
            </div>
            <h2 className="heading-2 text-foreground mb-4">
              Get a <span className="text-gradient">Free Mini Audit</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* What we test */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="heading-3 text-lg text-foreground mb-4">We&apos;ll test:</h3>
              <ul className="space-y-3">
                {freeAuditIncludes.tests.map((test) => (
                  <li key={test} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{test}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you receive */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="heading-3 text-lg text-foreground mb-4">You&apos;ll receive:</h3>
              <ul className="space-y-3">
                {freeAuditIncludes.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              No sales pressure. Just value.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-white text-lg px-8 py-6 btn-glow"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request Your Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
