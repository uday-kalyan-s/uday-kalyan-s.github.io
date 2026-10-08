import { useEffect, useRef, useState, type ReactNode } from "react";
import pubThumbnail from "../static/images/pub1.png";
import profilePhoto from "../static/images/PFP.jpeg";

type IconName =
  | "arrow"
  | "bot"
  | "cpu"
  | "github"
  | "google"
  | "graph"
  | "linkedin"
  | "mail"
  | "moon"
  | "pin"
  | "resume"
  | "sun";

type IconProps = {
  name: IconName;
  size?: number;
};

const iconPaths: Record<IconName, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  github: (
    <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.6 3.6-.4 7.4-1.77 7.4-8a6.24 6.24 0 0 0-1.67-4.34A5.8 5.8 0 0 0 19.47.02S18.15-.4 15 1.67a15.4 15.4 0 0 0-8 0C3.85-.4 2.53.02 2.53.02a5.8 5.8 0 0 0-1.16 3.14A6.24 6.24 0 0 0-.3 7.5c0 6.22 3.8 7.6 7.4 8-.74.63-1.13 1.58-1.1 2.58V22m0-3c-3 .92-3-1.5-4.2-2" />
  ),
  google: (
    <>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
      <path d="M8.5 14.5c.8 1 2 1.5 3.5 1.5 2.8 0 4.5-1.8 4.5-4h-4" />
      <path d="M8.5 9.5A4.5 4.5 0 0 1 12 8c1.1 0 2 .3 2.8.9" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
    </>
  ),
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  graph: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="8" r="2.2" />
      <path d="M6 8.2v7.6M18 10.2c0 4-6 3-9.5 5.5" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 8V4M8 4h8" />
      <path d="M9 13h.01M15 13h.01" />
      <path d="M9.5 16.5h5" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
  resume: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M8 13h8M8 17h6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </>
  ),
};

function Icon({ name, size = 18 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {iconPaths[name]}
      </g>
    </svg>
  );
}

const socials: { label: string; detail: string; icon: IconName; href: string }[] = [
  { label: "Gmail", detail: "udaykalyansreenivasa@gmail.com", icon: "mail", href: "mailto:udaykalyansreenivasa@gmail.com" },
  { label: "IIT KGP Mail", detail: "udaykalyan.24@kgpian.iitkgp.ac.in", icon: "mail", href: "mailto:udaykalyan.24@kgpian.iitkgp.ac.in" },
  { label: "GitHub", detail: "@uday-kalyan-s", icon: "github", href: "https://github.com/uday-kalyan-s" },
  { label: "Scholar", detail: "Publications", icon: "google", href: "https://scholar.google.com/citations?user=CNqSZP0AAAAJ&hl=en" },
  { label: "LinkedIn", detail: "Connect", icon: "linkedin", href: "https://www.linkedin.com/in/uday-kalyan-sreenivasa-196550203" },
  { label: "Résumé", detail: "View PDF", icon: "resume", href: "#" },
];

const publications = [
  {
    image: pubThumbnail,
    imageAlt: "Shielding-based diffusion planner caching figure",
    title: "Kill the Rollouts: Online Caching Optimization for Shielding-Based Diffusion Planners",
    authors: "Uday Kalyan S, Varuni Buereddy, Ravi Prakash",
    year: "2026",
    venue: "AIM Ctrl Workshop · IROS",
    lab: "HIRo Lab · IISc",
    description:
      "cache safety certificates for grid cells of the state space so that shielding based diffusion planners can skip redundant backup rollouts, cutting planning time by up to 2x with zero safety violations.",
  },
];

const projects: {
  icon: IconName;
  title: string;
  type: string;
  status: "Active" | "Complete";
  year: string;
  description: string;
  stack: string;
}[] = [
  {
    icon: "cpu",
    title: "Chip 8 Emulator",
    type: "Personal",
    status: "Complete",
    year: "2024",
    description: "Emulated 31 instructions of the chip 8 emulator with the screen and timer in Rust",
    stack: "Rust",
  },
  {
    icon: "graph",
    title: "Multi-Agent Path Finding Optimization",
    type: "Open-Source Contribution",
    status: "Complete",
    year: "2026",
    description: "With the help of a PhD in NUS, implemented PEGASUS algorithm on `open-rmf/mapf`",
    stack: "Python · NumPy",
  },
  {
    icon: "pin",
    title: "Where is my Professor?",
    type: "Open-source Maintainer",
    status: "Active",
    year: "2026",
    description: "Designed responsive layout and current Maintainer for `metakgp/WIMP` helping IIT KGP students",
    stack: "CSS . TypeScript",
  },
  {
    icon: "bot",
    title: "Inter IIT Tech Meet '25 - Robotics Mid Prep PS",
    type: "Competition",
    status: "Complete",
    year: "2025",
    description: "Build a real-time warehouse navigation autonomous bot with capacity of scanning racks upto 2m",
    stack: "ROS2",
  },
];

function renderDescription(description: string) {
  const parts = description.split("`");
  return parts.map((part, index) =>
    index % 2 === 1 ? <code key={index}>{part}</code> : <span key={index}>{part}</span>,
  );
}

function ThemeButton({
  isLight,
  onClick,
}: {
  isLight: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      className="theme-button"
      onClick={onClick}
      type="button"
    >
      <span className="theme-icon">
        <Icon name={isLight ? "moon" : "sun"} size={19} />
      </span>
    </button>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className={eyebrow ? "section-heading" : "section-heading no-eyebrow"}>
      {eyebrow ? <span className="section-number">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <span className="heading-line" />
    </div>
  );
}

export default function App() {
  const [isLight, setIsLight] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navActionsRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, top: 0, width: 0 });

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, [isLight]);

  useEffect(() => {
    const sectionIds = ["home", "publications", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const container = navActionsRef.current;
      if (!container) return;
      const active = container.querySelector<HTMLElement>(".nav-link.active");
      if (!active || active.offsetWidth === 0) {
        setIndicator((previous) => ({ ...previous, width: 0 }));
        return;
      }
      setIndicator({
        left: active.offsetLeft,
        top: active.offsetTop + active.offsetHeight + 6,
        width: active.offsetWidth,
      });
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav aria-label="Primary navigation" className="nav">
          <a className="wordmark" href="#home" aria-label="Uday Kalyan S, home"> 
            UKS<span className="wordmark-dot">.</span>
          </a>
          <div className="nav-actions" ref={navActionsRef}>
            <a
              className={activeSection === "home" ? "nav-link active" : "nav-link"}
              href="#home"
              aria-current={activeSection === "home" ? "page" : undefined}
            >
              Home
            </a>
            <a
              className={activeSection === "publications" ? "nav-link active" : "nav-link"}
              href="#publications"
              aria-current={activeSection === "publications" ? "page" : undefined}
            >
              Publications
            </a>
            <a
              className={activeSection === "projects" ? "nav-link active" : "nav-link"}
              href="#projects"
              aria-current={activeSection === "projects" ? "page" : undefined}
            >
              Projects
            </a>
            <span
              className="nav-indicator"
              aria-hidden="true"
              style={{
                opacity: indicator.width === 0 ? 0 : 1,
                transform: `translateX(${indicator.left}px)`,
                top: indicator.top,
                width: indicator.width,
              }}
            />
            <ThemeButton isLight={isLight} onClick={() => setIsLight((value) => !value)} />
          </div>
        </nav>
      </header>

      <main>
        <section className="hero page-section" id="home">
          <div className="hero-grid">
            <div className="portrait-wrap" aria-label="Profile picture of Uday Kalyan S">
              <div className="portrait">
                <img
                  className="portrait-photo"
                  src={profilePhoto}
                  alt="Portrait of Uday Kalyan S"
                />
                <div className="portrait-grid" />
              </div>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">Hello, I’m</p>
              <h1>Uday Kalyan S<span>.</span></h1>
              <ul className="designation-list">
                <li>B.Tech Pre-Final Year in AI @ <strong>IIT Kharagpur</strong></li>
                <li>Incoming SWE Intern @ <strong>Stripe</strong></li>
                <li>Planning and Controls Head @ <strong>Autonomous Ground Vehicle Research Group</strong></li>
                <li>Executive Head @ <strong>Kharagpur Open Source Society</strong></li>
              </ul>

              <div className="about">
                <p className="about-label">About me</p>
                <p>
                  I’m a student at <strong>IIT Kharagpur</strong>. I like working in <strong>Robotics</strong>, <strong>Deep Learning</strong>, <strong>Software development</strong> and anything and everything you can think of
                </p>
              </div>

              <div className="social-grid">
                {socials.map((social) => (
                  <a className="social-link" href={social.href} key={social.label}>
                    <span className="social-icon"><Icon name={social.icon} /></span>
                    <span>
                      <strong>{social.label}</strong>
                      <small>{social.detail}</small>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="publications">
          <SectionHeading title="Selected publications" />
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication-card" key={publication.title}>
                <div className="paper-thumb">
                  <img src={publication.image} alt={publication.imageAlt} loading="lazy" />
                </div>
                <div className="publication-copy">
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <p className="abstract">{publication.description}</p>
                </div>
                <div className="publication-meta">
                  <strong>{publication.year}</strong>
                  <span className="venue">{publication.venue}</span>
                  <span className="lab">{publication.lab}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section projects-section" id="projects">
          <SectionHeading title="Projects" />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <div className="project-mark">
                    <Icon name={project.icon} size={20} />
                  </div>
                  <div className="project-status">
                    <span className={project.status === "Active" ? "status-pill active" : "status-pill complete"}>
                      <i className="status-dot" />
                      {project.status}
                    </span>
                    <time>{project.year}</time>
                  </div>
                </div>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-type">{project.type}</span>
                </div>
                <p className="project-description">{renderDescription(project.description)}</p>
                <div className="project-footer">
                  <span>{project.stack}</span>
                  <a href="https://github.com/" aria-label={`View ${project.title} project`}>
                    View project <Icon name="arrow" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Designed with the help of Figma AI.</p>
        <span>© 2026 Uday Kalyan S</span>
      </footer>
    </div>
  );
}
