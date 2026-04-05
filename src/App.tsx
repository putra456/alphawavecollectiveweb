import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import MaintenanceMode from './components/MaintenanceMode';
import WaveLine from './components/WaveLine';
import {
  ArrowRightIcon,
  CheckIcon,
  ZapIcon,
  PlayIcon,
  ChevronDownIcon,
  MessageCircleIcon,
} from './components/icons/Icons';

gsap.registerPlugin(ScrollTrigger);

// Maintenance mode toggle - set to true to enable maintenance mode
const IS_MAINTENANCE_MODE = true;

function App() {
  const [showMaintenance] = useState(IS_MAINTENANCE_MODE);
  const signalsRef = useRef<HTMLDivElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const mentorshipRef = useRef<HTMLDivElement>(null);
  const transparencyRef = useRef<HTMLDivElement>(null);
  const joinRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showMaintenance) return;

    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      
      heroTl
        .fromTo('.hero-eyebrow', 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
        )
        .fromTo('.hero-title span', 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, 
          '-=0.3'
        )
        .fromTo('.hero-subtitle', 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 
          '-=0.4'
        )
        .fromTo('.hero-cta', 
          { y: 20, opacity: 0, scale: 0.95 }, 
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, 
          '-=0.3'
        )
        .fromTo('.hero-card', 
          { x: 100, opacity: 0, rotateY: 8 }, 
          { x: 0, opacity: 1, rotateY: 0, duration: 0.8, ease: 'power2.out' }, 
          '-=0.6'
        );

      // Section scroll animations
      const sections = [
        { ref: signalsRef, name: 'signals' },
        { ref: liveRef, name: 'live' },
        { ref: pricingRef, name: 'pricing' },
        { ref: mentorshipRef, name: 'mentorship' },
        { ref: transparencyRef, name: 'transparency' },
        { ref: joinRef, name: 'join' },
      ];

      sections.forEach(({ ref, name }) => {
        if (!ref.current) return;

        gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5,
          }
        })
          .fromTo(`.${name}-headline`, 
            { x: -80, opacity: 0 }, 
            { x: 0, opacity: 1, ease: 'power2.out' }, 
            0
          )
          .fromTo(`.${name}-card`, 
            { x: 80, opacity: 0 }, 
            { x: 0, opacity: 1, ease: 'power2.out' }, 
            0
          );
      });

      // Contact section animation
      if (contactRef.current) {
        gsap.fromTo('.contact-item',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: contactRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.5,
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, [showMaintenance]);

  const scrollToJoin = () => {
    joinRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showMaintenance) {
    return <MaintenanceMode />;
  }

  return (
    <div className="relative bg-[#05060B] min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation onJoinClick={scrollToJoin} />

      {/* Section 1: Hero */}
      <section className="section-pinned vignette" id="home">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero_city.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.25)] via-[rgba(5,6,11,0.72)] to-[rgba(5,6,11,0.92)]" />
        
        <WaveLine className="top-[45%] left-0 w-full h-[300px] opacity-60" variant="hero" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            <p className="hero-eyebrow font-mono text-xs text-[#2D6BFF] uppercase tracking-[0.2em] mb-6">
              Alpha Wave Collective
            </p>
            <h1 className="hero-title font-display font-bold text-[#F4F6FF] mb-6">
              <span className="block">TRADE THE</span>
              <span className="block gradient-text">WAVE.</span>
            </h1>
            <p className="hero-subtitle text-lg text-[#A7AEBF] mb-8 leading-relaxed">
              Daily signals, live mentorship, and a community built for consistency.
            </p>
            <button 
              onClick={scrollToJoin}
              className="hero-cta group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2D6BFF] text-[#F4F6FF] font-medium hover:glow-blue transition-all duration-300"
            >
              Join the Collective
              <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right card */}
          <div className="hero-card glass-card rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-xl font-semibold text-[#F4F6FF] mb-6">
              What you get
            </h3>
            <ul className="space-y-4">
              {[
                '3–5 high-probability setups per day',
                'Live market breakdowns + Q&A',
                'Risk rules that protect your capital',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-[#2D6BFF] mt-0.5 flex-shrink-0" />
                  <span className="text-[#A7AEBF] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Precision Signals */}
      <section ref={signalsRef} className="section-pinned vignette" id="signals">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/workspace_charts.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.25)] via-[rgba(5,6,11,0.72)] to-[rgba(5,6,11,0.92)]" />
        
        <WaveLine className="top-[50%] left-0 w-full h-[250px] opacity-50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="signals-headline flex-1 max-w-xl">
            <h2 className="section-title font-display font-bold text-[#F4F6FF] mb-6">
              PRECISION<br />
              <span className="gradient-text">SIGNALS.</span>
            </h2>
            <p className="text-lg text-[#A7AEBF] leading-relaxed">
              Entries, stops, and targets—delivered before the move.
            </p>
          </div>

          <div className="signals-card glass-card rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-lg font-semibold text-[#F4F6FF] mb-6">
              Today&apos;s Setup Preview
            </h3>
            <div className="space-y-4">
              {[
                { pair: 'EURUSD', type: 'Long', price: '1.0875' },
                { pair: 'XAUUSD', type: 'Short', price: '2,412' },
                { pair: 'US30', type: 'Long', price: '41,220' },
              ].map((signal, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between py-3 px-4 rounded-xl bg-[rgba(244,246,255,0.03)] border border-[rgba(244,246,255,0.06)]"
                >
                  <span className="font-mono text-sm text-[#F4F6FF]">{signal.pair}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    signal.type === 'Long' 
                      ? 'bg-[rgba(45,107,255,0.15)] text-[#2D6BFF]' 
                      : 'bg-[rgba(244,246,255,0.08)] text-[#A7AEBF]'
                  }`}>
                    {signal.type}
                  </span>
                  <span className="font-mono text-sm text-[#A7AEBF]">{signal.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-[#A7AEBF]">
              Full plan + risk notes in the community.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Live Feed */}
      <section ref={liveRef} className="section-pinned vignette">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/desk_phone.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.25)] via-[rgba(5,6,11,0.72)] to-[rgba(5,6,11,0.92)]" />
        
        <WaveLine className="top-[48%] left-0 w-full h-[280px] opacity-50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="live-headline flex-1 max-w-xl">
            <h2 className="section-title font-display font-bold text-[#F4F6FF] mb-6">
              LIVE<br />
              <span className="gradient-text">FEED.</span>
            </h2>
            <p className="text-lg text-[#A7AEBF] leading-relaxed">
              Markets change fast. So do we.
            </p>
          </div>

          <div className="live-card glass-card rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-lg font-semibold text-[#F4F6FF] mb-6">
              Community Access
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                'Pre-session brief',
                'Intraday updates',
                'Post-trade review',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ZapIcon size={18} className="text-[#2D6BFF]" />
                  <span className="text-[#A7AEBF] text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToJoin}
              className="w-full py-3 rounded-xl border border-[#2D6BFF] text-[#F4F6FF] text-sm font-medium hover:bg-[#2D6BFF] transition-all duration-300"
            >
              Request Invite
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing */}
      <section ref={pricingRef} className="section-pinned vignette" id="pricing">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/city_alt.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.25)] via-[rgba(5,6,11,0.72)] to-[rgba(5,6,11,0.92)]" />
        
        <WaveLine className="top-[52%] left-0 w-full h-[260px] opacity-50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="pricing-headline flex-1 max-w-xl">
            <h2 className="section-title font-display font-bold text-[#F4F6FF] mb-6">
              CHOOSE YOUR<br />
              <span className="gradient-text">EDGE.</span>
            </h2>
            <p className="text-lg text-[#A7AEBF] leading-relaxed">
              Start free. Upgrade when you&apos;re ready.
            </p>
          </div>

          <div className="pricing-card glass-card rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-lg font-semibold text-[#F4F6FF] mb-6">
              Membership
            </h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-[rgba(244,246,255,0.03)] border border-[rgba(244,246,255,0.06)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-[#F4F6FF]">Free</span>
                  <span className="text-xs text-[#A7AEBF]">$0</span>
                </div>
                <p className="text-sm text-[#A7AEBF]">Weekly watchlist + market notes</p>
              </div>
              <div className="p-4 rounded-xl bg-[rgba(45,107,255,0.08)] border border-[rgba(45,107,255,0.2)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-[#F4F6FF]">Pro</span>
                  <span className="text-xs text-[#2D6BFF]">Recommended</span>
                </div>
                <p className="text-sm text-[#A7AEBF]">Daily signals + mentorship + risk toolkit</p>
              </div>
            </div>
            <button 
              onClick={scrollToJoin}
              className="w-full py-3 rounded-xl bg-[#2D6BFF] text-[#F4F6FF] text-sm font-medium hover:glow-blue transition-all duration-300"
            >
              Compare Plans
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Mentorship */}
      <section ref={mentorshipRef} className="section-pinned vignette" id="mentorship">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/team_room.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.25)] via-[rgba(5,6,11,0.72)] to-[rgba(5,6,11,0.92)]" />
        
        <WaveLine className="top-[50%] left-0 w-full h-[270px] opacity-50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="mentorship-headline flex-1 max-w-xl">
            <h2 className="section-title font-display font-bold text-[#F4F6FF] mb-6">
              MENTORSHIP.<br />
              <span className="gradient-text">MASTER THE CRAFT.</span>
            </h2>
            <p className="text-lg text-[#A7AEBF] leading-relaxed">
              Learn the strategy. Trade with conviction.
            </p>
          </div>

          <div className="mentorship-card glass-card rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-lg font-semibold text-[#F4F6FF] mb-6">
              How it works
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                'Live sessions 4× per week',
                'Trade reviews + feedback',
                'Private group chat',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <PlayIcon size={18} className="text-[#2D6BFF]" />
                  <span className="text-[#A7AEBF] text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={scrollToJoin}
              className="w-full py-3 rounded-xl border border-[rgba(244,246,255,0.15)] text-[#F4F6FF] text-sm font-medium hover:bg-[rgba(244,246,255,0.05)] transition-all duration-300"
            >
              Meet the Mentors
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Transparency */}
      <section ref={transparencyRef} className="section-pinned vignette">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/laptop_phone.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.25)] via-[rgba(5,6,11,0.72)] to-[rgba(5,6,11,0.92)]" />
        
        <WaveLine className="top-[48%] left-0 w-full h-[250px] opacity-50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="transparency-headline flex-1 max-w-xl">
            <h2 className="section-title font-display font-bold text-[#F4F6FF] mb-6">
              TRANSPARENCY.<br />
              <span className="gradient-text">NO HYPE. JUST DATA.</span>
            </h2>
            <p className="text-lg text-[#A7AEBF] leading-relaxed">
              Real numbers. Real performance.
            </p>
          </div>

          <div className="transparency-card glass-card rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-lg font-semibold text-[#F4F6FF] mb-6">
              Monthly Snapshot
            </h3>
            <div className="space-y-6 mb-8">
              {[
                { label: 'Win rate', value: '~62%' },
                { label: 'Avg R:R', value: '1:2.4' },
                { label: 'Max drawdown', value: '<6%' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[#A7AEBF] text-sm">{stat.label}</span>
                  <span className="font-mono text-xl text-[#F4F6FF]">{stat.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#A7AEBF] border-t border-[rgba(244,246,255,0.06)] pt-4">
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Join CTA */}
      <section ref={joinRef} className="section-pinned vignette">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/city_wide.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,6,11,0.25)] via-[rgba(5,6,11,0.72)] to-[rgba(5,6,11,0.92)]" />
        
        <WaveLine className="top-[50%] left-0 w-full h-[280px] opacity-50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="join-headline flex-1 max-w-xl">
            <h2 className="section-title font-display font-bold text-[#F4F6FF] mb-6">
              JOIN THE<br />
              <span className="gradient-text">COLLECTIVE.</span>
            </h2>
            <p className="text-lg text-[#A7AEBF] leading-relaxed">
              Get your first week of signals free.
            </p>
          </div>

          <div className="join-card glass-card rounded-2xl p-8 w-full max-w-md">
            <h3 className="font-display text-lg font-semibold text-[#F4F6FF] mb-6">
              Request Access
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(244,246,255,0.03)] border border-[rgba(244,246,255,0.08)] text-[#F4F6FF] placeholder:text-[#A7AEBF] text-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(244,246,255,0.03)] border border-[rgba(244,246,255,0.08)] text-[#F4F6FF] placeholder:text-[#A7AEBF] text-sm"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-xl bg-[rgba(244,246,255,0.03)] border border-[rgba(244,246,255,0.08)] text-[#A7AEBF] text-sm appearance-none cursor-pointer">
                  <option value="">I trade...</option>
                  <option value="forex">Forex</option>
                  <option value="crypto">Crypto</option>
                  <option value="indices">Indices</option>
                  <option value="stocks">Stocks</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-[#2D6BFF] text-[#F4F6FF] text-sm font-medium hover:glow-blue transition-all duration-300"
              >
                Get Invite
              </button>
            </form>
            <p className="mt-4 text-xs text-center text-[#A7AEBF]">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Contact & FAQ */}
      <section ref={contactRef} className="relative py-24 lg:py-32 bg-[#05060B]" id="contact">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* FAQ */}
            <div className="contact-item">
              <h2 className="font-display text-2xl font-bold text-[#F4F6FF] mb-8">
                Questions? We&apos;ve got answers.
              </h2>
              <div className="space-y-4">
                {[
                  { q: 'Do you offer signals for beginners?', a: 'Yes. Our signals include clear entry, stop, and target levels suitable for all experience levels.' },
                  { q: 'What markets do you cover?', a: 'We cover Forex, Crypto, Indices, and Commodities with a focus on high-liquidity pairs.' },
                  { q: 'Can I cancel anytime?', a: 'Absolutely. No contracts, no hidden fees. Cancel whenever you want.' },
                ].map((faq, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-center justify-between py-4 px-5 rounded-xl bg-[rgba(244,246,255,0.03)] border border-[rgba(244,246,255,0.06)] cursor-pointer list-none">
                      <span className="text-[#F4F6FF] text-sm font-medium">{faq.q}</span>
                      <ChevronDownIcon size={18} className="text-[#A7AEBF] group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 py-4 text-[#A7AEBF] text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="contact-item">
              <h2 className="font-display text-2xl font-bold text-[#F4F6FF] mb-8">
                Get in touch.
              </h2>
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(45,107,255,0.1)] flex items-center justify-center">
                    <MessageCircleIcon size={24} className="text-[#2D6BFF]" />
                  </div>
                  <div>
                    <p className="text-[#F4F6FF] font-medium">support@alphawave.co</p>
                    <p className="text-[#A7AEBF] text-sm">Response time: ~24 hours</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-[rgba(244,246,255,0.06)]">
                  <p className="text-[#A7AEBF] text-sm mb-4">Follow us</p>
                  <div className="flex gap-4">
                    {['Twitter', 'Discord', 'Telegram'].map((social) => (
                      <a 
                        key={social}
                        href="#"
                        className="px-4 py-2 rounded-lg bg-[rgba(244,246,255,0.03)] border border-[rgba(244,246,255,0.06)] text-[#A7AEBF] text-sm hover:text-[#F4F6FF] hover:border-[rgba(244,246,255,0.12)] transition-all"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Footer */}
      <footer className="relative py-12 bg-[#05060B] border-t border-[rgba(244,246,255,0.06)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="font-mono text-sm text-[#F4F6FF] uppercase tracking-[0.15em]">
              Alpha Wave
            </div>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Risk Disclaimer'].map((link) => (
                <a 
                  key={link}
                  href="#"
                  className="text-sm text-[#A7AEBF] hover:text-[#F4F6FF] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="text-sm text-[#A7AEBF]">
              © 2026 Alpha Wave Collective. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
