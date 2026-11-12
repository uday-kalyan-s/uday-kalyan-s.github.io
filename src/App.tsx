import { useEffect, useState, type ReactNode } from "react";
import pubThumbnail from "../static/images/pub1.png";
import profilePhoto from "../static/images/PFP.jpeg";
import navIcon from "../static/images/icon.png";
// commebt
type IconName =
  | "arrow"
  | "bot"
  | "camera"
  | "code"
  | "cpu"
  | "database"
  | "github"
  | "google"
  | "image"
  | "graph"
  | "linkedin"
  | "mail"
  | "moon"
  | "orbit"
  | "pin"
  | "puzzle"
  | "resume"
  | "sun"
  | "wave";

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
  code: (
    <>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  image: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
    </>
  ),
  puzzle: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 12h18M12 3v18" />
      <path d="M7 7h1M16 16h1" />
    </>
  ),
  wave: (
    <>
      <path d="M2 12h3l3-7 4 14 3-7h7" />
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
  camera: (
    <>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
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
  orbit: (
    <>
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-25 12 12)" />
      <circle cx="20.5" cy="7.5" r="1.2" />
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
  { label: "Résumé", detail: "View PDF", icon: "resume", href: "../static/pdfs/CV.pdf" },
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

type Project = {
  icon: IconName;
  title: string;
  type: string;
  status: "Active" | "Complete" | "Stale";
  year: string;
  description: string;
  stack?: string;
  href?: string;
  linkLabel?: string;
  linkNote?: string;
};

const paperReviews: Project[] = [
  {
    icon: "database",
    title: "Natural Language to SQL Translation",
    type: "DBMS Course Project",
    status: "Complete",
    year: "2026",
    description: "Trained and tested `RAT-SQL` on the Spider text-to-SQL benchmark.",
    href: "https://arxiv.org/abs/1911.04942",
    linkLabel: "View paper",
  },
  {
    icon: "image",
    title: "Wasserstein GAN",
    type: "DL foundations course project",
    status: "Complete",
    year: "2026",
    description:
      "Ported the reference `WassersteinGAN` implementation off deprecated PyTorch APIs and trained it on CIFAR-10, using the critic's Wasserstein estimate as a stable training signal",
    href: "https://github.com/uday-kalyan-s/WassersteinGAN",
  },
  {
    icon: "cpu",
    title: "M+: Extending MemoryLLM",
    type: "Foundations of LLMs course",
    status: "Active",
    year: "2026",
    description: "Reading M+ and preparing a vlog on it for the course.",
    href: "https://arxiv.org/abs/2502.00592",
    linkLabel: "View paper",
  },
  {
    icon: "image",
    title: "Network Dissection",
    type: "Interpretable ML course",
    status: "Active",
    year: "2026",
    description: "Reading Network Dissection, which labels individual units of a CNN with human-interpretable concepts.",
    href: "https://arxiv.org/abs/1704.05796",
    linkLabel: "View paper",
  },
  {
    icon: "bot",
    title: "Convex MPC for the MIT Cheetah",
    type: "Robot Autonomy course",
    status: "Active",
    year: "2026",
    description: "Reading convex model-predictive control for dynamic locomotion on the MIT Cheetah 3.",
    linkNote: "No link yet",
  },
  {
    icon: "graph",
    title: "LIME: Why Should I Trust You?",
    type: "Introduction to ML course",
    status: "Complete",
    year: "2026",
    description: "Reviewed LIME, which explains individual predictions of any classifier with a local interpretable model.",
    href: "https://arxiv.org/abs/1602.04938",
    linkLabel: "View paper",
  },
];

const projects: Project[] = [
  {
    icon: "cpu",
    title: "Chip 8 Emulator",
    type: "Personal",
    status: "Complete",
    year: "2024",
    description: "Emulated 31 instructions of the chip 8 emulator with the screen and timer in Rust",
    stack: "Rust",
    href: "https://github.com/uday-kalyan-s/chip8",
  },
  {
    icon: "graph",
    title: "Multi-Agent Path Finding Optimization",
    type: "Open-Source Contribution",
    status: "Complete",
    year: "2026",
    description: "With the help of a PhD in NUS, implemented PEGASUS algorithm on `open-rmf/mapf`",
    stack: "Python · NumPy",
    href: "https://github.com/open-rmf/mapf/pulls?q=is%3Apr+author%3Auday-kalyan-s",
  },
  {
    icon: "pin",
    title: "Where is my Professor?",
    type: "Open-source Maintainer",
    status: "Active",
    year: "2026",
    description: "Designed responsive layout and current Maintainer for `metakgp/WIMP` helping IIT KGP students",
    stack: "CSS . TypeScript",
    href: "https://github.com/metakgp/wimp",
  },
  {
    icon: "bot",
    title: "Inter IIT Tech Meet '25 - Robotics Mid Prep PS",
    type: "Competition",
    status: "Complete",
    year: "2025",
    description: "Build a real-time warehouse navigation autonomous bot with capacity of scanning racks upto 2m",
    stack: "ROS2",
    href: "https://criticic.github.io/InterIIT-TechMeet-Problem-Statements/InterIIT_Tech_Meet_PDFs/2025_MidPrep_Eternal.pdf",
    linkLabel: "Problem statement",
  },
  {
    icon: "camera",
    title: "Multi-Frame Visual Odometry",
    type: "AGV project",
    status: "Complete",
    year: "2025",
    description:
      "Built a classical monocular VO pipeline from scratch: feature matching across frames, triangulation of 3D landmarks, and 3D-to-2D pose estimation with `PnP` + RANSAC to track the camera trajectory",
    stack: "Python · NumPy · OpenCV",
    linkNote: "Code hidden to prevent task leakage",
  },
  {
    icon: "database",
    title: "SQLite from Scratch",
    type: "CodeCrafters Challenge",
    status: "Complete",
    year: "2026",
    description:
      "Built a barebones SQLite engine in Python that reads the raw database file format directly, decoding page headers, varint-encoded record cells and the schema table to answer `.dbinfo`, `.tables`, `COUNT(*)` and `SELECT ... WHERE` queries",
    stack: "Python",
    href: "https://github.com/uday-kalyan-s/codecrafters-sqlite-python",
  },
  {
    icon: "wave",
    title: "Loss-Resilient Real-Time Transport",
    type: "Test Assignment",
    status: "Complete",
    year: "2026",
    description:
      "Built a UDP sender and receiver with forward error correction behind a pluggable `Encoder` interface. Sliding-window Reed-Solomon over GF(256) with joint Gaussian-elimination decoding recovers back-to-back losses, keeping deadline misses under 0.3% at 100ms delay within a 2x bandwidth cap",
    stack: "C · Python",
    href: "https://github.com/uday-kalyan-s/plivo-systems-24AI10014",
  },
  {
    icon: "puzzle",
    title: "Temple Trap Solver",
    type: "Intro to AI course project",
    status: "Complete",
    year: "2025",
    description:
      "Solves the Temple Trap sliding-tile puzzle with nested `A*`: an outer search over tile moves and an inner search for pawn paths, guided by Manhattan distance to the exit",
    stack: "Python",
    href: "https://github.com/uday-kalyan-s/temple_trap_solver",
  },
  {
    icon: "code",
    title: "Rtreelox",
    type: "Personal",
    status: "Stale",
    year: "2025",
    description:
      "A Rust tree-walk interpreter for Lox from Crafting Interpreters. Only the scanner and recursive-descent parser are done so far; evaluation is not implemented yet",
    stack: "Rust",
    href: "https://github.com/uday-kalyan-s/Rtreelox",
  },
  {
    icon: "orbit",
    title: "Asteroid Hazard Decision Support",
    type: "Personal",
    status: "Complete",
    year: "2026",
    description:
      "Classifies near-Earth asteroids from NASA's NEO dataset as hazardous with an XGBoost pipeline (MICE imputation, class-imbalance weighting, F1-tuned threshold), served through a Streamlit dashboard with SHAP explanations, batch CSV scoring and what-if sensitivity analysis",
    stack: "Python · XGBoost · SHAP · Streamlit",
    href: "https://github.com/uday-kalyan-s/Asteroid-collision-Analytics",
  },
  {
    icon: "image",
    title: "Olivetti Faces Compression",
    type: "Linear Algebra for AIML course project",
    status: "Complete",
    year: "2026",
    description: "Compressed the Olivetti Faces dataset by implementing `NMF`, `SVD`, `PCA` and other dimensionality reduction methods.",
    stack: "Python · NumPy",
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

function linkText(project: Project) {
  if (project.linkLabel) return project.linkLabel.toLowerCase();
  return project.href?.includes("github.com") ? "code" : "link";
}

function ProjectCard({ project }: { project: Project }) {
  const meta = [project.type, project.year, project.stack].filter(Boolean).join(" · ");
  return (
    <article className="project-item">
      <h3>{project.title}</h3>
      <p className="project-meta">
        {meta}
        {project.status !== "Complete" ? ` · ${project.status.toLowerCase()}` : ""}
      </p>
      <p className="project-description">
        {renderDescription(project.description)}{" "}
        {project.href ? (
          <a className="project-link" href={project.href} aria-label={`${linkText(project)}: ${project.title}`}>
            [{linkText(project)}]
          </a>
        ) : project.linkNote ? (
          <span className="project-link-note">({project.linkNote})</span>
        ) : null}
      </p>
    </article>
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

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, [isLight]);

  useEffect(() => {
    const sectionIds = ["home", "publications", "projects", "paper-reviews"];
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

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav aria-label="Primary navigation" className="nav">
          <a className="wordmark" href="#home" aria-label="Uday Kalyan S, home">
            <img className="wordmark-icon" src={navIcon} alt="" />
          </a>
          <div className="nav-actions">
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
            <a
              className={activeSection === "paper-reviews" ? "nav-link active" : "nav-link"}
              href="#paper-reviews"
              aria-current={activeSection === "paper-reviews" ? "page" : undefined}
            >
              Paper reviews
            </a>
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
              </div>
            </div>

            <div className="hero-copy">
              <h1>Uday Kalyan S</h1>
              <ul className="designation-list">
                <li>B.Tech (pre-final year) in AI, <strong>IIT Kharagpur</strong></li>
                <li>Incoming SWE Intern, <strong>Stripe</strong></li>
                <li>Planning &amp; Controls Head, <strong>AGV Research Group</strong></li>
                <li>Executive Head, <strong>Kharagpur Open Source Society</strong></li>
              </ul>
              <p className="social-row">
                {socials.map((social, index) => (
                  <span key={social.label}>
                    {index > 0 ? <span className="social-sep" aria-hidden="true"> · </span> : null}
                    <a href={social.href} title={social.detail}>
                      {social.label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>

          <p className="about">
            I’m a student at IIT Kharagpur. I like working in robotics, deep learning, software
            development, and anything and everything you can think of.
          </p>
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
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </section>

        <section className="page-section projects-section" id="paper-reviews">
          <SectionHeading title="Paper reviews" />
          <p className="section-description">
            Paper readings done for course projects.
          </p>
          <div className="project-grid">
            {paperReviews.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>
          Designed with{" "}
          <a href="https://www.nordtheme.com/" target="_blank" rel="noreferrer">
            Nord theme
          </a>
        </p>
        <span>© 2026 Uday Kalyan S</span>
      </footer>
    </div>
  );
}
