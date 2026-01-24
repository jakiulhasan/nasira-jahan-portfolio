import React from "react";
import Lottie from "lottie-react";
import gif from "../../assets/midle.gif";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-16 font-sans">
      <div className="relative group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-emerald-500/50">
        {/* Animated Glare Effect (CSS only) */}
        <div className="absolute -inset-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            About
          </h2>
          <span className="text-sm md:text-lg font-medium text-emerald-400 bg-emerald-400/10 px-4 py-1 rounded-full border border-emerald-400/20">
            Design Skills & Tools
          </span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Column: Bio */}
          <div className="md:w-1/3 p-8 flex flex-col justify-between">
            <div>
              <p className="text-slate-400 text-4xl">Nasira Jahan</p>
              <h1 className="text-4xl font-extrabold text-white mt-1">
                UI / UX <span className="text-emerald-500">Designer</span>
              </h1>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-slate-300 leading-relaxed text-lg">
                I am a Junior UI/UX Designer with a strong passion for crafting
                simple, intuitive, and effective user experiences. I focus on
                understanding user needs and translating them into clean,
                functional, and visually balanced designs.
              </p>
            </div>
          </div>

          <div className="md:w-1/3 flex items-center justify-center p-4">
            <div className="w-full ">
              <img src={gif} alt="gif" className="mix-blend-screen h-full" />
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="md:w-1/3 p-8 space-y-8">
            <div className="space-y-3">
              <SkillBar
                label="UI Design"
                progress="95%"
                color="bg-emerald-500"
              />
              <SkillBar
                label="Wireframing"
                progress="80%"
                color="bg-amber-500"
              />
              <SkillBar
                label="Prototyping"
                progress="75%"
                color="bg-orange-600"
              />
            </div>

            <hr className="border-slate-800" />

            <div className="space-y-3">
              <ToolItem label="Figma" progress="95%" color="bg-emerald-500" />
              <ToolItem label="FigJam" progress="60%" color="bg-orange-500" />
              <ToolItem label="Adobe XD" progress="85%" color="bg-amber-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ label, progress, color }) => (
  <div className="group">
    <div className="flex justify-between mb-2">
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
        {progress}
      </span>
    </div>
    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
      <div
        className={`${color} h-full rounded-full`}
        style={{ width: progress }}
      />
    </div>
  </div>
);

const ToolItem = ({ label, progress, color }) => (
  <div>
    <label className="text-sm font-medium text-slate-400 block mb-2">
      {label}
    </label>
    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
      <div
        className={`${color} h-full rounded-full`}
        style={{ width: progress }}
      />
    </div>
  </div>
);

export default About;
