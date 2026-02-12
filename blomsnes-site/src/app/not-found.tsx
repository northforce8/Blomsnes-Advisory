import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section-padding gradient-sage">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-display text-8xl font-bold text-sage-200">
            404
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal-950 mt-6 mb-4">
            Sidan kunde inte hittas
          </h1>
          <p className="font-body text-lg text-charcoal-600 leading-relaxed mb-8">
            Sidan du letar efter verkar inte finnas. Den kan ha flyttats eller
            tagits bort.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-sage-700 text-white font-body text-sm font-medium rounded-lg hover:bg-sage-800 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Tillbaka till startsidan
          </Link>
        </div>
      </Container>
    </section>
  );
}
