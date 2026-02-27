import React, { useEffect, useState } from 'react';

/**
 * Reusable Material Symbols Icon Component
 * 
 * Automatically handles the "Flash of Unstyled Content" (FOUC) issue specifically for ligatures.
 * Uses document.fonts.ready to ensure the font is fully loaded before making the text visible,
 * preventing the raw text (like "magic_button") from flashing on screen.
 */
export default function Icon({ name, className = "" }: { name: string, className?: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Wait for all fonts (including material-symbols) to finish loading
        document.fonts.ready.then(() => {
            setIsLoaded(true);
        });
    }, []);

    return (
        <span
            className={`material-symbols-outlined ${className} transition-opacity duration-200`}
            style={{
                opacity: isLoaded ? 1 : 0,
                // Fallback to hide text completely if the opacity transition somehow fails
                color: isLoaded ? 'inherit' : 'transparent',
                // Keep the element taking up structural space even when invisible
                userSelect: isLoaded ? 'auto' : 'none'
            }}
        >
            {name}
        </span>
    );
}
