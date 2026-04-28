import { useState, useEffect } from 'react';
import { MessageCircle, Users, ExternalLink } from 'lucide-react';
import logoImg from '../assets/logo.webp';
import profileImg from '../assets/eu.webp';

const WHATSAPP_LINK =
    'https://wa.me/5511919799090?text=Ol%C3%A1%20Lucas%21%20Vim%20pelo%20seu%20Instagram%20e%20quero%20saber%20mais%20sobre%20a%20consultoria.';

const SITE_LINK = '/';

interface PartnerLink {
    label: string;
    handle: string;
    url: string;
    emoji: string;
}

const partners: PartnerLink[] = [
    {
        label: 'Nutricionista',
        handle: '@nutrinicolerangel',
        url: 'https://www.instagram.com/nutrinicolerangel',
        emoji: '🥗',
    },
    {
        label: 'Nutricionista',
        handle: '@nutri.leonardogregorini',
        url: 'https://www.instagram.com/nutri.leonardogregorini',
        emoji: '🍽️',
    },
    {
        label: 'Suplementos',
        handle: '@nutre_suplementos',
        url: 'https://www.instagram.com/nutre_suplementos',
        emoji: '🧪',
    },
    {
        label: 'Suplementos',
        handle: '@goldskull.suplementos',
        url: 'https://www.instagram.com/goldskull.suplementos',
        emoji: '💪',
    },
];


export default function InstaPage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Update SEO Meta Tags
        const prevTitle = document.title;
        document.title = 'Links | Lucas Dominicale - Personal Trainer';

        const metaDesc = document.querySelector('meta[name="description"]');
        const prevDesc = metaDesc?.getAttribute('content');
        metaDesc?.setAttribute('content', 'Acesse meus links, consultoria online e parceiros exclusivos.');

        const t = setTimeout(() => setLoaded(true), 100);

        return () => {
            clearTimeout(t);
            // Restore original SEO tags
            document.title = prevTitle;
            if (prevDesc) metaDesc?.setAttribute('content', prevDesc);
        };
    }, []);

    return (
        <main className="relative min-h-screen flex flex-col items-center bg-deep-onyx text-pure-white overflow-hidden">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* Radial glow behind profile */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric/8 blur-[160px] rounded-full" />
                {/* Subtle bottom gradient */}
                <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-deep-onyx to-transparent" />
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-5 pt-12 pb-16">
                {/* ── Logo ── */}
                <div
                    className={`mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                >
                    <img
                        src={logoImg}
                        alt="Dominicale Personal – Logo"
                        className="w-20 h-20 object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                    />
                </div>

                {/* ── Profile Avatar ── */}
                <div
                    className={`relative mb-5 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                >
                    {/* Animated glow ring */}
                    <div className="absolute -inset-1 rounded-full bg-linear-to-br from-electric via-electric/40 to-electric animate-[spin_6s_linear_infinite] blur-sm opacity-70" />
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-deep-onyx ring-2 ring-electric/30">
                        <img
                            src={profileImg}
                            alt="Lucas Dominicale – Personal Trainer"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

                {/* ── Name & Title ── */}
                <div
                    className={`text-center mb-10 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                >
                    <h1 className="text-2xl font-extrabold tracking-wider uppercase">
                        Lucas Dominicale
                    </h1>
                    <p className="text-sm font-semibold tracking-[0.25em] text-electric/80 uppercase mt-1">
                        Personal Trainer
                    </p>
                </div>

                {/* ── Main Links ── */}
                <div className="w-full space-y-4 mb-8">
                    {/* Contato (WhatsApp) */}
                    <LinkButton
                        href={WHATSAPP_LINK}
                        external
                        delay={300}
                        loaded={loaded}
                        variant="primary"
                        icon={<MessageCircle size={18} />}
                    >
                        Contato
                    </LinkButton>

                    {/* Meu Site */}
                    <LinkButton
                        href={SITE_LINK}
                        delay={400}
                        loaded={loaded}
                        variant="secondary"
                        icon={<ExternalLink size={18} />}
                    >
                        Meu Site
                    </LinkButton>
                </div>

                {/* ── Partners Section ── */}
                <div
                    className={`w-full transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent to-platinum-light/20" />
                        <span className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-silver-mist uppercase">
                            <Users size={14} className="text-electric" />
                            Parceiros &amp; Descontos
                        </span>
                        <div className="h-px flex-1 bg-linear-to-l from-transparent to-platinum-light/20" />
                    </div>

                    <div className="space-y-3">
                        {partners.map((p, i) => (
                            <a
                                key={p.handle}
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center gap-4 w-full rounded-2xl border border-platinum-light/10 bg-gunmetal-grey/40 backdrop-blur-sm px-5 py-4 transition-all duration-500 hover:border-electric/40 hover:bg-gunmetal-grey/70 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:scale-[1.02] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{
                                    transitionDelay: loaded ? `${600 + i * 100}ms` : '0ms',
                                }}
                            >
                                {/* Emoji pill */}
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-electric/10 text-lg group-hover:bg-electric/20 transition-colors shrink-0">
                                    {p.emoji}
                                </span>

                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs font-bold tracking-wider text-silver-mist uppercase">
                                        {p.label}
                                    </span>
                                    <span className="text-sm font-semibold text-pure-white truncate group-hover:text-electric transition-colors">
                                        {p.handle}
                                    </span>
                                </div>

                                <ExternalLink
                                    size={16}
                                    className="ml-auto text-silver-mist/40 group-hover:text-electric transition-colors shrink-0"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── Instagram Footer ── */}
                <div
                    className={`mt-12 flex items-center gap-2 text-silver-mist/50 text-xs transition-all duration-700 delay-1100ms ${loaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    <a
                        href="https://www.instagram.com/dominicale_personal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-electric transition-colors"
                    >
                        @dominicale_personal
                    </a>
                </div>
            </div>
        </main>
    );
}

/* ─────────────────────────────── Sub-component ─────────────────────────────── */

interface LinkButtonProps {
    href: string;
    external?: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
    delay?: number;
    loaded?: boolean;
    variant?: 'primary' | 'secondary';
}

function LinkButton({
    href,
    external,
    children,
    icon,
    delay = 0,
    loaded = false,
    variant = 'secondary',
}: LinkButtonProps) {
    const isPrimary = variant === 'primary';

    return (
        <a
            href={href}
            {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            className={`
        group relative flex items-center justify-center gap-3 w-full rounded-2xl text-base font-bold tracking-wide py-4 overflow-hidden transition-all duration-500 hover:scale-[1.03]
        ${isPrimary
                    ? 'bg-electric text-deep-onyx shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)]'
                    : 'border border-platinum-light/15 bg-gunmetal-grey/50 backdrop-blur-sm text-pure-white hover:border-electric/40 hover:bg-gunmetal-grey/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                }
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
            style={{ transitionDelay: loaded ? `${delay}ms` : '0ms' }}
        >
            {/* Shine sweep on hover */}
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-pure-white/20 to-transparent skew-x-12 group-hover:animate-[shine_0.8s_ease-out_forwards] pointer-events-none" />

            {icon && <span className="relative z-10">{icon}</span>}
            <span className="relative z-10 uppercase">{children}</span>
        </a>
    );
}