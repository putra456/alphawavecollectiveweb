import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const ChartIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 16l4-4 3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SignalIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 12l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TrendingUpIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MessageCircleIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AwardIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BarChartIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
