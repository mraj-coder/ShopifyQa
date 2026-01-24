import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ShopifyQA.',
};

export default function TermsPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="heading-1 text-foreground mb-8">Terms of Service</h1>
          
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="heading-3 text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ShopifyQA&apos;s services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">2. Description of Services</h2>
              <p>
                ShopifyQA provides quality assurance testing services specifically for Shopify stores. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Conversion QA Audits</li>
                <li>Bug Bash Testing</li>
                <li>Monthly Release QA Support</li>
                <li>Custom/Dedicated QA Support</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">3. Client Responsibilities</h2>
              <p>
                To receive our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate information about your Shopify store</li>
                <li>Grant necessary access for testing purposes</li>
                <li>Respond to communications in a timely manner</li>
                <li>Pay for services as agreed upon</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">4. Confidentiality</h2>
              <p>
                We understand that you may provide us with confidential information during the course of our engagement. We agree to keep all such information confidential and not disclose it to third parties without your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">5. Deliverables</h2>
              <p>
                Our QA testing services include detailed reports with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Bug descriptions and severity ratings</li>
                <li>Steps to reproduce issues</li>
                <li>Screenshots and/or video recordings</li>
                <li>Recommendations for fixes</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">6. Limitation of Liability</h2>
              <p>
                ShopifyQA&apos;s liability is limited to the fees paid for the specific service in question. We are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">7. Payment Terms</h2>
              <p>
                Payment terms vary by service type and will be outlined in your service agreement. Generally, payment is due upon receipt of invoice unless otherwise agreed upon in writing.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">8. Termination</h2>
              <p>
                Either party may terminate ongoing services with 30 days written notice. For one-time services, cancellation policies will be outlined in the specific service agreement.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-foreground mb-4">10. Contact</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:contact@shopifyqa.com" className="text-primary hover:underline">
                  contact@shopifyqa.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
