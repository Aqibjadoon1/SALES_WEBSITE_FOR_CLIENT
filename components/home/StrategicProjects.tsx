"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const projects = [
  {
    title: "Institutional Cooling Supply",
    image: "/images/products/cleaned/pdf-air-conditioner-dawlance-glamour-inverter-floor-standing-ac.png",
    copy: "Floor-standing and split cooling solutions supplied for large rooms, offices and institutional facilities.",
    checks: ["Bulk procurement and delivery", "Installation planning", "After-sales service coordination"],
  },
  {
    title: "Commercial Kitchen Support",
    image: "/images/products/cleaned/pdf-dishwasher-dawlance-ddw-1480-inv-dishwasher.png",
    copy: "Dishwasher and cooking-appliance supply for staff kitchens, mess halls and commercial teams.",
    checks: ["Model selection assistance", "Field commissioning support", "Commercial-grade appliance planning"],
  },
  {
    title: "Unit Support Nationwide",
    image: "/images/products/cleaned/pdf-water-dispenser-dawlance-wd-1051-gd-water-dispenser.png",
    copy: "Coordinated supply of water dispensers, refrigerators and daily-use appliances for office and field units.",
    checks: ["Nationwide delivery coordination", "After-sales maintenance", "Reliable procurement documentation"],
  },
];

export function StrategicProjects() {
  return (
    <section className="py-14">
      <div className="section-shell">
        <SectionReveal>
          <p className="text-sm font-black uppercase text-primary">Strategic Projects</p>
          <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Institutional confidence with practical field delivery</h2>
        </SectionReveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-surface shadow-card transition-shadow duration-300 hover:shadow-[0_30px_90px_rgba(255,30,110,0.34)]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={project.image}
                alt={`${project.title} by New Murtaza Asif Traders`}
                fill
                sizes="(max-width: 1024px) 92vw, 380px"
                className="object-contain p-6 transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/62 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="rounded-md bg-primary px-3 py-1 text-xs font-black uppercase text-white">
                  Institutional Confidence
                </span>
                <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.76]">{project.copy}</p>
                <ul className="mt-4 space-y-2">
                  {project.checks.map((check) => (
                    <li key={check} className="flex gap-2 text-sm text-white">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
