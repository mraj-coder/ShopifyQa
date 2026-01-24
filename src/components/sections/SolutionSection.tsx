import { Check, ShieldCheck } from 'lucide-react';
import { solutionFeatures } from '@/data/mock-data';

export function SolutionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="heading-2 text-foreground mb-4">
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We run structured QA testing by Shopify experts to review your store&apos;s 
              full buying experience and identify issues that impact sales:
            </p>
            
            <ul className="space-y-4 mb-8">
              {solutionFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="p-4 rounded-xl bg-card border border-primary/20">
              <p className="text-foreground font-medium">
                We don&apos;t just &quot;test.&quot; <span className="text-primary">We protect your revenue.</span>
              </p>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl border border-border p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">QA Protection Active</div>
                  <div className="text-sm text-muted-foreground">Your store is being monitored</div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-background-secondary border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Issues Caught</div>
                </div>
                <div className="p-4 rounded-lg bg-background-secondary border border-border">
                  <div className="text-2xl font-bold text-success mb-1">+23%</div>
                  <div className="text-sm text-muted-foreground">Conversion Lift</div>
                </div>
                <div className="p-4 rounded-lg bg-background-secondary border border-border">
                  <div className="text-2xl font-bold text-foreground mb-1">48h</div>
                  <div className="text-sm text-muted-foreground">Avg. Turnaround</div>
                </div>
                <div className="p-4 rounded-lg bg-background-secondary border border-border">
                  <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Stores Protected</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-primary/20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
