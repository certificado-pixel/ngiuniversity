import type { Course } from "@/config/site";
import { whatsappLink } from "@/config/site";
import { CheckIcon, InstagramIcon, PlusIcon, WhatsAppIcon } from "./icons";
import CourseSeal from "./CourseSeal";

export default function CourseSection({ course }: { course: Course }) {
  const dark = course.theme === "elite";

  return (
    <section id={course.id} className={`section course course-${course.theme} ${dark ? "dark" : ""}`}>
      <div className="container course-grid">
        <div className="course-info reveal">
          <div className="course-head">
            <CourseSeal course={course} className="course-seal" />
            <div>
              <span className="eyebrow">{course.level} · Plano de Carreira NGI</span>
              <h2 className="h2">{course.name}</h2>
            </div>
          </div>

          <p className="course-tagline">{course.tagline}</p>
          <p className="lead">{course.summary}</p>

          <dl className="facts">
            {course.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="audience">
            <strong>Para quem é</strong>
            <p>{course.audience}</p>
          </div>

          <a className="btn btn-primary" href={whatsappLink(course.message)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            {course.cta}
          </a>
        </div>

        <div className="course-content">
          <div className="reveal">
            <h3 className="block-title">O que você vai desenvolver</h3>
            <ul className="outcomes">
              {course.outcomes.map((o) => (
                <li key={o}>
                  <CheckIcon />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {course.guests?.map((g) => (
            <div className="guest reveal" key={g.name}>
              <div className="guest-photo" aria-hidden="true">
                {g.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div>
                <span className="guest-origin">{g.origin}</span>
                <strong>{g.name}</strong>
                <p>{g.text}</p>
                {g.instagram && (
                  <a href={g.instagram} target="_blank" rel="noopener noreferrer" className="guest-ig">
                    <InstagramIcon /> Instagram
                  </a>
                )}
              </div>
            </div>
          ))}

          {course.highlight && (
            <div className="highlight reveal">
              <strong>{course.highlight.title}</strong>
              <p>{course.highlight.text}</p>
            </div>
          )}

          {course.modules && (
          <div className="reveal">
            <h3 className="block-title">Grade curricular · {course.modules.length} módulos</h3>
            <div className="modules">
              {course.modules.map((m, i) => (
                <details className="module" key={m.title} open={i === 0}>
                  <summary>
                    <span className="module-n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="module-title">{m.title}</span>
                    <span className="plus">
                      <PlusIcon />
                    </span>
                  </summary>
                  <ul>
                    {m.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
