import AnimatedCounter from "../components/AnimatedCounter";
import Icon from "../components/Icon";
import {
  counters,
  heroMetrics,
  serviceCards,
  whyChooseFeatures,
} from "../data/homeData";
import { useRef } from 'react';

export default function HomePage() {
  const countersRef = useRef(null);
  const scrollToCounters = (e) => {
    e.preventDefault();
    countersRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section className="relative w-full flex items-center justify-center overflow-hidden bg-background-dark py-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 hero-gradient-overlay" />
          <div className="absolute inset-0 tech-grid opacity-40 animate-pulse" />
          <div className="hero-glow" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <div className="space-y-7 reveal-up relative w-full">
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-teal-900/30 backdrop-blur border border-teal-500/20 rounded-full pl-1 pr-4 py-1.5 shadow-[0_0_15px_rgba(20,142,124,0.15)]">
                <span className="bg-primary/20 text-teal-300 rounded-full p-1">
                  <Icon name="bolt" className="text-current" size={14} />
                </span>
                <span className="text-xs font-semibold text-teal-100 uppercase tracking-wider">
                  Next-Gen Enterprise Hosting
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Enterprise Infrastructure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-white">
                Built for Global Scale
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Deploy mission-critical applications on our high-performance cloud
              network. Experience 99.99% uptime with NVMe storage and dedicated
              resources tailored for rapid growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <a
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-hover shadow-[0_0_20px_rgba(20,142,124,0.4)] hover:shadow-[0_0_30px_rgba(20,142,124,0.6)] transition-all duration-300 min-w-[180px]"
                href="#"
            >
              Deploy Server
              <Icon name="rocket_launch" className="ml-2" size={16} />
            </a>
              <a
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 backdrop-blur-sm text-base font-bold rounded-lg text-white bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 min-w-[180px]"
                href="#"
              >
                View Pricing
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 mt-8 border-t border-white/10 max-w-4xl mx-auto">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="flex flex-col items-center">
                  <p className="text-teal-400 font-bold text-3xl font-display">
                    {metric.value}
                  </p>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20">
          <a href="#" onClick={scrollToCounters} className="flex flex-col items-center group cursor-pointer">
            <div className="animate-bounce text-gray-400 group-hover:text-teal-400 transition-colors">
              <Icon name="expand_more" className="text-current" size={36} />
            </div>
          </a>
        </div>
      </section>

      <section
        ref={countersRef}
        id="counters"
        className="scroll-m-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark relative z-20 reveal-up shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100 dark:divide-gray-800/50">
            {counters.map((counter) => (
              <div key={counter.label} className="p-2 group">
                <p className="text-3xl lg:text-4xl font-display font-bold text-primary mb-1 flex justify-center items-center">
                  <AnimatedCounter
                    end={counter.end}
                    suffix={counter.suffix}
                    forceText={counter.forceText}
                  />
                </p>
                <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark group-hover:text-primary transition-colors">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-[#0f1623]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
              Our Solutions
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-text-main-light dark:text-white mb-6">
              Comprehensive IT Services for Modern Enterprises
            </h3>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
              From dedicated cloud hosting to managed security services, Mosalam
              provides the infrastructure you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-up">
            {serviceCards.map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 card-hover group cursor-pointer h-full flex flex-col"
              >
                <div className={service.iconWrap}>
                  <Icon name={service.icon} size={28} />
                </div>
                <h4 className="text-xl font-bold text-text-main-light dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed flex-grow text-sm">
                  {service.description}
                </p>
                <a
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors text-sm"
                  href="#"
                >
                  Learn More
                  <Icon
                    name="chevron_right"
                    className="ml-1 transform group-hover:translate-x-1 transition-transform"
                    size={14}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative mb-12 lg:mb-0 order-2 lg:order-1 reveal-left">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-2xl blur-lg transform translate-x-2 translate-y-2" />
              <img
                alt="Server Room Abstract"
                className="relative rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATCTcZwZbrF_q4vA4B9aptKmouIMrvKkQ0PFf_wsnL_7khS5X3TS8ksp5cjwoZ2CqeQ5kqn7sYK1QEto4bL3f6Ri7JTrK0WZLKRU_-HAJmvUxIh6t341sloyk_9WqQ79XisQ40IckS4pT9pF_mNto47URTP2dLRZO9UpuM0o3bRutopDasEJLWNj9VlsXKQ9oRPMOcZNwxdCHVWdOJGkVQqvYHvKA69knFYY4eboup4rzOkxcYqclQVfGgIb01pLrfQI0MUVZ0qro"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-lg shadow-xl flex items-center justify-center z-20 border border-gray-100 dark:border-gray-700">
                <Icon name="verified_user" className="text-primary" size={36} />
              </div>
            </div>

            <div className="order-1 lg:order-2 reveal-right">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                Why Choose Mosalam
              </h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-text-main-light dark:text-white mb-6">
                Engineered for <span className="text-gradient">Reliability</span>{" "}
                & Speed
              </h3>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8">
                We do not just host your infrastructure; we optimize it. Our team
                of experts works around the clock to ensure your business stays
                online and performs at its peak.
              </p>

              <div className="space-y-6">
                {whyChooseFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <Icon name={feature.icon} size={18} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-text-main-light dark:text-white">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-text-muted-light dark:text-text-muted-dark">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-background-dark overflow-hidden reveal-up">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to upgrade your infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of enterprises trusting Mosalam for their
            mission-critical hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-primary hover:bg-primary-hover shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              href="#"
            >
              Get Started Now
            </a>
            <a
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-white text-base font-semibold rounded-xl text-white hover:bg-white/5 transition-all duration-300"
              href="#"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
