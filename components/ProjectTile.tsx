import Image from "next/image";
import Link from "next/link";
import type { Project } from '@/constants/projects'

export default function ProjectTile({ project }: { project: Project }) {
  const imageSrc = `/project_images/${project.slug}.jpg`;

  return (
    <Link href={`/projects/${project.slug}`}>
        <div className="relative aspect-3/4 group overflow-hidden hover:shadow-lg hover:scale-101 duration-300 transition-transform">
        <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center text-center justify-center p-10 duration-300 transition-opacity opacity-0 group-hover:opacity-100">
            <div className="text-white text-xl font-semibold">
            {project.title}
            </div>
        </div>
        </div>
    </Link>
  );
}
