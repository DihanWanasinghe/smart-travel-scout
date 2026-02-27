import React from 'react';

/**
 * Reusable Material Symbols Icon Component
 * 
 * Automatically handles the "Flash of Unstyled Content" (FOUC) issue specifically for ligatures.
 * It hides the raw text (like "magic_button") by making it transparent until the font loads and animates.
 */
export default function Icon({ name, className = "" }: { name: string, className?: string }) {
    return (
        <span
            className={`material-symbols-outlined ${className}`}
            style={{
                color: 'inherit',
                WebkitTextFillColor: 'transparent',
                transition: 'initial'
            }}
            onAnimationStart={(e) => {
                e.currentTarget.style.webkitTextFillColor = 'inherit';
            }}
        >
            {name}
        </span>
    );
}
