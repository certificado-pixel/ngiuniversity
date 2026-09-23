import Image from "next/image";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import CourseSection from "@/components/CourseSection";
import CourseSeal from "@/components/CourseSeal";
import { ArrowIcon, InstagramIcon, PlusIcon, WhatsAppIcon } from "@/components/icons";
import { careerPlan, certification, courses, faculty, faq, instagramFeed, nav, pillars, site, whatsappLink } from "@/config/site";

const marqueeWords = ["Metodologia NGI", "Educador Oficial", "Educador Internacional", "Educador Elite", "Padrão internacional", "Selo MEC", "Parceria FABRANI", "Liderança", "Didática"];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: `${site.name} · ${site.fullName}`,
        url: site.url,
        description: site.description,
        logo: `${site.url}/images/ngi-logo.png`,
        founder: faculty.founders.map((f) => ({ "@type": "Person", name: f.name })),
      },
      ...courses.map((c) => ({
        "@type": "Course",
        name: c.name,
        description: c.summary,
        provider: { "@type": "Organization", name: site.name, sameAs: site.url },
        hasCourseInstance: { "@type": "CourseInstance", courseMode: "onsite", courseWorkload: "PT30H" },
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Reveal />

      <main id="topo">
        {/* ---------------- HERO ---------------- */}
        <section className="hero dark">
          <Image src="/images/lotus-line.svg" unoptimized alt="" width={600} height={440} className="hero-lotus" aria-hidden="true" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">NGI University · AGRINGA &amp; Tande Carlos</span>
              <h1>
                Do nail design à <em className="gold-text">sala de aula</em>.
              </h1>
              <p className="lead">
                Cursos de extensão para nail designers que querem ensinar, liderar e formar novos profissionais com
                a Metodologia NGI e padrão internacional.
              </p>
              <ul className="hero-chips">
                <li>30h presenciais</li>
                <li>Plano de Carreira NGI</li>
                <li>Metodologia NGI</li>
              </ul>
              <div className="hero-actions">
                <a className="btn btn-ghost" href="#cursos">
                  Conhecer os cursos
                </a>
              </div>
              <a href="#certificacao" className="trust">
                <Image src="/images/selo-mec.png" unoptimized alt="Selo Reconhecido pelo MEC" width={357} height={440} className="trust-mec" />
                <span className="trust-text">
                  Certificação com selo MEC
                  <small>em parceria com</small>
                </span>
                <Image src="/images/fabrani-branco.png" unoptimized alt="FABRANI, Faculdade Brasileira de Negócios Inovadores" width={1847} height={394} className="trust-fabrani" />
              </a>
            </div>

            <div className="hero-media hero-duo">
              <Image
                src="/images/tande-e-agringa.jpg"
                alt="Tande Carlos e Gizelle Silva, AGRINGA, fundadores da NGI University"
                width={1800}
                height={1108}
                priority
                sizes="(min-width: 900px) 60vw, 100vw"
                quality={90}
                className="hero-duo-img"
              />
              <div className="hero-names" aria-hidden="true">
                <span>Tande Carlos</span>
                <span>AGRINGA</span>
              </div>
            </div>
          </div>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...marqueeWords, ...marqueeWords].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SOBRE ---------------- */}
        <section id="sobre" className="section">
          <div className="container">
            <div className="section-head split reveal">
              <div>
                <span className="eyebrow">Núcleo Global de Instrutores</span>
                <h2 className="h2">
                  Técnica de excelência, ensinada com <em>método</em>.
                </h2>
              </div>
              <p className="lead">
                O mercado de nail design cresce rápido, mas ainda falta padronização no ensino. Muita gente domina a
                técnica e não tem ferramentas para transmiti-la. A NGI University existe para formar educadores que
                ensinam com clareza, lideram com ética e constroem carreiras de alto nível.
              </p>
            </div>

            <div className="pillars reveal">
              {pillars.map((p, i) => (
                <div className="pillar" key={p.title}>
                  <span className="num">
                    0{i + 1} · {p.kicker}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- PLANO DE CARREIRA ---------------- */}
        <section id="plano-de-carreira" className="section career" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head split reveal">
              <div>
                <span className="eyebrow">Plano de Carreira NGI</span>
                <h2 className="h2">
                  Toda grande carreira precisa de um <em>caminho</em>.
                </h2>
              </div>
              <p className="lead">
                Durante muito tempo, crescer como educador significava aprender sozinho. O Plano de Carreira NGI é uma
                jornada estruturada em quatro níveis para ensinar, prosperar, liderar e construir um legado.
              </p>
            </div>
            <ol className="career-steps">
              {careerPlan.map((step) => {
                const body = (
                  <>
                    <span className="career-dot" style={{ background: step.color }} />
                    <span className="career-level">{step.level}</span>
                    <strong>{step.name}</strong>
                    <p>{step.text}</p>
                    {step.href ? <span className="career-link">Ver curso <ArrowIcon /></span> : <span className="career-link muted">Consulte a equipe</span>}
                  </>
                );
                return (
                  <li key={step.name} className="career-step reveal">
                    {step.href ? (
                      <a href={step.href}>{body}</a>
                    ) : (
                      <a href={whatsappLink(`Olá! Quero saber sobre o nível ${step.name} do Plano de Carreira NGI.`)} target="_blank" rel="noopener noreferrer">
                        {body}
                      </a>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ---------------- CURSOS (visão geral) ---------------- */}
        <section id="cursos" className="section dark courses-overview">
          <div className="container">
            <div className="section-head split reveal">
              <div>
                <span className="eyebrow">Cursos com inscrições abertas</span>
                <h2 className="h2">
                  Escolha o seu <em>próximo nível</em>.
                </h2>
              </div>
              <p className="lead">
                Três níveis do Plano de Carreira NGI com inscrições abertas: do educador que empreende ao educador que
                forma líderes, passando por uma formação com referência internacional. Certificação com selo MEC em
                parceria com a FABRANI.
              </p>
            </div>

            <div className="course-cards">
              {courses.map((c) => (
                <article key={c.id} className={`course-card course-card-${c.theme} reveal`}>
                  <CourseSeal course={c} className="course-card-seal" />
                  <span className="course-card-level">{c.level}</span>
                  <h3>{c.name}</h3>
                  <p>{c.tagline}</p>
                  <ul className="course-card-facts">
                    {c.facts.slice(0, 3).map((f) => (
                      <li key={f.label}>{f.value}</li>
                    ))}
                  </ul>
                  <div className="course-card-actions">
                    <a className="btn btn-primary" href={whatsappLink(c.message)} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon />
                      Quero me inscrever
                    </a>
                    <a className="course-card-link" href={`#${c.id}`}>
                      Ver programa <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CURSOS (detalhe) ---------------- */}
        {courses.map((c) => (
          <CourseSection key={c.id} course={c} />
        ))}

        {/* ---------------- DOCENTES ---------------- */}
        <section id="docentes" className="section" style={{ background: "var(--paper)" }}>
          <div className="container">
            <div className="section-head split reveal">
              <div>
                <span className="eyebrow">Corpo docente</span>
                <h2 className="h2">
                  Quem conduz a sua <em>formação</em>.
                </h2>
              </div>
              <p className="lead">
                Duas trajetórias que unem o melhor da técnica, da didática e da gestão de negócios na beleza.
              </p>
            </div>

            <div className="founders">
              {faculty.founders.map((f) => (
                <article className="founder reveal" key={f.name}>
                  <div className="founder-media">
                    <Photo src={f.image} alt={f.name} label={`Foto · ${f.name}`} light />
                  </div>
                  <div>
                    <span className="founder-alias">{f.alias}</span>
                    <h3>{f.name}</h3>
                    <span className="role">{f.role}</span>
                    <blockquote className="founder-quote">“{f.quote}”</blockquote>
                    <p className="bio">{f.bio}</p>
                    <a className="ig" href={f.instagram} target="_blank" rel="noopener noreferrer">
                      <InstagramIcon /> Seguir no Instagram
                    </a>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ---------------- INSTAGRAM ---------------- */}
        <section id="instagram" className="section dark insta">
          <div className="container">
            <div className="insta-head reveal">
              <span className="eyebrow">Instagram</span>
              <h2 className="h2">
                Acompanhe a NGI no <em>dia a dia</em>.
              </h2>
              <p className="lead">Formaturas, bastidores, próximas turmas e conteúdo para educadores.</p>
            </div>

            <div className="insta-card reveal">
              <a className="insta-profile" href={instagramFeed.url} target="_blank" rel="noopener noreferrer">
                <span className="insta-avatar">
                  <Image src="/images/ngi-mark.png" unoptimized alt="" width={326} height={382} />
                </span>
                <span className="insta-meta">
                  <strong>
                    @{instagramFeed.handle} <InstagramIcon />
                  </strong>
                  <span className="insta-name">{instagramFeed.name}</span>
                  <span className="insta-bio">{instagramFeed.bio}</span>
                </span>
              </a>

              <div className="insta-grid">
                {instagramFeed.posts.map((p) => (
                  <a key={p.url} href={p.url} target="_blank" rel="noopener noreferrer" className="insta-post" aria-label={p.alt}>
                    <Image src={p.img} alt={p.alt} width={360} height={480} sizes="(min-width: 760px) 200px, 33vw" />
                  </a>
                ))}
              </div>

              <a className="insta-cta" href={instagramFeed.url} target="_blank" rel="noopener noreferrer">
                Seguir no Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- CERTIFICAÇÃO ---------------- */}
        <section id="certificacao" className="section dark cert">
          <div className="container">
            <div className="cert-hero reveal">
              <Image src="/images/selo-mec.png" unoptimized alt="Selo Reconhecido pelo MEC" width={357} height={440} className="cert-mec" />
              <div>
                <span className="eyebrow">Certificação</span>
                <h2 className="h2">
                  Certificação com <em className="gold-text">selo MEC</em>, em parceria com a FABRANI.
                </h2>
                <p className="lead" style={{ marginTop: 22 }}>
                  Os cursos seguem projeto pedagógico de extensão da {site.certifier.fullName}, com coordenação do{" "}
                  {site.certifier.coordinator}. Um certificado com peso acadêmico para a sua carreira de educador.
                </p>
                <div className="cert-partner">
                  <span>Parceria acadêmica</span>
                  <a href="https://fabrani.com.br" target="_blank" rel="noopener noreferrer" aria-label="Site da FABRANI, Faculdade Brasileira de Negócios Inovadores" className="cert-partner-link">
                    <Image src="/images/fabrani-branco.png" unoptimized alt="FABRANI, Faculdade Brasileira de Negócios Inovadores" width={1847} height={394} />
                  </a>
                </div>
              </div>
            </div>
            <figure className="cert-photo reveal">
              <Image src="/images/turma-certificados.jpg" alt="Turma da NGI University com seus certificados" width={1350} height={537} sizes="(min-width: 1240px) 1200px, 100vw" />
              <figcaption>Turma NGI com os certificados em mãos.</figcaption>
            </figure>
            <div className="cert-list">
              {certification.map((c, i) => (
                <div className="cert-item reveal" key={c.title}>
                  <span className="cert-n">0{i + 1}</span>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section id="faq" className="section" style={{ background: "var(--paper)" }}>
          <div className="container faq-grid">
            <div className="reveal">
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2 className="h2">Antes de você chamar a gente.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                Não encontrou sua resposta? A equipe NGI responde no WhatsApp.
              </p>
              <div className="hero-actions" style={{ marginTop: 28 }}>
                <a className="btn btn-navy" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Tirar dúvidas
                </a>
              </div>
            </div>
            <div className="faq-list reveal">
              {faq.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    {item.q}
                    <span className="plus">
                      <PlusIcon />
                    </span>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CTA FINAL ---------------- */}
        <section className="section dark cta">
          <div className="container reveal">
            <Image src="/images/ngi-lotus.png" unoptimized alt="" width={228} height={178} className="cta-lotus" aria-hidden="true" />
            <span className="eyebrow">Próximas turmas</span>
            <h2>
              Seu talento merece ser <em className="gold-text">ensinado</em>.
            </h2>
            <p className="lead">Fale com a equipe NGI e descubra qual curso é o próximo passo da sua carreira.</p>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Image src="/images/ngi-logo.png" unoptimized alt="NGI University · Núcleo Global de Instrutores" width={431} height={583} className="footer-logo" />
              <a className="footer-partner" href="https://fabrani.com.br" target="_blank" rel="noopener noreferrer" aria-label="Site da FABRANI, Faculdade Brasileira de Negócios Inovadores">
                <Image src="/images/selo-mec.png" unoptimized alt="Selo Reconhecido pelo MEC" width={357} height={440} className="footer-mec" />
                <Image src="/images/fabrani-branco.png" unoptimized alt="FABRANI" width={1847} height={394} className="footer-fabrani" />
              </a>
            </div>
            <div>
              <h4>Navegação</h4>
              <ul>
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href}>{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Instagram</h4>
              <ul>
                <li>
                  <a href={site.social.instagramNGI} target="_blank" rel="noopener noreferrer">NGI University</a>
                </li>
                <li>
                  <a href={site.social.instagramGringa} target="_blank" rel="noopener noreferrer">AGRINGA</a>
                </li>
                <li>
                  <a href={site.social.instagramTande} target="_blank" rel="noopener noreferrer">Tande Carlos</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <a href="https://fabrani.com.br" target="_blank" rel="noopener noreferrer">fabrani.com.br</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} NGI University · Núcleo Global de Instrutores.</span>
            <span>
              Certificação com selo MEC em parceria com a{" "}
              <a href="https://fabrani.com.br" target="_blank" rel="noopener noreferrer" className="footer-link">
                {site.certifier.name}, {site.certifier.fullName}
              </a>
              .
            </span>
          </div>
        </div>
      </footer>

      <a
        className="wa-float"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a NGI University no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
