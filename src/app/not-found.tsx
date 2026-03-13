import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-display text-[8rem] lg:text-[10rem] font-bold text-[#0F172A]/[0.04] leading-none block">404</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight -mt-8">Sidan kunde inte hittas</h1>
          <p className="mt-6 font-body text-lg text-[#4B5563] leading-relaxed">Sidan ni letar efter verkar inte finnas. Den kan ha flyttats eller tagits bort.</p>
          <Link href="/" className="inline-flex items-center mt-10 px-10 py-5 bg-[#0F172A] text-white font-body text-sm font-semibold tracking-wide rounded-none hover:bg-[#0F172A]/90 transition-all duration-300">
            <ArrowLeft className="mr-3 w-4 h-4" /> Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </section>
  );
}
