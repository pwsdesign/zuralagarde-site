import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24 space-y-8">
      <h1 className="text-4xl md:text-5xl tracking-tight">About</h1>
      <p className="text-black/65 leading-relaxed">
        {site.name} is a Miami-based photographer and visual artist working across image, installation, and video.
        This is placeholder copy—replace with her real artist statement + photo bio.
      </p>

      <p className="text-black/65 leading-relaxed">
        For commissions, collaborations, press, or exhibition inquiries, use the contact form.
      </p>
    </main>
  );
}