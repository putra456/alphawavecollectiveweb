import React from 'react';
import { SettingsIcon, ClockIcon } from './icons/Icons';

const MaintenanceMode: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[10000] bg-[#05060B] flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E16] to-[#05060B]" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D6BFF] opacity-[0.08] rounded-full blur-[150px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
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
        
        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-[rgba(244,246,255,0.06)]">
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
  );
};

export default MaintenanceMode;
