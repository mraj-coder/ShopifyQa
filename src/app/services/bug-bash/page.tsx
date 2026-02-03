import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Bug, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Bug Bash Request | ShopifyQA',
  description:
    'Request a Bug Bash for your Shopify store. We deploy 10-50 QA experts to stress-test your store like real buyers.',
};

const formFields = [
  { num: '1', label: 'Store URL', type: 'text', placeholder: 'Please share your Shopify store link' },
  {
    num: '2',
    label: 'Shopify Plan',
    type: 'select',
    options: ['Basic', 'Shopify', 'Advanced', 'Shopify Plus'],
  },
  {
    num: '3',
    label: 'Monthly Revenue Range',
    type: 'select',
    options: ['Under $10k', '$10k–$50k', '$50k–$200k', '$200k+'],
  },
  {
    num: '4',
    label: 'What is the main purpose of this Bug Bash?',
    type: 'select',
    options: [
      'New store launch',
      'Theme redesign',
      'Major update',
      'App / checkout changes',
      'Sales / promotion event',
      'Ongoing quality check',
      'Other',
    ],
  },
  {
    num: '5',
    label: 'When do you need this completed?',
    type: 'select',
    options: ['Within 3 days', 'Within 1 week', 'Within 2 weeks', 'Flexible'],
  },
  {
    num: '6',
    label: 'What should we focus on testing?',
    type: 'checkbox',
    options: [
      'Product listing & collection pages (PLP)',
      'Product pages (PDP)',
      'Cart & checkout',
      'Payment methods',
      'Discounts & coupons',
      'Subscriptions',
      'Mobile experience',
      'App / plugin conflicts',
      'International checkout',
      'Full end-to-end customer journey',
    ],
  },
  {
    num: '7',
    label: 'Which payment methods do you use?',
    type: 'checkbox',
    options: ['Shopify Payments', 'PayPal', 'BNPL (Klarna, Afterpay, etc.)', 'Local gateways', 'Subscriptions', 'Other'],
  },
  {
    num: '8',
    label: 'Number of products in your store',
    type: 'select',
    options: ['Under 50', '50–200', '200+'],
  },
  {
    num: '9',
    label: 'Approximate number of apps installed',
    type: 'select',
    options: ['Under 5', '5–15', '15+'],
  },
  {
    num: '10',
    label: 'How critical is this Bug Bash for your business?',
    type: 'select',
    options: [
      'Low (new / low traffic store)',
      'Medium (running ads, steady sales)',
      'High (major launch, big promotion, high revenue)',
    ],
  },
  {
    num: '11',
    label: 'Devices to test',
    type: 'select',
    options: ['Desktop only', 'Mobile only', 'Both desktop & mobile'],
  },
  {
    num: '12',
    label: 'How many QA testers would you like?',
    type: 'select',
    options: ['10 testers', '20 testers', '30 testers', '50 testers', 'Not sure (recommend for me)'],
  },
  {
    num: '13',
    label: 'What deliverables do you expect?',
    type: 'checkbox',
    options: ['Bug report only', 'Screenshots + videos', 'Loom walkthroughs for key issues', 'Priority list + fix guidance'],
  },
  {
    num: '14',
    label: 'Any special notes or focus areas?',
    type: 'textarea',
    placeholder: 'Checkout issues, mobile focus, country-specific testing, known bugs',
  },
  { num: '15', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
  { num: '16', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
  { num: '17', label: 'Company / Brand Name', type: 'text', placeholder: 'Enter your company or brand name' },
];

const pricingTiers = [
  { testers: '10–15 testers', price: '$1,500 – $2,000', description: 'Basic funnel, 1-2 payment methods' },
  { testers: '20–30 testers', price: '$2,500 – $3,500', description: 'Full funnel, multiple payments, mobile + desktop' },
  { testers: '40–50 testers', price: '$4,000 – $5,000', description: 'Complex checkout, subscriptions, high-risk launches' },
];

export default function BugBashPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="decorative-circle w-[400px] h-[400px] -left-[150px] top-1/4" />
          <div className="decorative-circle w-[300px] h-[300px] -right-[100px] top-1/3" />
        </div>

        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Bug className="h-3 w-3 mr-1" />
              Deep Testing
            </Badge>
            <h1 className="heading-1 text-foreground mb-6">Bug Bash Intake Form</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Please fill out this form so we can understand your store and testing needs.
            </p>
            <p className="text-muted-foreground">
              We&apos;ll review your details and get back to you within 24 hours with scope, timeline, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="heading-3">Bug Bash Request Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll review your testing requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {formFields.map((field) => (
                      <div key={field.num} className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                          {field.num}) {field.label}
                          {['1', '2', '3', '15', '16'].includes(field.num) && (
                            <span className="text-destructive ml-1">*</span>
                          )}
                        </label>

                        {field.type === 'text' && (
                          <input
                            type="text"
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        )}

                        {field.type === 'email' && (
                          <input
                            type="email"
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        )}

                        {field.type === 'select' && (
                          <div className="space-y-2">
                            {field.options?.map((option) => (
                              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="radio"
                                  name={`field-${field.num}`}
                                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                                />
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}

                        {field.type === 'checkbox' && (
                          <div className="space-y-2">
                            {field.options?.map((option) => (
                              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                                />
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}

                        {field.type === 'textarea' && (
                          <textarea
                            placeholder={field.placeholder}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                          />
                        )}
                      </div>
                    ))}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-light text-white btn-glow"
                    >
                      Submit Bug Bash Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Guide */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="heading-3 text-lg">Pricing Guide</CardTitle>
                  <CardDescription>Pricing depends on tester count and scope.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pricingTiers.map((tier) => (
                      <div key={tier.testers} className="p-4 rounded-lg bg-background border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-foreground">{tier.testers}</p>
                          <span className="text-lg font-bold text-primary">{tier.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="heading-3 text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'We review your store',
                      'Recommend tester count',
                      'Confirm scope',
                      'Share pricing ($1,500 – $5,000)',
                      'Send proposal & timeline',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">We usually respond within 24 hours.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
