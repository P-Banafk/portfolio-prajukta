import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Sparkles,
  ArrowUpRight,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Prajukta Banerjee — CSE Undergraduate & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Prajukta Banerjee, a Computer Science undergraduate building data-driven, cloud-powered, and user-friendly software.",
      },
      { property: "og:title", content: "Prajukta Banerjee — Portfolio" },
      {
        property: "og:description",
        content:
          "CSE undergraduate working across software development, data analytics, and cloud-based AI systems.",
      },
    ],
  }),
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundFx />

      <main className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Footer />
      </main>
    </div>
  );
}

function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-accent-soft blur-3xl opacity-70" />
      <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-soft-2 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-accent-soft-3 blur-3xl opacity-50" />
    </div>
  );
}

function Hero() {
  return (
    <header className="flex flex-col gap-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Open to internships & collaborations
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Prajukta
          <br />
          <span className="italic font-serif text-muted-foreground">Banerjee.</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          CSE undergraduate building practical software at the intersection of{" "}
          <span className="text-foreground">data</span>,{" "}
          <span className="text-foreground">cloud</span>, and{" "}
          <span className="text-foreground">human-friendly interfaces</span>.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <ContactPill icon={<Mail className="h-3.5 w-3.5" />} label="praj.ban05@gmail.com" href="mailto:praj.ban05@gmail.com" />
        <ContactPill icon={<Phone className="h-3.5 w-3.5" />} label="+91 89101 71067" href="tel:+918910171067" />
        <ContactPill icon={<Linkedin className="h-3.5 w-3.5" />} label="LinkedIn" href="#" />
        <ContactPill icon={<MapPin className="h-3.5 w-3.5" />} label="Kolkata, India" />
      </div>
    </header>
  );
}

function ContactPill({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const className =
    "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 shadow-soft transition hover:bg-accent hover:text-foreground hover:-translate-y-0.5";
  if (href) {
    return (
      <a href={href} className={className}>
        {icon}
        {label}
      </a>
    );
  }
  return (
    <span className={className}>
      {icon}
      {label}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-24 scroll-mt-24">
      <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A quick introduction">
      <div className="grid gap-8 md:grid-cols-5">
        <p className="md:col-span-3 text-lg leading-relaxed text-foreground/80">
          I'm a curious and detail-oriented Computer Science undergraduate who enjoys turning messy
          data into intuitive products. My work spans backend systems, data-driven workflows, and
          cloud-based AI — and I love the moment when a complex pipeline becomes a clean, usable
          interface.
        </p>
        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          <Stat value="9.27" label="CGPA / 10" />
          <Stat value="2027" label="Graduation" />
          <Stat value="2+" label="AI projects shipped" />
          <Stat value="∞" label="Cups of chai" />
        </div>
      </div>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've worked">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
            <p className="text-muted-foreground">
              Viki.AI · Kolkata, IN
            </p>
          </div>
          <span className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
            May 2025 – July 2025
          </span>
        </div>
        <ul className="mt-6 space-y-3 text-foreground/80">
          <Bullet>
            Set up performance monitoring, optimized databases, and built interactive Power BI
            dashboards.
          </Bullet>
          <Bullet>
            Built an agentic AI system on AWS using Amazon Bedrock (RAG) — knowledge base creation,
            orchestration workflows, Lambda functions, and S3 buckets.
          </Bullet>
          <Bullet>
            Contributed to the frontend of TripMate, building a support page and assisting with SSO
            integration to improve login reliability.
          </Bullet>
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {["AWS Bedrock", "RAG", "Lambda", "S3", "Power BI", "React", "SSO"].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
      <span>{children}</span>
    </li>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/70">
      {children}
    </span>
  );
}

function Projects() {
  const projects = [
    {
      title: "Single-View Case Analyzer",
      subtitle: "RAG-based Legal AI System",
      description:
        "AI-powered legal tool that analyzes and compares opposing case documents. Uses ChromaDB vector search and Groq-hosted LLaMA 3.1 to generate structured judicial briefs with relevant precedents.",
      tags: ["FastAPI", "React", "ChromaDB", "LLaMA 3.1", "RAG"],
    },
    {
      title: "Text Summarization System",
      subtitle: "Extractive + Abstractive NLP",
      description:
        "End-to-end pipeline implementing both TextRank (extractive) and a fine-tuned T5 (abstractive) summarizer. Evaluated against baselines using ROUGE on large news datasets.",
      tags: ["Python", "NLP", "T5", "TextRank", "ROUGE"],
    },
  ];
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="flex items-start justify-between">
              <Sparkles className="h-5 w-5 text-foreground/60" />
              <ArrowUpRight className="h-5 w-5 text-foreground/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    { icon: <Code2 className="h-4 w-4" />, title: "Languages", items: ["C", "Java", "Python", "SQL"] },
    { title: "Web", items: ["React.js", "Node.js", "HTML", "CSS"] },
    {
      title: "Cloud & DevOps",
      items: ["AWS Lambda", "AWS Bedrock", "Amazon S3", "Azure (in progress)"],
    },
    { title: "Databases", items: ["MySQL", "MongoDB", "SQL Server (SSMS)"] },
    { title: "Data & Viz", items: ["Power BI", "Excel", "SQL"] },
    { title: "Tools", items: ["Git", "IntelliJ", "VS Code", "PyCharm", "Figma"] },
    { title: "Libraries", items: ["OpenCV", "Tesseract"] },
  ];
  return (
    <Section id="skills" eyebrow="04 — Skills" title="Tools of the trade">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-medium">
              {g.icon}
              {g.title}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    {
      school: "Kalinga Institute of Industrial Technology",
      degree: "B.Tech in Computer Science Engineering",
      meta: "CGPA 9.27 / 10",
      years: "2023 — 2027",
    },
    {
      school: "Our Lady Queen of The Missions School",
      degree: "ISC (Class XII)",
      meta: "91.75%",
      years: "2022 — 2023",
    },
    {
      school: "Our Lady Queen of The Missions School",
      degree: "ICSE (Class X)",
      meta: "92.60%",
      years: "2020 — 2021",
    },
  ];
  return (
    <Section id="education" eyebrow="05 — Education" title="Academic journey">
      <div className="space-y-3">
        {items.map((it) => (
          <div
            key={it.years}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:bg-accent/40"
          >
            <div className="flex items-start gap-4">
              <GraduationCap className="mt-1 h-5 w-5 text-foreground/60" />
              <div>
                <h3 className="font-medium">{it.school}</h3>
                <p className="text-sm text-muted-foreground">{it.degree}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{it.meta}</div>
              <div className="text-xs text-muted-foreground">{it.years}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="more" eyebrow="06 — More" title="Certifications & beyond">
      <div className="grid gap-4 md:grid-cols-2">
        <Card icon={<Award className="h-4 w-4" />} title="Certifications">
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• Database Management Systems (DBMS) — NPTEL · Apr 2025</li>
            <li>• Microsoft Azure Fundamentals (AZ-900) — In Progress</li>
          </ul>
        </Card>
        <Card icon={<Briefcase className="h-4 w-4" />} title="Extra-curriculars">
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>• NSS Volunteer</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-2 text-sm font-medium">
        {icon}
        {title}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-24 flex flex-col items-center gap-3 border-t border-border pt-10 text-center text-sm text-muted-foreground">
      <p className="flex items-center gap-1.5">
        Designed & built with <Heart className="h-3.5 w-3.5 fill-foreground/70 text-foreground/70" /> by Prajukta
      </p>
      <a
        href="mailto:praj.ban05@gmail.com"
        className="text-foreground underline-offset-4 hover:underline"
      >
        Let's build something together →
      </a>
    </footer>
  );
}
