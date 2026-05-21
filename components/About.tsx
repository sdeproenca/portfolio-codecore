"use client";

import { useState } from "react";
import { Panel } from "./Panel";

function JsonLine({
  k,
  v,
  isLast = false,
  comment = false,
}: {
  k?: string;
  v?: string;
  isLast?: boolean;
  comment?: boolean;
}) {
  if (comment) {
    return (
      <div className="py-0.5 text-bone-faint/50 italic">
        {"// "}{k}
      </div>
    );
  }
  return (
    <div className="py-0.5">
      {k && (
        <span className="text-bone-dim">
          &quot;{k}&quot;:{" "}
        </span>
      )}
      <span className="text-accent">{v}</span>
      {!isLast && <span className="text-bone-faint">,</span>}
    </div>
  );
}

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
      <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">

        {/* ABOUT.MD */}
        <Panel title="ABOUT.MD" headerClassName="bg-accent/[0.07]">
          <div className="space-y-5 text-[14px] leading-relaxed">

            <h2 className="text-[10px] uppercase tracking-[0.18em] text-accent">
              ## background
            </h2>

            <p className="text-bone">
              Hi, I&apos;m Sofi. I&apos;m both Argentinian and Italian, and a working nomad.
              For the last eight years, I have held the roles of Project Manager, Program
              Manager, Product Manager, and Product Owner. The truth is,{" "}
              <span className="text-accent">
                I have always been the person who catches problems even before they happen,
                sees a solution right away, and can&apos;t help but just solve it.
              </span>{" "}
              For me,{" "}
              <span className="text-accent">
                delivery and product are two coexisting pieces that need each other,
              </span>{" "}
              instead of two completely different languages.
            </p>

            <p className="text-bone">
              Over the years, I have{" "}
              <span className="text-accent">
                built the operating systems for both delivery and product that let teams
                ship predictably and at high quality.
              </span>{" "}
              I have managed projects through blockchain infrastructure, developer
              products, ecommerce, public sector tech, formal marketing, and enterprise
              data transformation.{" "}
              <span className="text-accent">Although the domain changes, the pattern doesn&apos;t.</span>
            </p>

            {/* See more / arc section */}
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="flex items-center gap-2 border border-rule px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-bone-dim transition hover:border-accent/50 hover:text-accent"
              >
                <span className="text-accent">+</span>
                see_more.txt
                <span className="text-bone-faint">→</span>
              </button>
            )}

            {expanded && (
              <>
                <h2 className="text-[10px] uppercase tracking-[0.18em] text-accent">
                  ## the_arc
                </h2>

                <p className="text-bone">
                  As a highly curious mind I&apos;ve always been, I studied international
                  relations and public policy, and joined the Buenos Aires Ministry of
                  Justice and Security in 2017. By 2019 I was the project manager of{" "}
                  <span className="text-accent">
                    the largest public security technology programs in Latin America.
                  </span>{" "}
                  When I started, there was no operations playbook anywhere in the
                  building, no SOPs, no tracking software, nothing. What there was:
                  high-stakes public infrastructure, judicial oversight built into the
                  daily workflow, multiple ministries and agencies that had to stay
                  aligned, law enforcement on the ground, and the kind of compliance
                  demands you only get when a system touches people&apos;s lives
                  directly.{" "}
                  <span className="text-accent">
                    I learned how to build operating systems where none existed, because
                    the alternative was that nothing would land.
                  </span>{" "}
                  Pushed by impact, I learned by myself program and project management
                  principles, while doing security-heavy research and data analysis.
                </p>

                <p className="text-bone">
                  That project gave me the question I have been answering ever since:{" "}
                  <span className="text-accent">
                    how do you make a technically ambitious thing land on time, under
                    oversight, when the stakes are high and very real, and the team,
                    third parties, and stakeholders are spread through several offices
                    and agencies?
                  </span>
                </p>

                <p className="text-bone">
                  Around the same time, in 2018, I also first learned what Bitcoin was.
                  And then came blockchain, web3, decentralization. With my background,
                  both in studies and as an Argentinian, it clicked instantly for me.{" "}
                  <span className="text-accent">
                    I was forever hooked by what and how technology can do to people&apos;s
                    lives, for good.
                  </span>{" "}
                  From then on, I wanted my work to be in the service of that.
                </p>

                <p className="text-bone">
                  The years since have been variations on the same question, always
                  thinking of the final goal too. There is a moment in every job where
                  someone says the thing cannot be done on the timeline they need it
                  done. And there I was: delivering demos on a conference stage in just
                  a few weeks before AI was even a thing, delivering high-quality to
                  clients with an ecommerce agency carrying more clients than its
                  coordination could hold, building across 5 timezones a full operating
                  system so we can have more devs into Web3. In every case,{" "}
                  <span className="text-accent">
                    my job was to see through the problem while balancing delivery and
                    product, then to build the operating system that made the plan true.
                  </span>{" "}
                  The reason I keep finding myself in rooms like these is that the
                  technology in them, when it actually ships,{" "}
                  <span className="text-accent">
                    is the kind that gives people more agency than they had before,
                  </span>{" "}
                  making users and clients happy and the best in whatever they want to
                  accomplish. In the end, it&apos;s as simple as that.{" "}
                  <span className="text-accent">And I love every single bit of it.</span>
                </p>

                <button
                  onClick={() => setExpanded(false)}
                  className="flex items-center gap-2 border border-rule px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-bone-dim transition hover:border-accent/50 hover:text-accent"
                >
                  <span className="text-accent">−</span>
                  fold.txt
                  <span className="text-bone-faint">↑</span>
                </button>
              </>
            )}

          </div>
        </Panel>

        {/* STATS.JSON */}
        <Panel title="STATS.JSON">
          <div className="h-full font-mono text-[12px] leading-[1.9]">
            <div className="text-bone-faint">{"{"}</div>
            <div className="pl-4">
              <JsonLine k="uptime" v={'"8+ years"'} />
              <JsonLine k="regions" v={'["ARG", "ITA"]'} />
              <JsonLine k="domains" v={'["WEB3", "ECOM", "GOVTECH"]'} />
              <JsonLine k="projects_led" v={'"30+"'} />
              <JsonLine k="AI_workflows" v={"true"} />
              <JsonLine k="languages" v={'["es", "en", "it"]'} />

              <div className="my-1" />
              <JsonLine comment k="the_human_behind" />
              <div className="my-0.5" />

              <JsonLine k="trains" v={'["MMA", "weightlifting"]'} />
              <JsonLine k="paints" v={"true"} />
              <JsonLine k="cinema_nerd" v={"true"} />
              <JsonLine k="tech_meets_art" v={"true"} />
              <JsonLine k="trying_new_things" v={'"always"'} />
              <JsonLine k="mates_per_day" v={'"too many 🧉"'} isLast />
            </div>
            <div className="text-bone-faint">{"}"}</div>
          </div>
        </Panel>

      </div>
    </section>
  );
}
