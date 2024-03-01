/* eslint-disable react/prop-types */
import { HiGlobe, HiOutlineHeart, HiSearch, HiStar } from "react-icons/hi";
import { MdImportContacts } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { LiaDotCircle } from "react-icons/lia";
import { GiHamburger } from "react-icons/gi";
import { BiChart } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { TbWhirl } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { PiPaintBrushThin } from "react-icons/pi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiPencilSquare } from "react-icons/hi2";
import { TiWaves } from "react-icons/ti";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

/* eslint-disable react/no-unescaped-entities */

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const Categories = ({ icon, title, opening }) => {
    return (
      <div className="bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl">
        <span className="flex items-center gap-x-4">
          <img src={icon} alt="" width={30} /> <p>{title}</p>
        </span>
        <p>{opening} Opening</p>
      </div>
    );
  };

  const Recommended = ({
    time,
    type,
    title,
    amount,
    country,
    job,
    bgColor,
    color,
  }) => {
    return (
      <div
        className="w-full rounded-[10px] shadow"
        style={{ borderLeft: `6px solid ${color}` }}
      >
        <div className="bg-white w-full p-8 rounded-t-[10px]">
          <span className="flex items-start justify-between">
            <span className="flex-1 md:flex items-start lg:gap-x-8 gap-x-4 lg:text-2xl text-lg">
              <button
                className="p-4 rounded-md border-none outline-none md:mb-0 mb-4"
                style={{ backgroundColor: `${bgColor}` }}
              >
                <GrAnnounce size={30} style={{ color: `${color}` }} />
              </button>
              <p>Type: {type}</p> <p>Time: {time} years ago</p>
            </span>
            <HiOutlineHeart className="text-2xl" />
          </span>
          <div className="md:pl-24">
            <p className="text-2xl font-semibold md:mt-0 mt-4">{title}</p>
            <p className="text-xl pt-4">Euro {amount} / Yearly</p>
          </div>
        </div>
        <div
          className="py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px] border border-solid border-[#e2e4e7]"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="flex-1 md:flex items-center gap-x-8 text-2xl ">
            <span className="flex items-center gap-x-3">
              <IoLocationOutline
                className="text-2xl"
                style={{ color: `${color}` }}
              />
              <p className="text-xl font-light">{country}</p>|{" "}
            </span>

            <span className="flex items-center gap-x-3 lg:py-0 py-4">
              <LiaDotCircle
                className="text-2xl"
                style={{ color: `${color}` }}
              />
              <p className="text-xl font-light">{job}</p>
            </span>
          </div>
          <button className="rounded-full bg-white border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">
            Apply Now
          </button>
        </div>
      </div>
    );
  };

  const Jobs = ({ type, img, title, color, bg_color }) => {
    return (
      <div className="shadow lg:w-[95%] mt-12">
        <div className="bg-white rounded-t-md px-6 py-8 flex flex-col items-center">
          <span className="flex items-center justify-between w-full">
            <button
              className={`rounded-full bg-transparent text-lg text-black px-8 py-2 outline-none border-none hoverBtn`}
              style={{ border: `3px solid ${color}` }}
            >
              {type}
            </button>
            <HiOutlineHeart className="text-3xl" />
          </span>
          <img src={img} alt="" className="w-28 h-28 rounded-full my-8" />
        </div>
        <div
          className="rounded-b-md px-6 py-8"
          style={{ backgroundColor: `${bg_color}` }}
        >
          <p className="text-2xl font-semibold">{title}</p>
          <p className="py-2 text-lg">803 46th St Brooklyn, NY</p>
          <div className="pb-4">
            {[...Array(5)].map((_, index) => {
              index += 1;

              return <HiStar key={index} className="text-[#FFCC02] text-2xl" />;
            })}
          </div>
          <div className="p-2 border border-solid border-[#e2e4e7] rounded-md flex justify-between text-sm">
            <p>Salary</p>
            <p style={{ color: `${color}` }}>Rs. 3,457.00</p>
          </div>
        </div>
      </div>
    );
  };

  const Offers = ({
    icon1,
    title,
    position,
    location,
    type,
    company,
    icon2,
    bg1,
    color,
    bg2,
  }) => {
    return (
      <div className="bg-white rounded-[10px] px-6 py-8 flex flex-col justify-center gap-12 shadow transition-shadow hover:bg-light">
        <div className="flex items-center gap-x-4">
          <button
            className="p-2 rounded-full bg-[#f4fefe] border-none outline-none text-4xl"
            style={{ background: `${bg1}`, color: `${color}` }}
          >
            {icon1}
          </button>
          <span>
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-lg">20 Opening</p>
          </span>
        </div>
        <div>
          <p className="text-3xl font-semibold">{position}</p>
          <span className="flex flex-wrap gap-x-4 items-center justify-between text-xl pt-4">
            <p className="flex items-center gap-x-2">
              <HiGlobe className="text-2xl" /> {location}
            </p>
            <p className="text-[#93979d]">{type}</p>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>
            <p className="text-[#93979d] text-lg">June 8, 2022 by</p>
            <p className="text-xl font-medium">{company}</p>
          </span>
          <button
            className="rounded-[10px] p-2 text-white border-none outline-none"
            style={{ backgroundColor: `${bg2}` }}
          >
            {icon2}
          </button>
        </div>
      </div>
    );
  };

  const logos = [
    "/microsoft.png",
    "/dropbox.png",
    "/amazon.png",
    "/google2.png",
  ];

  const duplicatedImages = [];
  while (duplicatedImages.length < 10) {
    duplicatedImages.push(...logos);
  }

  return (
    <main className="bg-[#fafbfc] pt-24">
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-6">
        <h1 className="xl:text-7xl lg:text-5xl sm:text-3xl text-2xl xl:leading-normal lg:leading-normal font-bold text-center">
          Find your{" "}
          <span className="bg-primary text-white whitespace-pre">
            dream jobs
          </span>{" "}
          in <br />
          New Castle
        </h1>
        <p className="text-2xl lg:w-1/2 text-center leading-10 my-8">
          When you're searching for a job, there are a few things you can do to
          get the most out of your search
        </p>
        <div className="flex items-center border-2 border-solid border-primary rounded-full h-16 lg:w-2/5 w-full py-2 relative mt-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="bg-transparent h-full w-full border-none outline-none absolute px-20 xl:text-2xl text-base"
          />
          <button className="bg-primary rounded-full text-white w-12 h-12 absolute left-2 border-none">
            <HiSearch className="text-2xl" />
          </button>
          <span className="flex items-center bg-[#f3f3f4] absolute right-2 rounded-full lg:px-4 px-2 h-[90%] xl:text-xl text-sm font-normal gap-x-2">
            <IoLocationOutline className="text-black lg:text-2xl" /> Any
            location
          </span>
        </div>
      </section>
      <section className="bg-[#f5f6fc]">
        <div className="container mx-auto px-6 py-24">
          <div className="md:flex items-center justify-between">
            <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
              Recommended Jobs
            </h2>
            <span className="md:flex gap-x-4">
              <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">
                Latest Job
              </button>
              <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">
                Premium Jobs
              </button>
            </span>
          </div>
          <p className="text-2xl mt-4 font-light">
            Explore Suggested Job Searches
          </p>
          <div className="xl:flex gap-x-8 mt-16">
            <div className="xl:w-2/5">
              <div className="bg-white rounded-[10px] py-8 pl-6 mb-4">
                <h2 className="text-4xl font-semibold">Job Categories</h2>
              </div>
              <div className="flex flex-col gap-y-4">
                <Categories
                  icon="/bus_icon.png"
                  opening="3"
                  title="Automotive"
                />
                <Categories
                  icon="/heart_icon.png"
                  opening="1"
                  title="Health and care"
                />
                <Categories
                  icon="/construction_icon.jpeg"
                  opening="2"
                  title="Construction"
                />
                <Categories
                  icon="/fitness_icon.jpeg"
                  opening="1"
                  title="Fitness Trainer"
                />
                <Categories
                  icon="/train_icon.jpeg"
                  opening="0"
                  title="Industry"
                />
                <Categories
                  icon="/bus_icon.png"
                  opening="3"
                  title="Automotive"
                />
                <Categories
                  icon="/heart_icon.png"
                  opening="1"
                  title="Health and care"
                />
                <Categories
                  icon="/construction_icon.jpeg"
                  opening="2"
                  title="Construction"
                />
              </div>
            </div>
            <div className="xl:w-3/5 flex flex-col gap-y-3 xl:mt-0 mt-4">
              <Recommended
                amount="3000-4000"
                bgColor="#f4f4ff"
                color="#4b4efc"
                country="Germany"
                job="Construction"
                time="4"
                title="Project manager"
                type="Temporary"
              />
              <Recommended
                amount="1000-2000"
                bgColor="#fbf2f6"
                color="#b70041"
                country="Australia"
                job="Development, Apps"
                time="2"
                title="Assistant manager"
                type="Internship"
              />
              <Recommended
                amount="2000-3000"
                bgColor="#fffbf2"
                color="#ffb800"
                country="USA"
                job="Engineering"
                time="1"
                title="IOS Engineer Backup"
                type="Contract"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fafbfc]">
        <div className="container mx-auto px-6 py-24">
          <div className="md:flex items-center justify-between">
            <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
              Top Company Registered
            </h2>
            <span className="md:flex gap-x-4">
              <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">
                Browse Jobs
              </button>
              <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">
                See all companies
              </button>
            </span>
          </div>
          <p className="text-2xl mt-4 font-light">
            Know your worth and find the job that qualify your life
          </p>
          {/* <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"> */}
          <div>
            <Carousel
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite
              showDots
              autoPlay={true}
              // autoPlaySpeed={2000}
              arrows={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
            >
              <Jobs
                bg_color="#f4f4ff"
                color="#4b4efc"
                img="/google.png"
                title="Product Design"
                type="Internship"
              />
              <Jobs
                bg_color="#fffbf2"
                color="#fec220"
                img="/pinterest.jpeg"
                title="Product Mockup"
                type="Internship"
              />
              <Jobs
                bg_color="#fbf2f6"
                color="#c72b66"
                img="/spotify.png"
                title="Web Maintenance"
                type="Full Time"
              />
              <Jobs
                bg_color="#e8f3ea"
                color="#349c30"
                img="/dribble.png"
                title="PHP Developer"
                type="Remote"
              />
            </Carousel>
          </div>

          {/* </div> */}
        </div>
      </section>
      <section className="bg-[#fcfaf6]">
        <div className="container mx-auto px-6 py-24">
          <div className="md:flex items-center justify-between">
            <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
              Featured Job Offers
            </h2>
            <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">
              All Job Offers
            </button>
          </div>
          <p className="text-2xl mt-4 font-light">
            Know your worth and find the job that qualify your life
          </p>
          <div className="mt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <Offers
              bg1="#f4fefe"
              bg2="black"
              color="#1ae4e8"
              company="Gramware"
              icon1={<BiChart size={40} />}
              icon2={<HiPencilSquare size={30} />}
              location="San Diego, CA"
              position="Financial Analyst"
              title="Finance"
              type="Full Time"
            />
            <Offers
              bg1="#f5fef8"
              bg2="#457b9d"
              color="#25ef75"
              company="Syspresoft"
              icon1={<PiPaintBrushThin size={40} />}
              icon2={<GiHamburger size={30} />}
              location="San Diego, CA"
              position="Web Developer"
              title="Development"
              type="Internship"
            />
            <Offers
              bg1="#fefaf4"
              bg2="#e76f51"
              color="#d9b833"
              company="DataRes"
              icon1={<GrAnnounce size={40} />}
              icon2={<MdImportContacts size={30} />}
              location="San Diego, CA"
              position="Team Leader"
              title="Marketing"
              type="Remote"
            />
            <Offers
              bg1="#f7fcfd"
              bg2="#f4a261"
              color="#5eb9d7"
              company="Craftgenics"
              icon1={<IoPersonCircleSharp size={40} />}
              icon2={<TbWhirl size={30} />}
              location="Los Angeles"
              position="Coordinator"
              title="Human Resource"
              type="Contract"
            />

            <Offers
              bg1="#fff9f6"
              bg2="#457b9d"
              color="#ff8c48"
              company="Syspresoft"
              icon1={<FaHeartPulse size={40} />}
              icon2={<GiHamburger size={30} />}
              location="San Diego, CA"
              position="Coordinator"
              title="Health and Care"
              type="Internship"
            />
            <Offers
              bg1="#fff9f7"
              bg2="#f4a261"
              color="#ff843d"
              company="Gramware"
              icon1={<FaCalculator size={40} />}
              icon2={<TbWhirl size={30} />}
              location="Los Angeles"
              position="Senior Editor"
              title="Accounting"
              type="Contract"
            />
            <Offers
              bg1="#f7fcfd"
              bg2="#4895ef"
              color="#69bfd9"
              company="DataRes"
              icon1={<IoPersonCircleSharp size={40} />}
              icon2={<HiPencilSquare size={30} />}
              location="San Diego, CA"
              position="Support Engineer"
              title="Customer Services"
              type="Full Time"
            />
            <Offers
              bg1="#f6f6ff"
              bg2="#e76f51"
              color="#4b4efc"
              company="Gramware"
              icon1={<GoLaw size={40} />}
              icon2={<TiWaves size={30} />}
              location="Los Angeles"
              position="Web Developer"
              title="Designer"
              type="Remote"
            />
          </div>
        </div>
      </section>
      <section className="text-center py-24 container mx-auto px-6">
        <h2 className="lg:text-5xl text-2xl font-semibold">
          Why Customers Love Us
        </h2>
        <p className="text-2xl mt-4 font-light">
          What our customers say about us
        </p>
        <div className="flex items-center justify-center mt-16 pb-12 gap-x-2 lg:w-1/2 mx-auto">
          <FaChevronLeft size={30} />
          <p className="text-2xl leading-10">
            Each day, I'm inspired by my colleagues to drive innovation that
            accomplishes this. Jobline an environment of trust and support where
            I can drive customer success.
          </p>
          <FaChevronRight size={30} />
        </div>
        <p className="text-3xl font-semibold">Lubosek Hnilo</p>
        <p className="text-xl pt-4">Syspresoft</p>
        <div className="flex items-center lg:gap-12 gap-3 overflow-hidden my-24">
          {duplicatedImages.slice(0, 10).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`logo ${index + 1}`}
              className="lg:w-60 w-40 h-14 object-contain"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
