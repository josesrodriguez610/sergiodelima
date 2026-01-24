export default function SiteFooter() {
  return (
    <footer className="pt-10 text-center">
      <p className="text-sm text-white/60 mb-2">
        Collaborations, or just to say hi
      </p>

      <a
        href="mailto:sergio.delima.nola@gmail.com"
        className="inline-block text-white font-medium underline underline-offset-4 hover:text-white/80 transition"
      >
        sergio.delima.nola@gmail.com
      </a>

      <p className="mt-6 mb-4 text-xs text-white/40">
        © {new Date().getFullYear()} Sergio DeLima. All rights reserved.
      </p>
    </footer>
  );
}
