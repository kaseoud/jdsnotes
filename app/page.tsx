'use client';

import TimelineCard from "@/components/TimelineCard";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section>
      {/* Bio */}
      <p className="text-[15px] leading-[1.7] max-w-3xl font-mono">
        I am a Senior Consultant at Oliver Wyman focused on AI strategy and digital transformation across the GCC. 
        I work with sovereign wealth funds, government ministries, and defense authorities to translate AI 
        capabilities into national-scale programs and measurable outcomes. Engineering background from McGill. 
        Based in Riyadh.
      </p>

      {/* Work Experience */}
      <div className="mt-12">
        <h2 className="text-[11px] font-mono text-muted uppercase tracking-wider mb-6">Experience</h2>

        <TimelineCard
          title="Senior Consultant"
          company="Oliver Wyman · Full-time"
          description="Advising sovereign wealth funds, government ministries, and defense authorities on AI strategy, ecosystem design, and technology-enabled transformation across the GCC. Projects span national AI ecosystem models, defense funding mechanisms, digital customer journey redesign, and AI-enabled operations."
          date="Jan 2024 – Present"
          location="Riyadh, Saudi Arabia"
          logo="/oliver-wyman.png"
          highlighted
        />

        <TimelineCard
          title="Consultant"
          company="Deloitte Consulting · Full-time"
          description="Developed strategy frameworks and investment handbooks for GCC government clients. Supported business unit planning, performance management, and PMO functions across large-scale transformation programs."
          date="Oct 2021 – Oct 2023"
          location="Dubai, UAE"
          logo="/deloitte.png"
        />

        <TimelineCard
          title="Mechanical Engineer Intern"
          company="ThyssenKrupp AG"
          description="Assisted mechanical engineers on HVAC maintenance and compressible flow analysis."
          date="Jun 2018 – Jul 2018"
          location="Essen, Germany"
          logo="/thyssenkrupp.png"
        />
      </div>

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-[11px] font-mono text-muted uppercase tracking-wider mb-6">Education</h2>

        <TimelineCard
          title="BE, Mechanical Engineering"
          company="McGill University · Minor in Business Management"
          description="James McGill Scholarship recipient. First Place in Design Competition. Member of Rocket and Chess Teams."
          date="2015 – 2020"
          location="Montreal, Canada"
          logo="/mcgill.png"
        />
      </div>

      {/* Projects */}
      <div className="mt-12">
        <h2 className="text-[11px] font-mono text-muted uppercase tracking-wider mb-6">Projects</h2>

        <ProjectCard
          index={0}
          title="National AI Ecosystem Model"
          description="Designed a national AI ecosystem spanning software/hardware infrastructure, foundation models, and AI applications — defining strategic objectives, benchmarks, and a cross-sector collaboration framework for a GCC authority."
          tags={["AI Strategy", "Government"]}
          techStack={["AI Strategy","AI Value Chain Analysis","Ecosystem Design", "Benchmarking", "Policy"]}
        />

        <ProjectCard
          index={1}
          title="Funding Mechanisms Study"
          description="Developed a strategic study on alternative funding mechanisms for Saudi Arabia's defense localization plan, analyzing cash and non-cash instruments across the US, Europe, and South Korea."
          tags={["Defense", "Public Finance"]}
          techStack={["TRL Analysis", "Offset Programs", "PBL Contracts"]}
        />

        <ProjectCard
          index={2}
          title="World Cup Delivery Plan"
          description="Designed a comprehensive event delivery and execution plan embedding AI-enabled services across the full fan journey — mobility, security, hospitality, and venue operations."
          tags={["AI Operations", "Sports"]}
          techStack={["CONOPs", "IOC/FOC Planning", "AI Services"]}
        />
      </div>
    </Section>
  );
}