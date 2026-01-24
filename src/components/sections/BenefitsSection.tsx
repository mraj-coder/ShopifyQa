import { ShoppingCart, TrendingUp, FileText, Zap, Users, DollarSign } from 'lucide-react';
import { benefits } from '@/data/mock-data';

const iconMap = [ShoppingCart, TrendingUp, Users, FileText, Zap, DollarSign];

export function BenefitsSection() {
  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={benefit.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="heading-3 text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
