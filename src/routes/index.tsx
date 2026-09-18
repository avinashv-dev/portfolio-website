import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useMemo } from "react";
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
} from "lucide-react";

import photoStreet from "../assets/_MG_0812 (1).webp";
import photoSky from "../assets/actor-cover pic.webp";
import photoMono from "../assets/20240619_172907.webp";
import photoBw from "../assets/Barabas.webp";
import photoCloseUp from "../assets/Avinash 1.webp";
import photoFull from "../assets/IMG_9608.webp";
import photoMundu from "../assets/Avinash 3.webp";
import photoSmile from "../assets/Avinash1.webp";
import photoBag from "../assets/model_photoshoot.webp";
import photoIntense from "../assets/Screenshot 2026-06-22 225425.webp";
import photoEdge from "../assets/photoshoot.webp";
import photoStudio from "../assets/1000 Babies.webp";
import photoWarm from "../assets/IMG-20251215-WA0050(1) (1).webp";
import photoKottiClose from "../assets/Kottikalaasham - close.webp";
import photoKottiFull from "../assets/Kottikalaasham - full.webp";
import photoKottiMid from "../assets/Kottikalaasham - mid.webp";
import photoModel from "../assets/model.webp";
import photoFoliage from "../assets/063D79E2-B831-4DCA-A18C-E447890663EC.webp";
import photoSeated from "../assets/20240619_172756_remastered-.webp";
import photoAmazonMicro from "../assets/amazon micro series.webp";
import photoCamera from "../assets/file_00000000e7287208bda881a7a6116b7b.webp";
import photoPadavett from "../assets/padavett.webp";
import photoRamsons1 from "../assets/ramsons 1.webp";
import photoRamsons2 from "../assets/ramsons 2.webp";
import photoPillar from "../assets/IMG_3161.webp";
import photoGarlandLook from "../assets/file_0000000082188211ae2e7a40b5b8449f.webp";
import photoGarlandLeaning from "../assets/file_00000000cc148211aee0069faa6a14b3.webp";
import instagramLogo from "../assets/instagram-logo.webp";

const INSTAGRAM_URL = "https://www.instagram.com/actor.avinaash_vijayan";

const photos: { src: string; alt: string; ratio: number }[] = [
  { src: photoSky, alt: "Low angle outdoor portrait of Avinash Vijayan", ratio: 2.1618 },
  { src: photoMundu, alt: "Avinash Vijayan in a traditional mundu look", ratio: 0.6667 },
  { src: photoIntense, alt: "Close-up character study of Avinash Vijayan", ratio: 1.1609 },
  { src: photoBw, alt: "Black and white headshot of Avinash Vijayan", ratio: 0.5133 },
  { src: photoSmile, alt: "Smiling headshot of Avinash Vijayan", ratio: 0.7993 },
  { src: photoFull, alt: "Full-length outdoor shot of Avinash Vijayan", ratio: 0.6666 },
  { src: photoStreet, alt: "Avinash Vijayan on location — street portrait", ratio: 0.6664 },
  { src: photoBag, alt: "Character look — Avinash Vijayan with glasses", ratio: 0.6293 },
  { src: photoEdge, alt: "Editorial character study of Avinash Vijayan", ratio: 0.5496 },
  { src: photoStudio, alt: "Studio headshot of Avinash Vijayan", ratio: 0.5334 },
  { src: photoWarm, alt: "Portrait study of Avinash Vijayan", ratio: 0.5 },
  { src: photoCloseUp, alt: "Close-up portrait of Avinash Vijayan", ratio: 0.7143 },
  { src: photoMono, alt: "Avinash Vijayan looking over his shoulder in a forest", ratio: 0.4626 },
  { src: photoKottiClose, alt: "Kottikalaasham — close-up character look", ratio: 0.8205 },
  { src: photoKottiMid, alt: "Kottikalaasham — mid-shot character look", ratio: 0.773 },
  { src: photoKottiFull, alt: "Kottikalaasham — full-length character look", ratio: 0.5606 },
  { src: photoModel, alt: "Close-up profile portrait of Avinash Vijayan with glasses", ratio: 0.8527 },
  { src: photoFoliage, alt: "Close-up portrait of Avinash Vijayan against green foliage", ratio: 1.3242 },
  { src: photoSeated, alt: "Editorial seated portrait of Avinash Vijayan", ratio: 0.6059 },
  { src: photoAmazonMicro, alt: "Avinash Vijayan in a traditional mundu — Amazon Micro Series", ratio: 0.5622 },
  { src: photoCamera, alt: "Close-up side-profile portrait of Avinash Vijayan against green foliage", ratio: 1.4415 },
  { src: photoPadavett, alt: "Moody character portrait of Avinash Vijayan — Padavett", ratio: 0.5628 },
  { src: photoRamsons1, alt: "Seated portrait of Avinash Vijayan in mundu and kurta — Ramsons", ratio: 0.634 },
  { src: photoRamsons2, alt: "Studio portrait of Avinash Vijayan in mundu and kurta — Ramsons", ratio: 0.6677 },
  { src: photoPillar, alt: "Avinash Vijayan in a white kurta by a traditional wooden pillar", ratio: 0.5628 },
  { src: photoGarlandLook, alt: "Avinash Vijayan in a Nehru jacket against a floral garland backdrop", ratio: 0.5875 },
  { src: photoGarlandLeaning, alt: "Avinash Vijayan leaning on a pillar against a floral garland backdrop", ratio: 0.5628 },
];

const videos = [
  { id: "1227965006", label: "Antharalam", tag: "Short Film" },
  { id: "1215142541", label: "Padayani", tag: "Short Film" },
  { id: "1215660760", label: "The Human Expiry", tag: "Short Film" },
  { id: "1215660541", label: "Father", tag: "Short Film" },
  { id: "1215660481", label: "Liberation", tag: "Short Film" },
  { id: "1215364108", label: "Torc — Advertisement", tag: "Advertisement", featured: true },
  { id: "1215143652", label: "Showreel Clip 01", tag: "Showreel" },
  { id: "1215143766", label: "Showreel Clip 02", tag: "Showreel" },
  { id: "1215143829", label: "Showreel Clip 03", tag: "Showreel" },
  { id: "1215143879", label: "Showreel Clip 04", tag: "Showreel" },
  { id: "1215144497", label: "Showreel Clip 05", tag: "Showreel" },
  { id: "1215145427", label: "Showreel Clip 06", tag: "Showreel" },
  { id: "1215145570", label: "Showreel Clip 07", tag: "Showreel" },
  { id: "1215661954", label: "Showreel Clip 08", tag: "Showreel" },
  { id: "1215662010", label: "Showreel Clip 09", tag: "Showreel" },
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
      { property: "og:image", content: photoSky },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: photoSky },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Avinash Vijayan",
          jobTitle: "Actor",
          image: photoSky,
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

type Credit = { title: string; detail: string; year?: string; watchId?: string };

const creditGroups: { heading: string; items: Credit[] }[] = [
  {
    heading: "Web Series",
    items: [
      { title: "Amazon Micro Series", detail: "Amazon - Hindi" },
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
      { title: "Antharaalam", detail: "Short Film" },
      { title: "Kottikalaasham", detail: "Short Film" },
      { title: "Padayani", detail: "Short Film" },
      { title: "Father", detail: "Short Film" },
      { title: "The Human Expiry", detail: "Short Film" },
      { title: "Liberation", detail: "Short Film" },
    ],
  },
  {
    heading: "Brand & Digital",
    items: [
      { title: "Arun Textiles", detail: "Advertisement - Tamil" },
      { title: "ChatGPT", detail: "Advertisement" },
      { title: "Ramsons", detail: "Advertisement" },
      { title: "Jos Alukkas", detail: "Advertisement" },
      { title: "Nambisan Ghee", detail: "Advertisement" },
      { title: "Torc", detail: "Advertisement" },
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
  { value: "6+", label: "Brand Films" },
  { value: "4", label: "Languages" },
];

const marqueeItems = [
  "Disney+ Hotstar",
  "SonyLIV",
  "Amazon",
  "ChatGPT",
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

function VideoCard({ video }: { video: { id: string; label: string; tag: string } }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="group">
      <div className="glow-ring relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
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
            <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-colors group-hover:from-ink/50" />
            <span className="glass-chip absolute left-3 top-3 rounded-full px-2.5 py-1 text-ink-foreground sm:left-4 sm:top-4">
              <span className="label-caps">{video.tag}</span>
            </span>
            <span className="gradient-fill absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play size={18} fill="currentColor" />
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
  const [galleryCols, setGalleryCols] = useState(2);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const computeCols = () => {
      const w = window.innerWidth;
      setGalleryCols(w >= 1280 ? 4 : w >= 640 ? 3 : 2);
    };
    computeCols();
    window.addEventListener("resize", computeCols);
    return () => window.removeEventListener("resize", computeCols);
  }, []);

  // Greedy "shortest column" masonry: each photo renders at its true aspect
  // ratio (no cropping), placed into whichever column is currently shortest.
  const galleryColumns = useMemo(() => {
    const columns: { photo: (typeof photos)[number]; index: number }[][] = Array.from(
      { length: galleryCols },
      () => [],
    );
    const heights = new Array(galleryCols).fill(0);
    photos.forEach((photo, index) => {
      let shortest = 0;
      for (let c = 1; c < galleryCols; c++) {
        if (heights[c]! < heights[shortest]!) shortest = c;
      }
      columns[shortest]!.push({ photo, index });
      heights[shortest] += 1 / photo.ratio;
    });
    return columns;
  }, [galleryCols]);

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
    <div className="relative min-h-dvh bg-background text-foreground">
      <div className="aurora-bg" aria-hidden="true" />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div
          className={`glass mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${scrolled ? "glass-strong" : ""
            }`}
        >
          <a href="#top" className="font-heading text-xl font-medium tracking-[-0.02em] sm:text-2xl">
            Avinash <span className="gradient-text">Vijayan</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`label-caps relative pb-1 transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </a>
              );
            })}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[linear-gradient(135deg,#feda75,#d62976_55%,#4f5bd5)] shadow-[0_6px_18px_-6px_rgba(214,41,118,0.7)] backdrop-blur-md transition-transform hover:scale-110"
            >
              <img src={instagramLogo} alt="" className="h-5 w-5" />
            </a>
          </nav>

          <button
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
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
        className={`fixed inset-0 z-40 bg-ink/95 text-ink-foreground backdrop-blur-2xl transition-all duration-300 lg:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <nav className="flex h-dvh flex-col justify-center gap-1 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-baseline gap-4 border-b border-ink-foreground/15 py-4 font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.03em]"
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
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
            >
              <Instagram size={16} /> @actor.avinaash_vijayan
            </a>
            <a
              href="tel:+918129620272"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
            >
              <Phone size={16} /> +91 8129620272
            </a>
            <a
              href="mailto:av.8129620272@gmail.com"
              className="gradient-fill inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Mail size={16} /> Email me
            </a>
          </div>
        </nav>
      </div>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pb-6 pt-24 lg:pb-8">
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal spotlight relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
              <img
                src={photoSky}
                alt="Cinematic portrait of actor Avinash Vijayan"
                className="absolute inset-0 h-full w-full object-cover object-[50%_15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

              <div className="glass-chip absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-ink-foreground sm:left-6 sm:top-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="label-caps">Available for Casting</span>
              </div>

              <div className="glass relative mx-4 mt-16 mb-4 rounded-[1.75rem] p-4 sm:mx-6 sm:mt-20 sm:mb-6 sm:p-7 lg:max-w-2xl lg:p-9">
                <span className="label-caps text-primary">Kerala · India</span>
                <h1 className="mt-2 font-heading text-[clamp(2.4rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.04em] sm:mt-3">
                  Avinash <span className="gradient-text">Vijayan</span>
                </h1>
                <div className="rule-x mt-3 w-full max-w-sm sm:mt-5" />
                <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-foreground/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] sm:mt-4 sm:text-lg">
                  Actor and story-driven performer working across feature films, streaming
                  series and brand films — grounded performances, physical craft, four
                  languages.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
                  <a
                    href="#reel"
                    className="gradient-fill inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] sm:px-7 sm:py-3.5 text-primary-foreground shadow-[0_16px_40px_-16px_var(--sienna)] transition-transform hover:-translate-y-0.5"
                  >
                    <Play size={14} fill="currentColor" /> Watch the Reel
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] sm:px-7 sm:py-3.5 transition-colors hover:text-primary"
                  >
                    <Instagram size={14} /> Instagram
                  </a>
                </div>
              </div>
            </div>

            <dl className="glass mt-8 grid grid-cols-2 divide-x divide-y divide-border overflow-hidden rounded-2xl sm:grid-cols-4 sm:divide-y-0">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center justify-center gap-2 px-3 py-3 sm:gap-2.5">
                  <dt className="font-heading text-xl font-medium tracking-[-0.02em] text-primary sm:text-2xl">
                    {s.value}
                  </dt>
                  <dd className="label-caps text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>

          </div>
        </section>

        {/* Marquee */}
        <div className="mx-auto mt-4 max-w-[1400px] px-5 sm:mt-5 sm:px-8">
          <div className="glass overflow-hidden rounded-full px-4 py-2.5 sm:px-5">
            <div className="animate-marquee flex w-max gap-10 whitespace-nowrap pr-10">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="label-caps flex items-center gap-10 text-muted-foreground">
                  {item}
                  <span
                    className={`h-1 w-1 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-sage"}`}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Reel */}
        <section id="reel" className="pt-8 sm:pt-10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="label-caps text-primary">01 — Showreel</span>
                <h2 className="mt-3 font-heading text-[clamp(2.625rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                  Watch the <span className="gradient-text">work</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:max-w-none sm:whitespace-nowrap">
                Selected scenes, commercials and character clips. Tap any frame to play.
              </p>
            </div>

            <div className="reveal mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        </section>

        {/* Profile */}
        <section id="profile" className="pt-8 sm:pt-10">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="reveal">
              <div className="glass lift overflow-hidden rounded-[2rem] p-2">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={photoMono}
                    alt="Avinash Vijayan looking over his shoulder in a forest"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                    style={{ objectPosition: "50% 24%" }}
                  />
                </div>
              </div>
            </div>

            <div className="reveal">
              <span className="label-caps text-primary">02 — Profile</span>
              <h2 className="mt-3 font-heading text-[clamp(2.625rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                A performer built on <span className="gradient-text">craft</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Based in Ernakulam, Kerala, Avinash Vijayan brings a story-first instinct to
                every role — from streaming drama on Disney+ Hotstar and SonyLIV to
                independent shorts and national brand films. Trained across leading Kerala
                acting labs and disciplined in Shaolin Kung Fu, he moves comfortably between
                grounded realism and physically demanding action.
              </p>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {skills.map((s) => (
                  <div key={s.label} className="glass rounded-lg p-3">
                    <h3 className="font-heading text-sm font-medium tracking-[-0.01em]">{s.label}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{s.detail}</p>
                  </div>
                ))}
              </div>

              <h3 className="label-caps mt-6 text-muted-foreground">Training</h3>
              <ul className="glass mt-3 divide-y divide-border rounded-lg px-4">
                {training.map((t) => (
                  <li key={t.title} className="flex items-baseline justify-between gap-4 py-2">
                    <span className="font-heading text-sm font-medium tracking-[-0.01em] sm:text-base">
                      {t.title}
                    </span>
                    <span className="text-right text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Credits */}
        <section id="credits" className="pt-8 sm:pt-10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal">
              <span className="label-caps text-primary">03 — Credits</span>
              <h2 className="mt-3 font-heading text-[clamp(2.625rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Selected <span className="gradient-text">filmography</span>
              </h2>
            </div>

            <div className="mt-8 grid gap-3 lg:grid-cols-2 lg:gap-4">
              {creditGroups.map((group) => (
                <div key={group.heading} className="reveal glass rounded-lg p-3 sm:p-4">
                  <h3 className="label-caps border-b border-border pb-2 text-primary">
                    {group.heading}
                  </h3>
                  <ul className="divide-y divide-border">
                    {group.items.map((item, i) => (
                      <li
                        key={item.title}
                        className="group flex items-baseline gap-2.5 py-1.5 transition-colors hover:text-primary"
                      >
                        <span className="w-4 shrink-0 text-[10px] tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading text-sm font-medium leading-[1.2] tracking-[-0.01em] sm:text-base">
                          {item.title}
                        </span>
                        {item.watchId ? (
                          <a
                            href={`https://vimeo.com/${item.watchId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto flex shrink-0 items-center gap-1 text-right text-[9px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                          >
                            watch /{item.title.toLowerCase().replace(/\s+/g, "-")}
                            <ArrowUpRight className="h-2.5 w-2.5" />
                          </a>
                        ) : (
                          <span className="ml-auto shrink-0 text-right text-[9px] uppercase tracking-widest text-muted-foreground">
                            {item.detail}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="pt-8 sm:pt-10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="label-caps text-primary">04 — Gallery</span>
                <h2 className="mt-3 font-heading text-[clamp(2.625rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                  Looks & <span className="gradient-text">headshots</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Click any image to view full frame.
              </p>
            </div>

            <div className="mt-6 flex gap-3 sm:gap-4">
              {galleryColumns.map((column, ci) => (
                <div key={ci} className="flex flex-1 flex-col gap-3 sm:gap-4">
                  {column.map(({ photo, index }) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      style={{ aspectRatio: photo.ratio }}
                      className="lift group relative block w-full overflow-hidden rounded-2xl border border-border"
                      aria-label={`Open image: ${photo.alt}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-8 pb-8 sm:pt-10 sm:pb-10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
            <div className="reveal glass-strong grid gap-8 rounded-[2.5rem] p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-12">
              <div>
                <span className="label-caps text-primary">05 — Contact</span>
                <h2 className="mt-3 font-heading text-[clamp(2.625rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                  Let’s create <span className="gradient-text">together</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/65 sm:text-lg">
                  Available for feature films, web series, commercials and short films.
                  Auditions on request — self-tapes delivered within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
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
                      <span className="flex items-center justify-between">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                          <Icon size={12} className="text-primary" />
                        </span>
                        {row.href ? (
                          <ArrowUpRight
                            size={11}
                            className="shrink-0 text-ink-foreground/35 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                          />
                        ) : null}
                      </span>
                      <span className="label-caps mt-1.5 block text-[10px] text-ink-foreground/40">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block truncate text-xs font-medium">{row.value}</span>
                    </>
                  );
                  return row.href ? (
                    <a
                      key={row.label}
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="glass group rounded-lg p-2.5 transition-colors hover:bg-white/10"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={row.label} className="glass rounded-lg p-2.5">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-8 pt-4">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-border px-5 pt-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
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
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="glass absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-foreground"
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
            className="glass absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-foreground sm:left-6"
          >
            <ChevronLeft size={20} />
          </button>
          <img
            src={photos[lightboxIndex]!.src}
            alt={photos[lightboxIndex]!.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85dvh] max-w-full rounded-2xl object-contain shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]"
          />
          <span className="glass-chip label-caps absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1.5 text-ink-foreground">
            {lightboxIndex + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="glass absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-foreground sm:right-6"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
