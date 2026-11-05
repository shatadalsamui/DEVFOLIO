"use client";

import skillsData from "@/data/skills.json";

export default function Skills() {
  const { skillCategories } = skillsData;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Languages, runtimes, and engineering tools used across high-performance systems and distributed backends.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 bg-white dark:bg-neutral-900/60 rounded-lg border border-neutral-200 dark:border-neutral-800 space-y-4"
            >
              <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {category.title}
                </h3>
                {category.description && (
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    {category.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-2 bg-neutral-50 dark:bg-neutral-900 rounded border border-neutral-200/70 dark:border-neutral-800/80 text-neutral-800 dark:text-neutral-200"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}