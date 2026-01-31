import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Understanding the Problem",
    desc: "Clarifying goals, users, and challenges before starting the design",
  },
  {
    title: "Research & Inspiration",
    desc: "Studying similar products and gathering design inspiration",
  },
  {
    title: "Wireframing",
    desc: "Creating low-fidelity layouts to define structure and flow",
  },
  {
    title: "UI Design",
    desc: "Designing clean, consistent, and user-friendly interfaces",
  },
  {
    title: "Iteration & Improvement",
    desc: "Refining designs based on feedback and self-evaluation.",
  },
];

const ConnectedWorkflow = () => {
  return (
    <div className="relative w-full py-12 px-6 font-sans rounded-2xl overflow-hidden">
      {/* Cosmic Background with Stars */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-950" />

      {/* Glitter/Star Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.5,
              boxShadow: `0 0 ${2 + Math.random() * 4}px ${1 + Math.random() * 2}px rgba(255, 255, 255, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Nebula Texture Overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-purple-500/10" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-3xl mx-auto z-10">
        <header className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            My Design Process
          </h2>
          <p className="text-blue-300/80 text-sm mt-2 tracking-wider">
            A STREAMLINED PATH FROM CONCEPT TO CREATION
          </p>
        </header>

        <div className="relative">
          {/* Glowing Connector Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[3px]">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400 blur-sm opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-cyan-300" />
          </div>

          {/* Floating Orbs on Connector */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute left-[14px] w-[5px] h-[5px] rounded-full bg-cyan-300 animate-pulse"
              style={{
                top: `${20 + i * 30}%`,
                animationDelay: `${i * 0.5}s`,
                boxShadow: "0 0 8px 2px rgba(34, 211, 238, 0.6)",
              }}
            />
          ))}

          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative pl-12 group"
              >
                {/* Animated Node */}
                <div className="absolute left-0 top-7 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Middle ring */}
                  <div className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-80 group-hover:scale-125 transition-transform duration-500" />

                  {/* Inner dot */}
                  <div className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] group-hover:shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-300" />

                  {/* Pulse animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping opacity-0 group-hover:opacity-100" />
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-xl hover:from-white/[0.08] hover:to-white/[0.04] hover:border-blue-400/30 transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-blue-500/10 relative overflow-hidden">
                  {/* Card shine effect */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

                  {/* Subtle gradient accent */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest opacity-90 group-hover:opacity-100 group-hover:text-cyan-300 transition-colors">
                      STEP 0{index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-500">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300/90 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {step.desc}
                  </p>

                  {/* Hover effect sparkle */}
                  <div className="absolute -right-2 -top-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-12 pt-8 border-t border-white/10 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-sm opacity-60" />
            <div className="absolute inset-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full" />
          </div>
          <p className="text-center text-sm text-gray-400 tracking-wider">
            CONTINUOUS EVOLUTION • PERFECTION THROUGH ITERATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectedWorkflow;
