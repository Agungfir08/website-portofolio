export default function ResumeCard({ title, items }) {
    return (
        <div className="border-t border-gray-300 pt-6 grid grid-cols-1 md:grid-cols-2">
            <h2 className="text-xl md:text-2xl font-semibold font-workSans">
                {title}
            </h2>

            <ol className="relative border-s border-black mt-3 md:mt-0">
                {items.map((item, index) => (
                    <li
                        key={item.heading}
                        className={`ms-6 ${
                            index < items.length - 1 ? 'mb-8' : 'mb-4'
                        }`}>
                        <div className="absolute w-2.5 h-2.5 md:w-3 md:h-3 bg-black rounded-full mt-2 md:mt-[7px] -start-[5px] md:-start-[6px] border border-black"></div>
                        <div>
                            <time className="mb-1 text-sm md:text-base font-light font-avenir leading-none">
                                {item.date}
                            </time>
                            <h3 className="text-base md:text-lg  font-workSans font-semibold text-gray-900">
                                {item.heading}
                            </h3>
                            {Array.isArray(item.description) ? (
                                <ul className="list-disc pl-4 space-y-1">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>
                                            <p className="font-avenir font-light text-sm md:text-base ">
                                                {desc}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="font-avenir font-light text-sm md:text-base ">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
