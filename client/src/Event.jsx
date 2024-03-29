import React from "react";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Event() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* Event Cards */}
      <section className="mx-auto mt-12 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div  data-aos="fade-up" data-aos-duration="1000"  className=" mb-20">
            <h1 className="title-font mb-8 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              Event & Workshops
            </h1>
            {/* banner */}
            <div className="flex flex-col rounded-lg bg-gray-100 xl:flex-row shadow-xl">
              <img
                className=" roun w-auto rounded-t-lg xl:h-96 xl:rounded-l-lg xl:rounded-t-none"
                src="/img/algo.jpg"
                alt="banner"
              />
              <div className="p-10 xl:p-16">
              <div className=" mb-8">
                <h1 className=" mb-4 w-full text-2xl font-semibold text-blue-900">
                  Algorithm <span className=" text-blue-500">8.0</span>
                </h1>
                <p>
                Algorithm hackathon is an event where participants come together to solve real world problems, basically in a competitive environment.
                </p>
              </div>
              <div className="">
                <a
                  href="/eventdetails"
                  className=" focus:outline-none mt-10 rounded-full bg-green-400 p-2 px-4  text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-800 hover:shadow-none focus:ring"
                >
                   Upcoming
                </a>
              </div>
            </div>
            </div>
          </div>
          <div  data-aos="fade-up" data-aos-duration="1000"  className="mt-10 text-center">
            <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-900 lg:w-3/4 xl:w-2/4">
              Recent Events
            </p>
          </div>
          <section  className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {eventCard.map(events => (
              <EventCard  events={events} key={events.title} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}
