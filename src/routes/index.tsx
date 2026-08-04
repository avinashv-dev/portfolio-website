import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Play,
  Instagram,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";

import photoStreet from "../assets/MG_0812_1.jpg.asset.json";
import photoSky from "../assets/20231105_122903.jpg.asset.json";
import photoMono from "../assets/20240619_172907.jpg.asset.json";
import photoBw from "../assets/20240710_155724.jpg.asset.json";
import photoCloseUp from "../assets/Avinash_1.jpg.asset.json";
import photoFull from "../assets/Avinash_2.jpg.asset.json";
import photoMundu from "../assets/Avinash_3.jpg.asset.json";
import photoSmile from "../assets/IMG_1946.jpg.asset.json";
import photoBag from "../assets/Screenshot_2026-06-13_070043.png.asset.json";
import photoIntense from "../assets/Screenshot_2026-06-22_225425.png.asset.json";

const INSTAGRAM_URL = "https://www.instagram.com/actor.avinaash_vijayan";

const photos = [
  { src: photoStreet.url, alt: "Avinash Vijayan on location — street portrait" },
  { src: photoMundu.url, alt: "Avinash Vijayan in a traditional mundu look" },
  { src: photoIntense.url, alt: "Close-up character study of Avinash Vijayan" },
  { src: photoBw.url, alt: "Black and white headshot of Avinash Vijayan" },
  { src: photoSmile.url, alt: "Smiling headshot of Avinash Vijayan" },
  { src: photoFull.url, alt: "Full-length outdoor shot of Avinash Vijayan" },
  { src: photoSky.url, alt: "Low angle outdoor portrait of Avinash Vijayan" },
  { src: photoBag.url, alt: "Character look — Avinash Vijayan with glasses" },
];

const videos = [
  { id: "1215364108", label: "Torc — Advertisement", featured: true },
  { id: "1215142541", label: "Showreel Clip 01" },
  { id: "1215143652", label: "Showreel Clip 02" },
  { id: "1215143766", label: "Showreel Clip 03" },
  { id: "1215143829", label: "Showreel Clip 04" },
  { id: "1215143879", label: "Showreel Clip 05" },
  { id: "1215144497", label: "Showreel Clip 06" },
  { id: "1215145427", label: "Showreel Clip 07" },
  { id: "1215145570", label: "Showreel Clip 08" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Avinash Vijayan | Actor — Film, Web Series & Brand Work" },
      {
        name: "description",
        content:
          "Official portfolio of Avinash Vijayan — actor and story-driven performer from Ernakulam, Kerala. Showreel, credits, headshots and casting contact.",
      },
      { property: "og:title", content: "Avinash Vijayan | Actor Portfolio" },
      {
        property: "og:description",
        content:
          "Showreel, credits and headshots of Avinash Vijayan — actor based in Ernakulam, Kerala. Available for films, web series and commercials.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: photoCloseUp.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: photoCloseUp.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Avinash Vijayan",
          jobTitle: "Actor",
          image: photoCloseUp.url,
          email: "mailto:av.8129620272@gmail.com",
          telephone: "+91-8129620272",
          sameAs: [INSTAGRAM_URL],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ernakulam",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          knowsLanguage: ["Malayalam", "Tamil", "Hindi", "English"],
        }),
      },
    ],
  }),
});

const navLinks = [
  { label: "Reel", href: "#reel" },
  { label: "Profile", href: "#profile" },
  { label: "Credits", href: "#credits" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

type Credit = { title: string; detail: string; year?: string };

const creditGroups: { heading: string; items: Credit[] }[] = [
  {
    heading: "Web Series",
    items: [
      { title: "Amazon Micro Series", detail: "Amazon" },
      { title: "1000 Babies", detail: "Disney+ Hotstar" },
      { title: "Blindfold", detail: "SonyLIV · Upcoming" },
      { title: "Padavett", detail: "Upcoming" },
    ],
  },
  {
    heading: "Films",
    items: [
      { title: "Barabas", detail: "Feature · Upcoming" },
      { title: "Izha", detail: "Feature" },
      { title: "The Waiting List", detail: "Feature" },
    ],
  },
  {
    heading: "Short Films",
    items: [
      { title: "Antharaalam", detail: "Upcoming" },
      { title: "Kottikalaasham", detail: "Upcoming" },
      { title: "Padayani", detail: "Short Film" },
      { title: "Father", detail: "Short Film" },
      { title: "The Human Expiry", detail: "Short Film" },
      { title: "Liberation", detail: "Short Film" },
    ],
  },
  {
    heading: "Brand & Digital",
    items: [
      { title: "Torc", detail: "Advertisement" },
      { title: "Jos Alukkas", detail: "Advertisement" },
      { title: "Nambisan Ghee", detail: "Advertisement" },
      { title: "Surya Comedy Sitcom", detail: "Television" },
      { title: "RU-Vlog", detail: "YouTube Channel" },
      { title: "Ponmutta", detail: "YouTube Channel" },
    ],
  },
];

const skills = [
  { label: "Acting", detail: "Film & digital, story-driven performance" },
  { label: "Dance", detail: "Performative movement & choreography" },
  { label: "Shaolin Kung Fu", detail: "Trained martial artist — action ready" },
  { label: "Languages", detail: "Malayalam · Tamil · Hindi · English" },
];

const training = [
  { title: "Sajeev Raman’s Actlab", detail: "Method & scene study" },
  { title: "Tharun Moorthy’s PUPA", detail: "Camera performance" },
  { title: "Abu Valayamkulam’s Workshop", detail: "Acting intensive" },
];

const stats = [
  { value: "20+", label: "Screen Credits" },
  { value: "6+", label: "Short Films" },
  { value: "3", label: "Brand Films" },
  { value: "4", label: "Languages" },
];

const marqueeItems = [
  "Disney+ Hotstar",
  "SonyLIV",
  "Amazon",
  "Jos Alukkas",
  "Nambisan Ghee",
  "Torc",
  "Malayalam Cinema",
];

function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function VideoCard({
  video,
  featured = false,
}: {
  video: { id: string; label: string };
  featured?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="group">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-ink/60">
        {playing ? (
          <iframe
            src={`https://player.vimeo.com/video/${video.id}?autoplay=1&title=0&byline=0&portrait=0`}
            title={video.label}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Play ${video.label}`}
          >
            <img
              src={`https://vumbnail.com/${video.id}.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/10" />
            <span
              className={`absolute left-1/2 top-1/2 flex ${
                featured ? "h-20 w-20" : "h-14 w-14"
              } -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110`}
            >
              <Play size={featured ? 26 : 18} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-ink-foreground/85">{video.label}</span>
        <span className="label-caps text-ink-foreground/40">Vimeo</span>
      </figcaption>
    </figure>
  );
}

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, lightboxIndex]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setLightboxIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, step]);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-xl tracking-tight sm:text-2xl">
            Avinash Vijayan
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`label-caps transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-foreground transition-colors hover:bg-primary"
            >
              Casting
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink text-ink-foreground transition-all duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-dvh flex-col justify-center gap-1 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-baseline gap-4 border-b border-ink-foreground/15 py-4 font-display text-4xl"
            >
              <span className="label-caps text-primary">0{i + 1}</span>
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3 text-sm"
            >
              <Instagram size={16} /> @actor.avinaash_vijayan
            </a>
            <a
              href="tel:+918129620272"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3 text-sm"
            >
              <Phone size={16} /> +91 8129620272
            </a>
            <a
              href="mailto:av.8129620272@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Mail size={16} /> Email me
            </a>
          </div>
        </nav>
      </div>

      <main id="top">
        {/* Hero — editorial split */}
        <section className="paper-grain relative overflow-hidden pb-14 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
              <div className="reveal">
                <span className="label-caps text-primary">Ernakulam, Kerala · India</span>
                <h1 className="mt-5 font-display text-[clamp(3rem,12vw,8.5rem)] leading-[0.86] tracking-tight">
                  Avinash
                  <br />
                  <span className="italic text-primary">Vijayan</span>
                </h1>
                <div className="rule-x mt-8 w-full max-w-sm" />
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Actor and story-driven performer working across feature films, streaming
                  series and brand films — grounded performances, physical craft, four
                  languages.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#reel"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Play size={14} fill="currentColor" /> Watch the Reel
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                  >
                    <Instagram size={14} /> Instagram
                  </a>
                </div>
              </div>

              <div className="reveal relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={photoCloseUp.url}
                    alt="Portrait of actor Avinash Vijayan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-4 hidden w-40 overflow-hidden rounded-sm border-4 border-background sm:block lg:-left-10 lg:w-48">
                  <img
                    src={photoBw.url}
                    alt="Black and white headshot of Avinash Vijayan"
                    className="aspect-[3/4] h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-4 py-6 text-center sm:py-8">
                  <dt className="font-display text-4xl text-primary sm:text-5xl">{s.value}</dt>
                  <dd className="label-caps mt-2 text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#reel"
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowDown size={15} /> Scroll to explore
            </a>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-secondary py-4">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="label-caps flex items-center gap-10 text-muted-foreground">
                {item}
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>

        {/* Reel — dark section */}
        <section id="reel" className="bg-ink py-20 text-ink-foreground sm:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="label-caps text-primary">01 — Showreel</span>
                <h2 className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95]">
                  Watch the <span className="italic text-primary">work</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-ink-foreground/60">
                Selected scenes, commercials and character clips. Tap any frame to play.
              </p>
            </div>

            <div className="reveal mt-12">
              <VideoCard video={videos[0]!} featured />
            </div>

            <div className="reveal mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.slice(1).map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        </section>

        {/* Profile */}
        <section id="profile" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="reveal">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={photoMono.url}
                  alt="Avinash Vijayan looking over his shoulder in a forest"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>

            <div className="reveal">
              <span className="label-caps text-primary">02 — Profile</span>
              <h2 className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95]">
                A performer built on <span className="italic text-primary">craft</span>
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Based in Ernakulam, Kerala, Avinash Vijayan brings a story-first instinct to
                every role — from streaming drama on Disney+ Hotstar and SonyLIV to
                independent shorts and national brand films. Trained across leading Kerala
                acting labs and disciplined in Shaolin Kung Fu, he moves comfortably between
                grounded realism and physically demanding action.
              </p>

              <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {skills.map((s) => (
                  <div key={s.label} className="bg-background p-6">
                    <h3 className="font-display text-2xl">{s.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
                  </div>
                ))}
              </div>

              <h3 className="label-caps mt-12 text-muted-foreground">Training</h3>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {training.map((t) => (
                  <li key={t.title} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-display text-xl sm:text-2xl">{t.title}</span>
                    <span className="text-right text-xs uppercase tracking-widest text-muted-foreground">
                      {t.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Credits */}
        <section id="credits" className="border-t border-border bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal">
              <span className="label-caps text-primary">03 — Credits</span>
              <h2 className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95]">
                Selected <span className="italic text-primary">filmography</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
              {creditGroups.map((group) => (
                <div key={group.heading} className="reveal">
                  <h3 className="label-caps border-b border-ink/20 pb-3 text-ink">
                    {group.heading}
                  </h3>
                  <ul className="divide-y divide-border">
                    {group.items.map((item, i) => (
                      <li
                        key={item.title}
                        className="group flex items-baseline gap-4 py-4 transition-colors hover:text-primary"
                      >
                        <span className="w-6 shrink-0 text-xs tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-2xl leading-tight sm:text-3xl">
                          {item.title}
                        </span>
                        <span className="ml-auto shrink-0 text-right text-[11px] uppercase tracking-widest text-muted-foreground">
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-20 sm:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="label-caps text-primary">04 — Gallery</span>
                <h2 className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95]">
                  Looks & <span className="italic text-primary">headshots</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Click any image to view full frame.
              </p>
            </div>

            <div className="reveal mt-12 columns-2 gap-4 sm:gap-5 lg:columns-3 xl:columns-4">
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="lift mb-4 block w-full overflow-hidden rounded-sm sm:mb-5"
                  aria-label={`Open image: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-ink py-20 text-ink-foreground sm:py-28">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <span className="label-caps text-primary">05 — Contact</span>
                <h2 className="mt-3 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9]">
                  Let’s create <span className="italic text-primary">together</span>
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-ink-foreground/65">
                  Available for feature films, web series, commercials and short films.
                  Auditions on request — self-tapes delivered within 24 hours.
                </p>
              </div>

              <ul className="divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 8129620272",
                    href: "tel:+918129620272",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "av.8129620272@gmail.com",
                    href: "mailto:av.8129620272@gmail.com",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    value: "@actor.avinaash_vijayan",
                    href: INSTAGRAM_URL,
                  },
                  {
                    icon: MapPin,
                    label: "Based in",
                    value: "Ernakulam, Kerala",
                    href: undefined,
                  },
                ].map((row) => {
                  const Icon = row.icon;
                  const inner = (
                    <>
                      <Icon size={18} className="text-primary" />
                      <span className="label-caps w-24 shrink-0 text-ink-foreground/45">
                        {row.label}
                      </span>
                      <span className="break-all text-base sm:text-lg">{row.value}</span>
                      {row.href ? (
                        <ArrowUpRight
                          size={18}
                          className="ml-auto shrink-0 text-ink-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                        />
                      ) : null}
                    </>
                  );
                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel={row.href.startsWith("http") ? "noreferrer noopener" : undefined}
                          className="group flex items-center gap-4 py-5"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 py-5">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-10 text-ink-foreground/50">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-ink-foreground/15 px-5 pt-8 text-xs sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Avinash Vijayan · Actor</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Instagram size={14} /> @actor.avinaash_vijayan
          </a>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/25 text-ink-foreground"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/25 text-ink-foreground sm:left-6"
          >
            <ChevronLeft size={20} />
          </button>
          <img
            src={photos[lightboxIndex]!.src}
            alt={photos[lightboxIndex]!.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85dvh] max-w-full rounded-sm object-contain"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-foreground/25 text-ink-foreground sm:right-6"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
