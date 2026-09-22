import Image from "next/image";

type Props = {
  /** Caminho da imagem em /public (ex.: "/images/gringa.jpg"). Sem src, mostra um placeholder. */
  src?: string | null;
  alt: string;
  /** Texto exibido no placeholder enquanto não há foto */
  label?: string;
  light?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function Photo({ src, alt, label, light, priority, sizes = "(min-width: 900px) 50vw, 100vw" }: Props) {
  return (
    <div className={`ph ${light ? "light" : ""}`} role={src ? undefined : "img"} aria-label={src ? undefined : alt}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      ) : (
        label && <span className="ph-label">{label}</span>
      )}
    </div>
  );
}
