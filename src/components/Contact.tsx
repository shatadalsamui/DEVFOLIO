"use client";

import profileData from "@/data/profile.json";

export default function Contact() {
  const directory = [
    {
      channel: "Email",
      address: profileData.contact.email,
      href: `mailto:${profileData.contact.email}`,
      note: "Primary contact for inquiries and opportunities."
    },
    {
      channel: "Phone",
      address: profileData.contact.phone,
      href: `tel:${profileData.contact.phone.replace(/\s+/g, '')}`,
      note: "Direct line."
    },
    {
      channel: "Location",
      address: profileData.contact.location,
      href: undefined,
      note: "Kolkata, India (UTC+05:30)"
    },
    {
      channel: "GitHub",
      address: "github.com/shatadalsamui",
      href: profileData.socials.github,
      note: "Repositories, systems code, and benchmarks."
    },
    {
      channel: "LinkedIn",
      address: "linkedin.com/in/shatadalsamui",
      href: profileData.socials.linkedin,
      note: "Professional background and experience."
    },
    {
      channel: "X (Twitter)",
      address: "x.com/shatadal_samui",
      href: profileData.socials.twitter,
      note: "Updates and tech discussions."
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            Feel free to reach out for software engineering opportunities, systems architecture discussions, or collaboration.
          </p>
        </div>

        {/* Directory Card / Table */}
        <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 rounded-lg overflow-hidden">
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {directory.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="text-xs font-mono text-neutral-500 uppercase">
                    {item.channel}
                  </div>
                  <div className="text-base font-semibold text-neutral-900 dark:text-neutral-100 font-mono">
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : '_blank'}
                        rel={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                        className="hover:underline hover:text-neutral-700 dark:hover:text-neutral-300"
                      >
                        {item.address}
                      </a>
                    ) : (
                      <span>{item.address}</span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-neutral-500 max-w-sm sm:text-right">
                  {item.note}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-neutral-900/90 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
              AVAILABLE FOR FULL-TIME SOFTWARE ENGINEERING ROLES
            </span>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900 text-xs font-mono font-medium rounded transition-colors self-start sm:self-auto"
            >
              Send Email →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}