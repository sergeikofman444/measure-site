'use client';
import { projects } from '@/constants/projects'
import type { Project } from '@/constants/projects'
import { useParams } from 'next/navigation';

export default function Project () {
    const params = useParams(); // returns { slug: string }
    const { slug } = params;
    const project: Project | undefined = Object.values(projects).find(
        (p) => p.slug === slug
    );

    if (!project) {
        return <div>Project not found</div>;
    }

    const imageSrc = `/project_images/${slug}.jpg`;
    console.log(imageSrc);
    
  return (
    <div className="w-full">
      <div className="py-8 px-8 md:px-64 items-center">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        {project.content}
      </div>
    </div>
  );
};


// <div className="relative aspect-square group overflow-hidden">
//         <Image
//           src={imageSrc}
//           alt={project.title}
//           fill
//           className="object-cover object-center"
//           unoptimized
//           priority
//         />
//       </div>