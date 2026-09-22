/**
 * Selo desenhado PROVISÓRIO para cursos sem arquivo de selo (ex.: Educador Internacional).
 * Substitua pelo arquivo oficial preenchendo `seal` no curso em src/config/site.ts.
 */
export default function SealArt({ title, className }: { title: string; className?: string }) {
  const id = title.replace(/\W+/g, "-").toLowerCase();
  return (
    <svg className={className} viewBox="0 0 440 440" role="img" aria-label={`Selo ${title}`}>
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3dfa6" />
          <stop offset="0.35" stopColor="#c9a04f" />
          <stop offset="0.6" stopColor="#f6e3ae" />
          <stop offset="1" stopColor="#a67a32" />
        </linearGradient>
        <radialGradient id={`${id}-fill`} cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#7a5694" />
          <stop offset="0.7" stopColor="#4b3063" />
          <stop offset="1" stopColor="#2c1a3d" />
        </radialGradient>
        <path id={`${id}-arc`} d="M 72.8 305 A 170 170 0 1 1 367.2 305" />
      </defs>
      <circle cx="220" cy="220" r="214" fill={`url(#${id}-gold)`} />
      <circle cx="220" cy="220" r="198" fill={`url(#${id}-fill)`} />
      <circle cx="220" cy="220" r="150" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="4" />
      <text fill={`url(#${id}-gold)`} fontFamily="var(--font-display), Georgia, serif" fontSize="44" fontWeight="800" letterSpacing="1">
        <textPath href={`#${id}-arc`} startOffset="50%" textAnchor="middle">
          {title.toUpperCase()}
        </textPath>
      </text>
      <image href="/images/ngi-lotus.png" x="118" y="160" width="204" height="159" />
    </svg>
  );
}
