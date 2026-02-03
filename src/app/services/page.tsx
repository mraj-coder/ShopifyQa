import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, Bug, RefreshCw, Wrench, Check, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services, serviceDetails, benefits } from '@/data/mock-data';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Our Services | ShopifyQA',
  description:
    'Comprehensive QA testing services for Shopify stores. From one-time audits to dedicated monthly support. Protect your revenue with expert QA.',
};

const iconMap: Record<string, typeof Search> = {
  'conversion-audit': Search,
  'bug-bash': Bug,
  'monthly-support': RefreshCw,
  'custom-support': Wrench,
};

const badgeMap: Record<string, string> = {
  'conversion-audit': 'Most Popular',
  'bug-bash': 'Deep Testing',
  'monthly-support': 'Ongoing Support',
  'custom-support': 'Flexible',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="decorative-circle w-[400px] h-[400px] -left-[150px] top-1/4" />
          <div className="decorative-circle w-[300px] h-[300px] -right-[100px] top-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              🛠️ Our Services
            </Badge>
            <h1 className="heading-1 text-foreground mb-6">
              Protect Revenue, Improve Conversions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              At ShopifyQA, we help Shopify brands protect revenue, improve conversions, and avoid costly store issues through structured, expert-led QA testing.
            </p>
            <p className="text-muted-foreground">
              Whether you need a one-time audit, a release check, or a dedicated QA expert — we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.id];
              const badge = badgeMap[service.id];
              const details = serviceDetails[service.id as keyof typeof serviceDetails];

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left: Service Info */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                              {badge}
                            </Badge>
                          </div>
                          <h2 className="heading-2 text-foreground">
                            {service.title}
                          </h2>
                          {details?.subtitle && (
                            <p className="text-muted-foreground mt-1">{details.subtitle}</p>
                          )}
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* Issues we uncover - only for conversion audit */}
                      {details && 'issues' in details && (
                        <div className="mb-6">
                          <p className="text-foreground font-medium mb-3">We uncover:</p>
                          <div className="flex flex-wrap gap-2">
                            {details.issues.map((issue) => (
                              <Badge key={issue} variant="outline" className="border-border text-muted-foreground">
                                {issue}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Goal */}
                      {details?.goal && (
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                          <div className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            <span className="text-foreground font-medium">Goal:</span>
                            <span className="text-muted-foreground">{details.goal}</span>
                          </div>
                        </div>
                      )}

                      <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-white btn-glow">
                        <Link href="/contact" className="flex items-center gap-2">
                          {service.ctaText}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Right: What We Test & What You Get */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <Card className="bg-card border-border">
                        <CardContent className="p-6 md:p-8">
                          {/* What We Test */}
                          <div className="mb-8">
                            <h3 className="heading-3 text-lg text-foreground mb-4">What We Test</h3>
                            <ul className="space-y-3">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="h-3 w-3 text-primary" />
                                  </div>
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* What You Get */}
                          <div className="mb-8">
                            <h3 className="heading-3 text-lg text-foreground mb-4">What You Get</h3>
                            <p className="text-muted-foreground">{service.deliverable}</p>
                          </div>

                          {/* Best For */}
                          {details?.bestFor && (
                            <div>
                              <h3 className="heading-3 text-lg text-foreground mb-4">Best For</h3>
                              <div className="flex flex-wrap gap-2">
                                {details.bestFor.map((item) => (
                                  <Badge key={item} className="bg-card border-border text-muted-foreground">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Divider between services */}
                  {index < services.length - 1 && (
                    <div className="mt-16 md:mt-24 border-t border-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why ShopifyQA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Why <span className="text-gradient">ShopifyQA</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your store deserves professional QA, not guesswork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading-3 text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Here&apos;s what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Request',
                description: 'Fill out our quick intake form with your store details and testing needs.',
              },
              {
                step: '02',
                title: 'Scope & Quote',
                description: 'We review your requirements and provide a clear scope and timeline.',
              },
              {
                step: '03',
                title: 'We Test',
                description: 'Our Shopify experts thoroughly test your store across all critical paths.',
              },
              {
                step: '04',
                title: 'Get Results',
                description: 'Receive a detailed report with screenshots, Loom videos, and prioritized fixes.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-primary/20 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.step}
                </div>
                <h3 className="heading-3 text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-foreground mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does a typical QA audit take?',
                  a: 'Most Conversion QA Audits are completed within 48-72 hours. Bug Bash and Monthly Support timelines vary based on scope.',
                },
                {
                  q: 'Do you test on real devices?',
                  a: 'Yes! We test on real iOS and Android devices, not just emulators. Mobile commerce is too important to leave to simulators.',
                },
                {
                  q: 'What do I receive after testing?',
                  a: 'A detailed report including every bug found, steps to reproduce, screenshots, severity ratings, and Loom video walkthroughs for complex issues.',
                },
                {
                  q: 'Do you offer retesting after bugs are fixed?',
                  a: 'Yes, we offer retest packages to verify all fixes. Monthly Support clients get this included.',
                },
                {
                  q: 'Can you test Shopify Plus stores?',
                  a: 'Absolutely. We work with stores of all sizes, from small businesses to Shopify Plus enterprises.',
                },
              ].map((faq) => (
                <div key={faq.q} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Protect Your Revenue?"
        description="Start with a Free Mini Audit and see how ShopifyQA can improve your store's performance."
        ctaText="Request Your Free Audit"
        ctaLink="/contact"
      />
    </>
  );
}
