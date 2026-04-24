import { useEffect, useState } from 'react';
import logo from '../../assets/logo.webp';
import hero from '../../assets/heroBanner.webp';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const imagesToPreload = [logo, hero];
        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === imagesToPreload.length) {
                // All critical images loaded, start fade out
                startFadeOut();
            }
        };

        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad; // Continue even if one fails
        });

        // Fallback timer in case loading takes too long (e.g. 3s)
        const fallback = setTimeout(() => {
            startFadeOut();
        }, 3000);

        function startFadeOut() {
            clearTimeout(fallback);
            // Small extra delay for smoothness
            setTimeout(() => {
                setIsFading(true);
                setTimeout(() => setIsVisible(false), 500);
            }, 800);
        }

        return () => clearTimeout(fallback);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-9999 flex items-center justify-center bg-deep-onyx transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo with pulsing and shimmer */}
                <div className="relative mb-12 overflow-hidden rounded-xl">
                    <img
                        src={logo}
                        alt="Lucas Dominicale"
                        className="h-24 md:h-32 w-auto object-contain animate-pulse brightness-110"
                    />
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-electric/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>

                {/* Sleek Loading Bar */}
                <div className="w-64 h-0.5 bg-gunmetal-grey rounded-full overflow-hidden">
                    <div className="h-full bg-electric rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
                </div>

                <span className="mt-6 text-xs text-silver-mist uppercase tracking-[0.3em] font-bold animate-pulse">
                    Preparando seu treino
                </span>
            </div>
        </div>
    );
}
