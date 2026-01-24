import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, ShieldCheck, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { stats } from '@/data/mock-data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn why ShopifyQA exists and how we help Shopify merchants protect their revenue through expert QA testing.',
};

const values = [
  {
    icon: Target,
    title: 'Shopify-Only Focus',
    description:
      "We don't test WordPress, Magento, or custom stores. Our 100% Shopify focus means we know exactly where bugs hide in Shopify's ecosystem.",
  },
  {
    icon: Eye,
    title: 'Revenue-First Mindset',
    description:
      'We prioritize testing the flows that directly impact your bottom line—checkout, payments, cart functionality, and conversion paths.',
  },
  {
    icon: Heart,
    title: 'Clarity Over Complexity',
    description:
      'Every bug report includes screenshots, steps to reproduce, and Loom video walkthroughs. No jargon, no ambiguity.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-foreground mb-6">
              The Only QA Service Built Exclusively for Shopify
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We started ShopifyQA because we saw too many Shopify merchants losing revenue to bugs that could have been caught with proper testing. Now we&apos;re on a mission to change that.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Why We Exist</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every Shopify store, no matter how beautiful, has bugs. Some are obvious—broken images, misaligned buttons. But the dangerous ones are invisible: a checkout that fails on mobile Safari, a discount code that breaks the cart, a payment gateway that silently declines valid cards.
                </p>
                <p>
                  These bugs cost merchants thousands in lost revenue every day. And most store owners don&apos;t even know they exist until a frustrated customer reaches out—or worse, simply leaves and never comes back.
                </p>
                <p>
                  We built ShopifyQA to solve this problem. Our team of Shopify specialists knows exactly where bugs hide and how to find them before they cost you sales.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                      <p className="text-muted-foreground text-sm">
                        Help every Shopify merchant ship with confidence by catching the bugs that cost them sales.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Our Impact</h3>
                      <p className="text-muted-foreground text-sm">
                        Over $2.4M in protected revenue for our clients through proactive bug detection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Our Clients</h3>
                      <p className="text-muted-foreground text-sm">
                        From solo founders to Shopify Plus enterprises and leading agencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re not generalists. Our entire focus is helping Shopify merchants succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="heading-3 text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-white/80 mb-8">
              Get a free mini audit and see what ShopifyQA can do for your store.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact" className="flex items-center gap-2">
                Get Your Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
