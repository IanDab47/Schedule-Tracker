// Components
import Calendar from './components/Calendar';

export default function App() {
    return (
        <div className="mx-8 my-4">
            <h1 className="text-9xl">SCHEDULE</h1>
            <p className="text-lg">
                Look at your week. Set it up like a geek. Fill out your day.
                Complete it your way.
            </p>

            <Calendar />
        </div>
    );
}
