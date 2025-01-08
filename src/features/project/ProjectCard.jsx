import Phone from '../../components/mockup/Phone';
import Laptop from '../../components/mockup/Laptop';

export default function ProjectCard({ title, description, image }) {
    return (
        <div className="border-t border-gray-300 py-8 md:py-0 md:pt-6 md:grid md:grid-cols-2 md:gap-10 md:items-center">
            <div className="space-y-3" data-aos="fade-right">
                <h2 className="text-xl md:text-2xl font-semibold font-workSans text-center md:text-left">
                    {title}
                </h2>
                <p className="font-avenir font-light text-sm md:text-base lg:text-[17px] text-justify">
                    {description}
                </p>
            </div>
            <div
                className="flex justify-center p-1.5 mt-4 md:mt-0 gap-4"
                data-aos="fade-left">
                {Array.isArray(image) ? (
                    image.map((img) => <Phone key={img} image={img} />)
                ) : (
                    <Laptop image={image} />
                )}
            </div>
        </div>
    );
}
