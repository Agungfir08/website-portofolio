import ResumeCard from './ResumeCard';
import { RESUMES } from '../../constants/Resumes';
export default function Resume() {
    return (
        <div className="px-4 lg:px-6">
            <div className="max-w-screen-xl mx-auto my-4 md:my-12">
                <h1 className="text-2xl md:text-4xl font-semibold font-workSans text-center mb-8">
                    Resume
                </h1>
                <div className="space-y-6 md:space-y-12">
                    {RESUMES.map(({ title, items }, index) => (
                        <ResumeCard key={index} title={title} items={items} />
                    ))}
                </div>
            </div>
        </div>
    );
}
