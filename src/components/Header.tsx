"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, whatsappLink } from "@/config/site";
import { MenuIcon, WhatsAppIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // fecha o menu e rola até a seção (funciona também no Safari do iPhone)
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.body.style.overflow = "";
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  };

  return (
    <>
      <header className={`header ${scrolled || open ? "scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="container header-inner">
          <a href="#topo" className="logo" aria-label="NGI University, início" onClick={(e) => go(e, "#topo")}>
            <Image src="/images/ngi-mark.png" unoptimized alt="NGI University" width={326} height={382} priority className="logo-mark" />
            <span className="logo-text">
              Núcleo Global
              <br />
              de Instrutores
            </span>
          </a>

          <nav className="nav" aria-label="Principal">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-primary header-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Garantir vaga
            </a>

            <button
              type="button"
              className="menu-btn"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      {/* fora do <header> para não ficar preso ao desfoque do cabeçalho */}
      {open && (
        <nav id="menu-mobile" className="mobile-menu" aria-label="Menu">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Garantir minha vaga
          </a>
        </nav>
      )}
    </>
  );
}
