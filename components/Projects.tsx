"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectModal } from "./ui/ProjectModal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-10 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-10 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Selected Case Studies & Design Systems."
          subtitle="Explore deep-dive mobile applications, responsive website redesigns, IoT telemetry dashboards, and component architecture."
          align="center"
        />

        {/* Project Cards Stack */}
        <div className="space-y-12 md:space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>
      </div>

      {/* Case Study Full Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
