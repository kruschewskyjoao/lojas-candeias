
import React from 'react';

interface IconProps {
    className?: string;
}

export const WhatsappIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.34 3.48 16.81L2 22l5.33-1.48C8.72 21.41 10.34 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 20.15C10.49 20.15 8.99 19.68 7.74 18.86L7.44 18.67L4.72 19.44l0.79-2.65L5.29 16.48C4.41 15.11 3.81 13.53 3.81 11.91C3.81 7.36 7.49 3.68 12.04 3.68C16.59 3.68 20.27 7.36 20.27 11.91C20.27 16.46 16.59 20.15 12.04 20.15M17.36 14.34C17.13 14.23 16.13 13.73 15.91 13.65C15.69 13.56 15.53 13.52 15.38 13.75C15.22 13.97 14.77 14.54 14.62 14.71C14.47 14.88 14.32 14.89 14.09 14.78C13.86 14.68 13.06 14.41 12.11 13.56C11.33 12.86 10.82 12.04 10.67 11.82C10.53 11.59 10.63 11.47 10.74 11.36C10.84 11.25 10.97 11.09 11.11 10.94C11.23 10.81 11.28 10.7 11.37 10.54C11.46 10.38 11.41 10.23 11.35 10.12C11.29 10 10.84 8.84 10.66 8.38C10.48 7.93 10.3 7.99 10.17 7.99C10.04 7.99 9.88 7.99 9.73 7.99C9.57 7.99 9.32 8.03 9.12 8.26C8.92 8.48 8.42 8.93 8.42 10.03C8.42 11.13 9.15 12.18 9.26 12.33C9.38 12.48 10.8 14.75 13.02 15.68C13.57 15.91 13.96 16.03 14.28 16.12C14.81 16.25 15.28 16.22 15.66 16.17C16.09 16.1 16.92 15.61 17.11 15.05C17.3 14.49 17.3 14.04 17.25 13.93C17.19 13.82 17.13 13.78 17.03 13.73C16.93 13.68 16.84 13.64 16.74 13.6C16.65 13.56 16.55 13.52 16.46 13.48C16.36 13.43 17.36 14.34 17.36 14.34Z"></path>
    </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.149 0-3.51.012-4.73.068-2.76.126-3.955 1.31-4.082 4.082-.056 1.22-.067 1.58-.067 4.73s.011 3.51.067 4.73c.127 2.772 1.322 3.956 4.082 4.082 1.22.056 1.58.067 4.73.067s3.51-.011 4.73-.067c2.76-.126 3.955-1.31 4.082-4.082.056-1.22.067-1.58.067-4.73s-.011-3.51-.067-4.73c-.127-2.772-1.322-3.956-4.082-4.082-1.22-.056-1.58-.068-4.73-.068zm0 3.192c-2.702 0-4.898 2.196-4.898 4.898s2.196 4.898 4.898 4.898 4.898-2.196 4.898-4.898-2.196-4.898-4.898-4.898zm0 8.332c-1.923 0-3.483-1.56-3.483-3.483S10.077 8.517 12 8.517s3.483 1.56 3.483 3.483-1.56 3.483-3.483 3.483zm5.438-8.232c-.749 0-1.358-.609-1.358-1.358s.609-1.358 1.358-1.358 1.358.609 1.358 1.358-.609 1.358-1.358 1.358z"></path>
    </svg>
);

export const VerifiedIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
  </svg>
);

export const QuoteIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"></path>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

export const FashionIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const RestaurantIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.5a2.5 2.5 0 01-5 0V5a2.5 2.5 0 015 0v10.5zM21 15.5v2.5a2.5 2.5 0 01-5 0V18M11 5v14h4V5h-4zM4 15.5v2.5A2.5 2.5 0 006.5 21H7a2.5 2.5 0 002.5-2.5V18" />
    </svg>
);

export const BeautyIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-3.07a4.008 4.008 0 00-1.04-2.735 4 4 0 10-5.92 0A4.008 4.008 0 005 17.93V21" />
    </svg>
);

export const ServicesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
