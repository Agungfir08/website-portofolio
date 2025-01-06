import { ANALOG } from '../../constants/analog';
import AnalogCard from './AnalogCard';
export default function Analog() {
    return (
        <div className="px-4 lg:px-6">
            <div className="max-w-screen-xl mx-auto my-4 md:my-12 space-y-4">
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-4xl font-semibold font-workSans text-center">
                        Analog
                    </h1>
                    <p className="text-center text-sm md:text-lg font-avenir">
                        The moment that I captured with my analog camera.
                        <br />
                        <strong>Old but Gold.</strong>
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {ANALOG.map((img) => (
                        <AnalogCard key={img} img={img} />
                    ))}
                </div>
            </div>
        </div>
    );
}
