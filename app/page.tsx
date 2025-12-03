import { projects } from "@/constants/projects";
import ProjectTile from "@/components/ProjectTile";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
        {Object.values(projects).map((project) => (
          <ProjectTile project={project} key={project.title} />
        ))}
      </div>
    </>
  );
}
