const logos = [
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: ".NET", slug: "dotnet", color: "512BD4" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Stripe", slug: "stripe", color: "635BFF" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Zoho", slug: "zoho", color: "E42527" },
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
  { name: "Google Tag Manager", slug: "googletagmanager", color: "246FDB" },
];

export default function TechLogoLoop() {
  const items = [...logos, ...logos];
  return (
    <section aria-label="Technologies" className="relative py-12 border-y border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {items.map((l, i) => (
          <div
            key={`${l.slug}-${i}`}
            className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            title={l.name}
          >
            <img
              src={`https://cdn.simpleicons.org/${l.slug}/${l.color}`}
              alt={`${l.name} logo`}
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8"
            />
            <span className="font-mono text-sm text-muted-foreground">{l.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
