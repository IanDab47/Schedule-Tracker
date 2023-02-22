// Styles
import './style.css';

export default function Calendar() {
    return (
        <section className="CALENDAR flex justify-between text-center w-5/6 max-w-screen-xl rounded-xl p-8 mx-auto my-8 bg-zinc-900">
            <div className="DAY w-1/2">
                <p></p>
            </div>
            <div className="DAY">
                <p>Sunday</p>
            </div>
            <div className="DAY">
                <p>Monday</p>
            </div>
            <div className="DAY">
                <p>Tuesday</p>
            </div>
            <div className="DAY">
                <p>Wednesday</p>
            </div>
            <div className="DAY">
                <p>Thursday</p>
            </div>
            <div className="DAY">
                <p>Friday</p>
            </div>
            <div className="DAY">
                <p>Saturday</p>
            </div>
        </section>
    );
}
