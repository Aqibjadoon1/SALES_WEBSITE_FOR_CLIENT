import { PackageCheck, Settings, Wrench } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const services = [
  {
    title: "Expert Installation",
    copy: "Precise setup for home and commercial units, handled with practical technical care.",
    icon: Wrench,
  },
  {
    title: "Strategic Supply",
    copy: "Bulk procurement and delivery for institutional projects, units and corporate requirements.",
    icon: PackageCheck,
  },
  {
    title: "Maintenance Support",
    copy: "Reliable after-sales support and technical assistance for long-term appliance performance.",
    icon: Settings,
  },
];

export function ServiceHighlights() {
  return (
    <section className="section-shell py-14">
      <SectionReveal>
        <p className="text-sm font-black uppercase text-primary">Professional Services</p>
        <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Dedicated support for every client</h2>
      </SectionReveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="glass-card p-5">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-black text-primary">0{index + 1}</span>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-textSecondary">{service.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
