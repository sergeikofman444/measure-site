"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, ProjectType } from "@/constants/projects";
import ProjectTile from "@/components/ProjectTile";
import ProjectFilter from "@/components/ProjectFilter";

export default function Home() {
  const [selectedTypes, setSelectedTypes] = useState<Set<ProjectType>>(new Set());

  function toggleType(type: ProjectType | "all") {
  const newSelected = new Set(selectedTypes);

  if (type === "all") {
    newSelected.clear();
  } else {
    if (newSelected.has(type)) {
      newSelected.delete(type);
    } else {
      newSelected.add(type);
    }
    newSelected.delete("all" as ProjectType);
  }

  setSelectedTypes(newSelected);
}

  const visibleProjects = Object.values(projects).filter((p) =>
    selectedTypes.size === 0
      ? true
      : p.type.some((t) => selectedTypes.has(t))
  );

  return (
    <>
      <ProjectFilter
        selectedTypes={selectedTypes}
        toggleType={toggleType}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectTile project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
