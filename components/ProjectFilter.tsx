"use client";
import { useState } from "react";
import { projectTypes, ProjectType } from "@/constants/projects";

type ProjectFilterProps = {
  selectedTypes: Set<string>;
  toggleType: (type: ProjectType | "all") => void;
};

export default function ProjectFilter({
  selectedTypes,
  toggleType,
}: ProjectFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="relative flex justify-end px-4">
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        aria-label="Toggle menu"
      >
        <div className="flex gap-2 items-center mb-4">
          <span
            className={`${isFilterOpen ? "font-semibold" : ""} hover:font-semibold`}
          >
            {selectedTypes.size === 0
              ? "all projects"
              : Array.from(selectedTypes).join(", ")}
          </span>
        </div>
      </button>

      <div
        className={`
                absolute right-0 top-full mt-2 mr-4
                z-50 w-34
                transition-opacity duration-300 rounded-md bg-black text-right
                ${isFilterOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
      >
        <div>
          <button
            className={`px-2 py-1 rounded ${
              selectedTypes.size === 0 ? "font-semibold" : ""
            }`}
            onClick={() => toggleType("all" as ProjectType)}
          >
            all projects
          </button>
        </div>

        {projectTypes.map((type) => (
          <div key={type}>
            <button
              key={type}
              className={`px-2 py-1 rounded hover:font-semibold ${
                selectedTypes.has(type) ? "font-semibold" : ""
              }`}
              onClick={() => toggleType(type)}
            >
              {type}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
