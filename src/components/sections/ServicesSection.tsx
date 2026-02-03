import Link from 'next/link';
import { ArrowRight, Search, Bug, RefreshCw, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/mock-data';

const iconMap = {
  'conversion-audit': Search,
  'bug-bash': Bug,
  'monthly-support': RefreshCw,
  'custom-support': Wrench,
};

const badgeMap = {
  'conversion-audit': 'Most Popular',
  'bug-bash': 'Quick Results',
  'monthly-support': 'Ongoing',
  'custom-support': 'Flexible',
};

interface ServicesSectionProps {
  showAll?: boolean;
}

export function ServicesSection({ showAll = false }: ServicesSectionProps) {
  const displayServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-foreground mb-4">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive QA solutions tailored for Shopify stores. From one-time audits to dedicated support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.id];
            const badge = badgeMap[service.id];
            
            return (
              <Card 
                key={service.id} 
                id={service.id} 
                className="relative overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 group"
              >
                {badge && (
                  <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30">
                    {badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="heading-3 text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">We test:</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.deliverable && (
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-sm">
                        <span className="text-foreground font-medium">You get:</span>{' '}
                        <span className="text-muted-foreground">{service.deliverable}</span>
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary-light text-white btn-glow">
                    <Link
                      href={service.ctaLink}
                      className="flex items-center justify-center gap-2"
                    >
                      {service.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-card hover:border-primary/50">
              <Link href="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
