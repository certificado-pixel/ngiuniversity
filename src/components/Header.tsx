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

  return (
    <header className={`header ${scrolled || open ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#topo" className="logo" aria-label="NGI University, início" onClick={() => setOpen(false)}>
          <Image src="/images/ngi-mark.png" alt="" width={326} height={382} priority className="logo-mark" />
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

        <a className="btn btn-primary header-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Garantir vaga
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
