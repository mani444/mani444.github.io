import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <div
        className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-pattern bg-about"
        ></div>
        <div className="md:w-3/5">
          <h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
            About
            <hr
              className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
            />
          </h2>
          <p>
            I'm a <span className="font-bold">Senior Full Stack Engineer</span>{" "}
            based in Pakistan with over 7 years of experience building web
            applications that people actually enjoy using. I've spent most of my
            career working with{" "}
            <span className="font-bold">React and TypeScript</span>, but what I
            really love is taking complex product ideas and turning them into
            clean, performant applications.
          </p>
          <br />

          <p>
            I've built component libraries that teams actually use (instead of
            rebuilding the same buttons over and over), migrated legacy jQuery
            applications to modern React, and helped improve app performance
            significantly.{" "}
          </p>
          <br />

          <p>
            When I'm not coding, I'm usually{" "}
            <span className="font-bold">mentoring other developers</span> or
            figuring out how to make things faster and more accessible. I'm
            experienced with{" "}
            <span className="font-bold">remote collaboration</span> and
            comfortable working with different timezones.{" "}
          </p>
          <br />

          <p>
            Currently{" "}
            <span className="font-bold">
              available for remote opportunities
            </span>{" "}
            with companies building meaningful products. If you're working on
            something interesting, I'd love to{" "}
            <ScrollLink
              smooth={true}
              offset={-100}
              spy={true}
              to="contact"
              className="font-bold text-teal-500 cursor-pointer hover:underline"
            >
              get in touch!
            </ScrollLink>
          </p>
        </div>
        <div className="md:w-1/3">
          <img src={aboutImage} alt="Profile image" width={420} />
        </div>
      </div>
    </section>
  );
}

export default About;
