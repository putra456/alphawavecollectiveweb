import React from 'react';
import { SettingsIcon, ClockIcon } from './icons/Icons';

const MaintenanceMode: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes liquid-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes liquid-shimmer {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }
        .liquid-border-rotate {
          animation: liquid-rotate 8s linear infinite;
        }
        .liquid-shimmer {
          animation: liquid-shimmer 4s ease-in-out infinite;
        }
        .pfp-container:hover .liquid-border-rotate {
          animation-duration: 3s;
          filter: blur(0.5px);
        }
        .pfp-container:hover .pfp-glow {
          opacity: 1 !important;
        }
        .pfp-container:hover .pfp-highlight {
          opacity: 1 !important;
        }
      `}</style>

      <div className="fixed inset-0 z-[10000] bg-[#05060B] flex items-center justify-center overflow-y-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E16] to-[#05060B]" />

        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D6BFF] opacity-[0.08] rounded-full blur-[150px]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-16">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-[#0B0E16] border border-[rgba(244,246,255,0.08)] flex items-center justify-center">
                <SettingsIcon size={40} className="text-[#2D6BFF] maintenance-pulse" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-[#0B0E16] border border-[rgba(244,246,255,0.08)] flex items-center justify-center">
                <ClockIcon size={20} className="text-[#A7AEBF]" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-[#F4F6FF] mb-4 tracking-tight">
            Under Maintenance
          </h1>

          {/* Description */}
          <p className="text-[#A7AEBF] text-base md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
            We're upgrading Alpha Wave Collective to serve you better.
            Please check back soon.
          </p>

          {/* Status indicator */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#0B0E16] border border-[rgba(244,246,255,0.08)]">
            <span className="w-2 h-2 rounded-full bg-[#2D6BFF] maintenance-pulse" />
            <span className="text-sm text-[#A7AEBF] font-mono uppercase tracking-wider">
              System Upgrade in Progress
            </span>
          </div>

          {/* ─── Co Owners Section ─── */}
          <div className="mt-16">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A7AEBF]/30 mb-10">
              Co Owners
            </p>

            <div className="flex items-start justify-center gap-12 md:gap-20">

              {/* ── PutraZach ── */}
              <div className="pfp-container flex flex-col items-center gap-4 cursor-default transition-transform duration-500 ease-out hover:scale-110">
                <div className="relative">
                  {/* Ambient glow */}
                  <div
                    className="pfp-glow absolute -inset-6 rounded-full opacity-0 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(circle, rgba(45,107,255,0.18) 0%, transparent 70%)' }}
                  />

                  {/* Layer 1 · Rotating conic gradient (liquid color band) */}
                  <div
                    className="absolute -inset-[2.5px] rounded-full liquid-border-rotate liquid-shimmer"
                    style={{
                      background:
                        'conic-gradient(from 0deg, rgba(45,107,255,0.9), rgba(99,102,241,0.6), rgba(168,85,247,0.5), rgba(236,72,153,0.4), rgba(14,165,233,0.5), rgba(99,102,241,0.6), rgba(45,107,255,0.9))',
                      filter: 'blur(1.5px)',
                    }}
                  />

                  {/* Layer 2 · Primary glass refraction ring */}
                  <div
                    className="relative p-[2.5px] rounded-full"
                    style={{
                      background:
                        'linear-gradient(155deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.12) 28%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.22) 80%, rgba(255,255,255,0.45) 100%)',
                    }}
                  >
                    {/* Layer 3 · Secondary refraction ring */}
                    <div
                      className="p-[1.5px] rounded-full"
                      style={{
                        background:
                          'linear-gradient(210deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.18) 100%)',
                      }}
                    >
                      {/* Layer 4 · Inner micro-ring */}
                      <div className="p-[0.5px] rounded-full bg-gradient-to-b from-white/15 to-transparent">
                        <img
                          src="https://files.catbox.moe/jmwq0m.jpg"
                          alt="PutraZach"
                          className="w-[88px] h-[88px] md:w-[104px] md:h-[104px] rounded-full object-cover block"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Specular highlight (top-left shine) */}
                  <div
                    className="pfp-highlight absolute inset-[3px] rounded-full pointer-events-none opacity-60 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(160deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.12) 18%, transparent 48%)',
                    }}
                  />

                  {/* Bottom-edge soft reflection */}
                  <div
                    className="absolute inset-[3px] rounded-full pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(340deg, transparent 55%, rgba(255,255,255,0.06) 100%)',
                    }}
                  />

                  {/* Prismatic rainbow tint overlay */}
                  <div
                    className="absolute inset-[3px] rounded-full pointer-events-none opacity-[0.07]"
                    style={{
                      background:
                        'conic-gradient(from 45deg, #2D6BFF, #8B5CF6, #EC4899, #F59E0B, #10B981, #2D6BFF)',
                      mixBlendMode: 'overlay',
                    }}
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm font-semibold text-[#F4F6FF] transition-colors duration-300">
                    PutraZach
                  </p>
                  <p className="text-[9px] text-[#A7AEBF]/40 font-mono uppercase tracking-[0.2em] mt-1">
                    Co Owner
                  </p>
                </div>
              </div>

              {/* ── Arisa Putrii ── */}
              <div className="pfp-container flex flex-col items-center gap-4 cursor-default transition-transform duration-500 ease-out hover:scale-110">
                <div className="relative">
                  {/* Ambient glow */}
                  <div
                    className="pfp-glow absolute -inset-6 rounded-full opacity-0 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)' }}
                  />

                  {/* Layer 1 · Rotating conic gradient (liquid color band – offset start) */}
                  <div
                    className="absolute -inset-[2.5px] rounded-full liquid-border-rotate liquid-shimmer"
                    style={{
                      background:
                        'conic-gradient(from 120deg, rgba(236,72,153,0.9), rgba(168,85,247,0.6), rgba(45,107,255,0.5), rgba(14,165,233,0.4), rgba(245,158,11,0.5), rgba(168,85,247,0.6), rgba(236,72,153,0.9))',
                      filter: 'blur(1.5px)',
                    }}
                  />

                  {/* Layer 2 · Primary glass refraction ring */}
                  <div
                    className="relative p-[2.5px] rounded-full"
                    style={{
                      background:
                        'linear-gradient(155deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.12) 28%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.22) 80%, rgba(255,255,255,0.45) 100%)',
                    }}
                  >
                    {/* Layer 3 · Secondary refraction ring */}
                    <div
                      className="p-[1.5px] rounded-full"
                      style={{
                        background:
                          'linear-gradient(210deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.18) 100%)',
                      }}
                    >
                      {/* Layer 4 · Inner micro-ring */}
                      <div className="p-[0.5px] rounded-full bg-gradient-to-b from-white/15 to-transparent">
                        <img
                          src="https://files.catbox.moe/qt8w53.jpg"
                          alt="Arisa Putrii"
                          className="w-[88px] h-[88px] md:w-[104px] md:h-[104px] rounded-full object-cover block"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Specular highlight (top-left shine) */}
                  <div
                    className="pfp-highlight absolute inset-[3px] rounded-full pointer-events-none opacity-60 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(160deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.12) 18%, transparent 48%)',
                    }}
                  />

                  {/* Bottom-edge soft reflection */}
                  <div
                    className="absolute inset-[3px] rounded-full pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(340deg, transparent 55%, rgba(255,255,255,0.06) 100%)',
                    }}
                  />

                  {/* Prismatic rainbow tint overlay */}
                  <div
                    className="absolute inset-[3px] rounded-full pointer-events-none opacity-[0.07]"
                    style={{
                      background:
                        'conic-gradient(from 165deg, #EC4899, #8B5CF6, #2D6BFF, #0EA5E9, #F59E0B, #EC4899)',
                      mixBlendMode: 'overlay',
                    }}
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm font-semibold text-[#F4F6FF] transition-colors duration-300">
                    Arisa Putrii
                  </p>
                  <p className="text-[9px] text-[#A7AEBF]/40 font-mono uppercase tracking-[0.2em] mt-1">
                    Co Owner
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-14 pt-8 border-t border-[rgba(244,246,255,0.06)]">
            <p className="text-sm text-[#A7AEBF]">
              Need urgent assistance?{' '}
              <a
                href="mailto:support@alphawave.co"
                className="text-[#2D6BFF] hover:underline transition-colors"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-mono text-xs text-[#A7AEBF] uppercase tracking-[0.2em]">
            Alpha Wave Collective
          </p>
        </div>
      </div>
    </>
  );
};

export default MaintenanceMode;
