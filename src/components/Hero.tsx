import { HiArrowDown } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import profileImage from "../assets/images/profileImage2.jpg";

function Hero() {
  return (
    <section id="home">
      <div
        className="relative md:h-[calc(100vh-200px)] flex flex-col text-center items-center 
							justify-center animate-fadeIn animation-delay-2 my-10 py-16 
							sm:py-30 md:py-24 md:flex-row md:space-x-4 md:text-left
							"
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-pattern bg-hero"
        ></div>

        <div className="md:mt-2 md:w-1/2">
          <img
            src={profileImage}
            alt="Abdul Mannan - Senior Full Stack Engineer"
            width={320}
            className="rounded-3xl shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 relative">
          <h1
            className="heading text-4xl font-bold mt-6 md:mt-0 md:text-5xl 
									md:whitespace-nowrap md:-ml-4"
          >
            Hi, I'm Abdul Mannan!
          </h1>
          <p className="font-semibold text-xl mt-4 mb-6 md:text-2xl">
            <span className="">I'm a Senior Full Stack Engineer</span>
          </p>
          <p className="mt-4 mb-10 text-gray-300 md:text-lg">
            React | Next.js | TypeScript | Redux | GraphQL | Node.js
            <br />
            Tailwind CSS | ShadCN UI | Performance Optimization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <ScrollLink
              smooth={true}
              offset={-100}
              spy={true}
              to="contact"
              className="text-primary-foreground font-semibold px-6 py-3 bg-secondary rounded-lg cursor-pointer shadow hover:bg-accent transition"
            >
              Get In Touch
            </ScrollLink>
            <ScrollLink
              smooth={true}
              offset={-100}
              spy={true}
              to="projects"
              className="text-gray-300 font-semibold px-6 py-3 border border-gray-600 rounded-lg cursor-pointer shadow hover:bg-gray-800 transition"
            >
              View My Work
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </ScrollLink>
      </div>
    </section>
  );
}

export default Hero;
