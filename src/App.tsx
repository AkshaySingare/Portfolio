import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState, type ReactNode } from "react";

type SkillCategory = {
  title: string;
  description: string;
  skills: Array<{ name: string; level: number }>;
};

type Project = {
  title: string;
  website: string;
  stack: string[];
  description: string;
  highlights: string[];
  accent: string;
};

type TimelineEntry = {
  role: string;
  company: string;
  duration: string;
  description: string;
  bullets: string[];
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "2+", label: "Live client systems delivered" },
  { value: "5+", label: "Core technologies mastered" },
  { value: "Production", label: "Deployment-ready mindset" },
];

const profileHighlights = [
  "BCA Graduate",
  "Full Stack Developer",
  "Java Developer",
  "Spring Boot Developer",
  "Node.js Developer",
  "Next.js Developer",
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern interface development with strong UI engineering fundamentals.",
    skills: [
      { name: "HTML", level: 96 },
      { name: "CSS", level: 94 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 87 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    description: "Secure API design, authentication, and scalable service architecture.",
    skills: [
      { name: "Java", level: 93 },
      { name: "Spring Boot", level: 95 },
      { name: "Spring Security", level: 92 },
      { name: "Node.js", level: 89 },
      { name: "Express.js", level: 86 },
    ],
  },
  {
    title: "Database & Tools",
    description: "Database management, delivery tooling, and deployment operations.",
    skills: [
      { name: "MySQL", level: 93 },
      { name: "SQL", level: 91 },
      { name: "Git", level: 94 },
      { name: "GitHub", level: 93 },
      { name: "Postman", level: 90 },
      { name: "Linux", level: 84 },
      { name: "Hostinger VPS", level: 89 },
      { name: "SSH", level: 86 },
      { name: "Domain Config", level: 83 },
    ],
  },
];

const timeline: TimelineEntry[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Veagle Space",
    duration: "Production experience",
    description:
      "Built and supported enterprise web applications with a strong focus on reliability, security, and deployment quality.",
    bullets: [
      "Developed REST APIs using Spring Boot for production workflows.",
      "Implemented Spring Security authentication and role-based access patterns.",
      "Worked with MySQL data models and optimized backend integration flows.",
      "Connected Spring Boot services with a Next.js frontend.",
      "Participated in deployment, maintenance, and production support tasks.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Veagle Space Corporate Website",
    website: "https://www.veaglespace.com/",
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "Next.js"],
    description:
      "Developed and maintained a full-stack corporate website with secure backend APIs, authentication, database integrations, and production frontend connectivity.",
    highlights: [
      "Spring Security Authentication",
      "REST API Development",
      "Database Management",
      "Full Stack Development",
      "Production Deployment",
    ],
    accent: "from-cyan-400/20 via-sky-500/10 to-indigo-500/20",
  },
  {
    title: "ValueXpert CA Management Platform",
    website: "http://82.112.237.155:3003/",
    stack: ["Node.js", "Next.js", "MySQL", "JWT Authentication"],
    description:
      "Built a Chartered Accountant management platform supporting lead management, client workflows, multi-database handling, authentication, SEO, and VPS deployment.",
    highlights: [
      "JWT Authentication",
      "Multi Database Management",
      "CRUD Operations",
      "SEO Friendly Architecture",
      "VPS Deployment",
      "Production Database Management",
    ],
    accent: "from-indigo-500/20 via-violet-500/10 to-cyan-500/20",
  },
];

const academicProjects = [
  {
    title: "Food Delivery System",
    meta: "Full Stack Project",
    details: ["Authentication", "Database Management", "Order Processing"],
  },
  {
    title: "Job Portal System",
    meta: "Academic project",
    details: ["Java", "SQL", "HTML", "CSS"],
  },
];

const achievements = [
  "Developed real client projects.",
  "Experience with Spring Boot ecosystem.",
  "Experience with Node.js ecosystem.",
  "Managed production databases.",
  "Worked on VPS deployments.",
  "Built secure authentication systems.",
  "Developed scalable web applications.",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/AkshaySingare" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-singare-2a6364289/" },
  { label: "LeetCode", href: "https://leetcode.com/u/Akshay_Singare/" },
  { label: "X", href: "https://x.com/AkshaySingare26" },
];

const contactItems = [
  {
    label: "Email",
    value: "singareakshay937@gmail.com",
    href: "mailto:singareakshay937@gmail.com",
  },
  {
    label: "Phone",
    value: "7020540649",
    href: "tel:+917020540649",
  },
  {
    label: "GitHub",
    value: "github.com/AkshaySingare",
    href: "https://github.com/AkshaySingare",
  },
  {
    label: "Portfolio",
    value: "akshaysingare.github.io/Portfolio",
    href: "https://akshaysingare.github.io/Portfolio/",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = "Akshay Singare | Full Stack Developer";
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied("Copy failed");
      window.setTimeout(() => setCopied(null), 1600);
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <AnimatePresence>
        {isLoading ? <Loader key="loader" /> : null}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulseSoft" />
        <div className="absolute right-[-5%] top-[12%] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-pulseSoft [animation-delay:1.5s]" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl animate-pulseSoft [animation-delay:2.5s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050816]/75 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-cyan-200 shadow-glow">
              AS
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Akshay Singare</p>
              <p className="text-xs text-slate-400">Full Stack Developer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="glow-button-secondary hidden md:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main id="home" className="relative">
        <Hero />

        <Section id="about" eyebrow="About" title="Built for product teams, client work, and real delivery." description="I’m Akshay Singare, a BCA graduate and Full Stack Developer focused on building reliable web applications with clean architecture, secure authentication, and polished user experiences. My work blends Java, Spring Boot, Node.js, Next.js, MySQL, and VPS deployment so the product is ready beyond the prototype stage.">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {profileHighlights.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl px-5 py-4 text-sm font-medium text-slate-200"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technical depth across frontend, backend, database, and deployment." description="A recruiter-friendly skill profile that shows both breadth and production readiness.">
          <div className="grid gap-5 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <SkillColumn key={category.title} category={category} index={index} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Production work that looks and feels like real software delivery." description="My internship at Veagle Space gave me hands-on exposure to enterprise workflows, secure APIs, and production maintenance.">
          <div className="space-y-6">
            {timeline.map((entry, index) => (
              <TimelineCard key={entry.role} entry={entry} index={index} />
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Real client projects with deployed outcomes." description="These projects are the most convincing proof of capability for recruiters because they show production work, not just demos.">
          <div className="grid gap-6 xl:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {academicProjects.map((project, index) => (
              <AcademicCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </Section>

        <Section id="achievements" eyebrow="Achievements" title="What employers will notice first." description="These points are intentionally written to match the language recruiters and hiring managers care about.">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-cyan-200">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something that feels production-ready from day one." description="Clear contact pathways, direct links, and copy actions make it easy for recruiters or hiring managers to reach out immediately.">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">
                    Akshay Singare
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                    Full Stack Developer focused on secure backend systems and polished interfaces.
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {contactItems.map((item) => (
                    <ContactCard
                      key={item.label}
                      item={item}
                      onCopy={() => copyToClipboard(item.value, item.label)}
                    />
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a href="/Images/AKSHAY-Resume.pdf" className="glow-button-primary" target="_blank" rel="noreferrer">
                    Download Resume
                  </a>
                  <a href="mailto:singareakshay937@gmail.com" className="glow-button-secondary">
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Social Links</p>
              <div className="mt-5 grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/10"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-400">Open</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-50">
                Fast to review, easy to contact, and focused on real work.
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="section-shell flex flex-col gap-3 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Akshay Singare. All rights reserved.</p>
          <p>React • TypeScript • Tailwind CSS • Framer Motion • GitHub Pages</p>
        </div>
      </footer>

      <AnimatePresence>
        {copied ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-white/10 bg-[#0a1020]/90 px-4 py-2 text-sm text-white shadow-glow backdrop-blur-xl"
          >
            {copied} copied
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-14">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="chip w-fit">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Available for full-time roles and freelance projects
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Full Stack Developer building{" "}
            <span className="gradient-text">scalable web applications</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            BCA Graduate and Full Stack Developer experienced in Java Spring Boot, Node.js,
            Next.js, MySQL, and modern web technologies. Passionate about building secure,
            scalable, and user-friendly applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/Images/AKSHAY-Resume.pdf" target="_blank" rel="noreferrer" className="glow-button-primary">
              Download Resume
            </a>
            <a href="#contact" className="glow-button-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profileHighlights.slice(1, 5).map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
                className="glass-card rounded-2xl p-4"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-5 top-10 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-glow backdrop-blur-md lg:block">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Current focus</p>
            <p className="mt-1 text-sm font-medium text-white">Spring Boot + Next.js production systems</p>
          </div>

          <div className="absolute -right-4 bottom-10 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-glow backdrop-blur-md lg:block">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Deployment</p>
            <p className="mt-1 text-sm font-medium text-white">Hostinger VPS, SSH, domains</p>
          </div>

          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_40%)]" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#09111f]/70 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Profile</p>
                  <p className="mt-1 text-lg font-semibold text-white">Akshay Singare</p>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  Open to opportunities
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.95fr]">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%)]" />
                  <img
                    src="/Images/foto.jpeg"
                    alt="Akshay Singare portrait"
                    className="relative h-full min-h-[360px] w-full rounded-[1.35rem] object-cover object-top shadow-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="glass-card rounded-2xl p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Primary stack</p>
                    <p className="mt-2 text-lg font-semibold text-white">Spring Boot, Node.js, Next.js</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Production-minded full stack delivery with authentication, APIs, database design,
                      and deployment responsibility.
                    </p>
                  </motion.div>

                  <div className="grid gap-4">
                    <div className="glass-card rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">What I bring</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Secure APIs", "Responsive UI", "VPS Deployment", "Database Work"].map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card rounded-2xl p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Resume</p>
                      <a
                        href="/Images/AKSHAY-Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex text-sm font-medium text-cyan-200 hover:text-cyan-100"
                      >
                        Download updated resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-8 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="section-subtitle">{description}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function SkillColumn({ category, index }: { category: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card rounded-[1.75rem] p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
        </div>
        <SkillIcon category={category.title} />
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-200">{skill.name}</span>
              <span className="text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: skillIndex * 0.05 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),transparent_42%),linear-gradient(225deg,rgba(99,102,241,0.08),transparent_40%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="chip w-fit">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {entry.duration}
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">{entry.role}</h3>
          <p className="mt-2 text-lg font-medium text-cyan-100">{entry.company}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">{entry.description}</p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-[#09111f]/70 p-5">
          <ul className="space-y-3 text-sm leading-6 text-slate-200">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/25"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <span key={item} className="chip bg-black/20 text-white">
              {item}
            </span>
          ))}
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-200">{project.description}</p>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {project.highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="glow-button-primary"
          >
            Visit Live Site
          </a>
          <span className="text-sm text-slate-200/80">
            Designed for production, deployment, and recruiter confidence.
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function AcademicCard({
  project,
  index,
}: {
  project: { title: string; meta: string; details: string[] };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card rounded-[1.75rem] p-6"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{project.meta}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.details.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ContactCard({
  item,
  onCopy,
}: {
  item: { label: string; value: string; href: string };
  onCopy: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        className="mt-2 block break-all text-sm font-medium text-white transition hover:text-cyan-200"
      >
        {item.value}
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 transition hover:text-cyan-100"
      >
        Copy
      </button>
    </div>
  );
}

function SkillIcon({ category }: { category: string }) {
  const common = "h-12 w-12 rounded-2xl border border-white/10 bg-white/5 p-2.5 text-cyan-200";

  if (category === "Frontend") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 5.5h16v11H4z" />
        <path d="M9 20h6" />
        <path d="M9 16.5h6" />
      </svg>
    );
  }

  if (category === "Backend") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <ellipse cx="12" cy="6" rx="7" ry="3.5" />
        <path d="M5 6v6c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V6" />
        <path d="M5 12v6c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5v-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 7h16M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
      <path d="M10 11v4M14 11v4" />
      <path d="M9 3h6l1 4H8z" />
    </svg>
  );
}

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border border-cyan-400/25" />
          <motion.div
            className="absolute inset-2 rounded-full border border-cyan-300/70 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 1.1 }}
          />
          <motion.div
            className="absolute inset-6 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Loading portfolio</p>
          <p className="mt-2 text-lg font-semibold text-white">Akshay Singare</p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
