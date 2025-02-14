/*eslint-disable*/
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/ExternalStyles.css";
import "../assets/styles/weddingcoms.css";
import "../assets/styles/LOGO.css";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slideshow from "../components/Cards/Slideshow.js";
import Testimonials from "../components/TestimonialList.jsx";

import { Heart } from "lucide-react";

export default function Index() {
  useEffect(() => {
    // Load the external script
    const script = document.createElement("script");
    script.src = "https://codepen.io/shshaw/pen/QmZYMG.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [filled, setFilled] = useState(false);
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px overflow-x-hidden">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Side Content */}
          <div className="main flex-1 items-center">
            <p>welcome to</p>
            <h1 className="mt-8 metal leading-relaxed font-medium text-center">
              DREAMDAYS_SL
            </h1>
            <p>
              <strong className="text-primary-500">
                Creating unforgettable weddings, one dream at a time.
              </strong>{" "}
              <button
                className="relative flex items-center justify-center p-3 transition duration-300 focus:outline-none focus:ring-0"
                onClick={() => {
                  setFilled(true);
                  document
                    .getElementById("next")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Heart Icon */}
                <Heart
                  className={`w-10 h-10 transition-all duration-700 ${
                    filled
                      ? "fill-red-500 text-red-500 scale-110 animate-fill"
                      : "text-black"
                  }`}
                />

                {/* Liquid Fill Effect (CSS) */}
                <style>
                  {`
          @keyframes fillEffect {
            0% { fill: transparent; }
            100% { fill: red; }
          }
          .animate-fill {
            animation: fillEffect 1s forwards;
          }
        `}
                </style>
              </button>
            </p>
          </div>

          {/* Slideshow Section */}
          <div className="right-section flex-1 items-center">
            <Slideshow />
          </div>
        </div>
      </section>

      <section
        id="next"
        className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100"
      >
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://i.pinimg.com/736x/82/ea/dd/82eaddc5202eb576dc054a9ee2153d76.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Make your special day Memorable
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    We don't just plan weddings; we craft love stories that last
                    a lifetime.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-handshake"></i>{" "}
                        {/* Updated icon */}
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Full-Service Wedding Planning
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Comprehensive planning and coordination from start to
                        finish.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Design and Styling Services
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Focused on creating the aesthetic and theme of the
                        wedding.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Partial Wedding Planning
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Assistance with specific aspects of the wedding
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Day-Of Coordination
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Management of the wedding day to ensure everything runs
                        smoothly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Wedding Services
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                From intimate ceremonies to grand celebrations, we provide
                everything you need for your dream wedding. Explore our
                exclusive services, tailored to make your special day
                unforgettable.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Venues
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Catering
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Photography
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Bridal Wear
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Decor & Themes
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Entertainment
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Invitations
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Honeymoon Packages
                </span>
              </div>
              <a
                href="https://yourweddingsite.com/services"
                target="_blank"
                className="font-bold text-yellow-600 hover:text-yellow-400 ease-linear transition-all duration-150"
              >
                Explore More{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div class="gallery">
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/1161372/pexels-photo-1161372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <img
                  alt="..."
                  src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-2 mr-auto ml-auto mt-32">
              <div className="gall">
                <img
                  src="https://images.pexels.com/photos/984923/pexels-photo-984923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="NextJS"
                />
                <img
                  src="https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="JavaScript"
                />
                <img
                  src="https://images.pexels.com/photos/1097768/pexels-photo-1097768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Angular"
                />
                <img
                  src="https://images.pexels.com/photos/5926234/pexels-photo-5926234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Vue.js"
                />
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-yellow-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-heart text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Pre-Wedding & Post-Wedding Services
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We offer complete assistance for both pre-wedding and
                post-wedding events, ensuring a seamless journey from proposal
                to honeymoon.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Let us handle everything while you cherish every moment of your
                big day.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Engagement Planning
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Pre-Wedding Photoshoots
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Bachelor & Bachelorette Parties
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Bridal Showers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Wedding Receptions
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Honeymoon Planning
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Anniversary Celebrations
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-white last:mr-0 mr-2 mt-2">
                  Thank You Notes & Gifts
                </span>
              </div>
              <a
                href="https://yourweddingsite.com/services"
                target="_blank"
                className="font-bold text-yellow-600 hover:text-yellow-400 ease-linear transition-all duration-150"
              >
                Explore More{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-yellow-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-calendar-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Event Itinerary</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Make and print a schedule for the big day! From wake-up to "I
                  dos," create a complete itinerary that guides you through
                  every special moment.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-100 mr-3">
                          <i className="fas fa-clock"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Customizable Wedding Day Timeline
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-100 mr-3">
                          <i className="fas fa-file-download"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Printable & Shareable Itinerary
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-500 bg-yellow-100 mr-3">
                          <i className="fas fa-bell"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Automatic Event Reminders
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="Pinterest Image"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="https://i.pinimg.com/736x/b4/c4/5e/b4c45e5bd4be25bf77308057ea9e423e.jpg" // Example direct link
              />
            </div>
          </div>
        </div>

        <div className="min-h-screen bg-gray-50 w-full py-12">
          <Testimonials />
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-ring text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Wedding Planning Services
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                At Dremdays SL, we specialize in creating the perfect wedding
                experience. From intimate ceremonies to grand celebrations, our
                expert planners ensure every detail is flawless. Let us help you
                bring your wedding vision to life.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Start your wedding planning journey today! Check out our
                portfolio and get inspired for your big day.
              </p>
              <a
                href="/portfolio"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Explore Portfolio
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  💍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Dreaming of your perfect wedding?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                At Dremdays SL, we specialize in turning your dream wedding into
                reality. Our expert planners handle every detail, so you can
                enjoy your big day stress-free. Whether it’s a luxurious
                celebration or an intimate affair, we’ll create an unforgettable
                experience.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/contact"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Start Planning
                </a>
                <a
                  href="/portfolio"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Explore Our Portfolio</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
