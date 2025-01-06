import { PROJECTS } from '../../constants/Projects';
import ProjectCard from './ProjectCard';

export default function Project() {
    return (
        <div className="px-4 lg:px-6">
            <div className="max-w-screen-xl mx-auto my-4 md:my-12">
                <h1 className="text-2xl md:text-4xl font-semibold font-workSans text-center mb-8">
                    Project
                </h1>
                <div className="space-y-6 md:space-y-12">
                    {PROJECTS.map(({ title, description, link, image }) => (
                        <ProjectCard
                            key={title}
                            title={title}
                            description={description}
                            link={link}
                            image={image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
