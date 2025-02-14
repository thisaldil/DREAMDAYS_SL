import React from "react";

const Testimonials = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              What couples are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Our wedding planners made their dream wedding come true!
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            {[...Array(3)].map((_, index) => (
              <div className="px-3 md:w-1/3" key={index}>
                {[
                  {
                    name: "Emily & Liam",
                    testimonial:
                      "They helped us organize everything down to the finest detail. It was a flawless wedding, and we couldn’t be happier!",
                  },
                  {
                    name: "Sarah & Tom",
                    testimonial:
                      "Our wedding day was perfect, thanks to their incredible planning and guidance. Highly recommend their service!",
                  },
                  {
                    name: "Sophie & Jacob",
                    testimonial:
                      "We were nervous about managing the big day, but the team took care of everything! It was everything we dreamed of and more.",
                  },
                  {
                    name: "Anna & Mark",
                    testimonial:
                      "From the venue to the décor, every little thing was handled expertly. We had the wedding of our dreams!",
                  },
                  {
                    name: "Rachel & Chris",
                    testimonial:
                      "We loved how they personalized every aspect of our wedding. The team was always available to answer our questions and make adjustments.",
                  },
                  {
                    name: "Olivia & James",
                    testimonial:
                      "The whole experience was seamless, and they made sure everything ran smoothly on our big day. We’re forever grateful.",
                  },
                ]
                  .slice(index * 2, index * 2 + 2)
                  .map((testimonial, i) => (
                    <div
                      className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
                      key={i}
                    >
                      <div className="w-full flex mb-4 items-center">
                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                          <img
                            src={`https://i.pravatar.cc/100?img=${
                              index * 2 + i + 1
                            }`}
                            alt=""
                          />
                        </div>
                        <div className="flex-grow pl-3">
                          <h6 className="font-bold text-sm uppercase text-gray-600">
                            {testimonial.name}.
                          </h6>
                        </div>
                      </div>
                      <div className="w-full">
                        <p className="text-sm leading-tight">
                          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                            "
                          </span>
                          {testimonial.testimonial}
                          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                            "
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* thisal dil */}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Find Us"
            href="https://www.instagram.com/dr.notorio.us/"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt="Buy me a beer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
