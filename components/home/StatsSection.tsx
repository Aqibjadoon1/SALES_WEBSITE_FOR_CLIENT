"use client";

import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { Award, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Products Supplied", icon: PackageCheck },
  { value: 15, suffix: "+", label: "Years Experience", icon: Award },
  { value: 2, suffix: "", label: "Army & TIKA Project Tracks", icon: ShieldCheck },
  { value: 24, suffix: "/7", label: "Nationwide Support", icon: Truck },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-shell py-12">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="glass-card p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-4xl font-black text-white">
                {inView ? <CountUp end={stat.value} duration={2.2} /> : 0}
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm font-semibold text-textSecondary">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
