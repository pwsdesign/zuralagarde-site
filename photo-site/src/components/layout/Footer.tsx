import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>{site.locationLine}</p>
      </div>
    </footer>
  );
}