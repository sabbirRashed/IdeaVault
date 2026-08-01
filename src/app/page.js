import Banner from "@/components/Banner";
import TrendingIdeaCard from "@/components/TrendingIdeaCard";
import { getTrendingIdeas } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong, FaComments, FaHandshake, FaLightbulb, FaUserPlus } from "react-icons/fa6";
import { IoMdTrendingUp } from "react-icons/io";

export default async function Home() {

  const trendingIdeas = await getTrendingIdeas();

  return (
    <div className="">
      <Banner />

      {/* ternding idea section */}
      <div className="w-11/12 max-w-7xl mx-auto my-15 md:my-30 py-6 md:py-15 px-4 bg-(--color-primary)/5 rounded-lg">
        <div className="text-center ">
          <h2 className="text-xl md:text-3xl font-semibold font-sora  flex justify-center items-center gap-2"><IoMdTrendingUp size={40} className="text-(--color-primary)" />Trending Ideas </h2>
          <p className="text-sm md:text-base text-(--color-text)/60 mt-2">See what the community is buzzing about right now</p>
        </div>

        {/* trending card */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {
            trendingIdeas.map(idea => <TrendingIdeaCard key={idea._id} trendingIdea={idea} />)
          }
        </div>
        <Link href={`/ideas`}
          className="flex justify-center items-center mt-6 md:mt-10">
          <Button size='sm' variant="outline" className={'text-xs border border-(--color-primary) hover:bg-(--color-primary)  text-(--color-primary) hover:text-white duration-300 transition-colors'}>
            View All <FaArrowRightLong />
          </Button>
        </Link>
      </div>


      {/* workflow section */}
      <div className="w-11/12 max-w-7xl mx-auto my-15 md:my-30 py-6 md:py-15 px-4  rounded-lg">
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-semibold font-sora">How It Works</h2>
          <p className="text-sm md:text-base text-(--color-text)/60 mt-2 max-w-80 md:max-w-[420px] mx-auto">From spark to reality - here's how SparkNest brings your ideas to life</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

          <div className="relative overflow-hidden bg-(--color-card) p-4 rounded-xl text-center border hover:border-(--color-primary)/60 hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14  rounded-2xl shadow-inner font-black font-sora bg-(--color-primary)/10 text-(--color-primary) flex justify-center items-center mx-auto">
              <FaUserPlus size={24} />
            </div>
            <h2 className="mt-4 text-sm md:text-lg font-semibold">Sign Up & Create Profile</h2>
            <p className="text-xs md:text-sm text-(--color-text)/60 mt-2">Join SparkNest in seconds and set up your creator profile.</p>
            <div className="absolute -top-8 -left-8  w-20 h-20 rounded-full bg-(--color-secondary)/10  "></div>
            <span className="absolute top-2 left-2 text-xs sm:text-sm text-(--color-secondary)">01</span>
          </div>

          <div className="relative overflow-hidden bg-(--color-card) p-4 rounded-xl text-center border hover:border-(--color-primary)/60 hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14  rounded-2xl shadow-inner font-black font-sora bg-(--color-primary)/10 text-(--color-primary) flex justify-center items-center mx-auto">
              <FaLightbulb size={24} />
            </div>
            <h2 className="mt-4 text-sm md:text-lg font-semibold">Share Your Idea</h2>
            <p className="text-xs md:text-sm text-(--color-text)/60 mt-2">Post your startup idea with details, tags, and category - make it easy for others to discover.</p>
            <div className="absolute -top-8 -left-8  w-20 h-20 rounded-full bg-(--color-secondary)/10  "></div>
            <span className="absolute top-2 left-2 text-xs sm:text-sm text-(--color-secondary)">02</span>
          </div>

          <div className="relative overflow-hidden bg-(--color-card) p-4 rounded-xl text-center border hover:border-(--color-primary)/60 hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14  rounded-2xl shadow-inner font-black font-sora bg-(--color-primary)/10 text-(--color-primary) flex justify-center items-center mx-auto">
              <FaComments size={24} />
            </div>
            <h2 className="mt-4 text-sm md:text-lg font-semibold">Get Feedback & Upvotes</h2>
            <p className="text-xs md:text-sm text-(--color-text)/60 mt-2">The community discovers, upvotes, and comments - refine your idea with real input.</p>
            <div className="absolute -top-8 -left-8  w-20 h-20 rounded-full bg-(--color-secondary)/10  "></div>
            <span className="absolute top-2 left-2 text-xs sm:text-sm text-(--color-secondary)">03</span>
          </div>

          <div className="relative overflow-hidden bg-(--color-card) p-4 rounded-xl text-center border hover:border-(--color-primary)/60 hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14  rounded-2xl shadow-inner font-black font-sora bg-(--color-primary)/10 text-(--color-primary) flex justify-center items-center mx-auto">
              <FaHandshake size={24} />
            </div>
            <h2 className="mt-4 text-sm md:text-lg font-semibold">Connect & Collaborate</h2>
            <p className="text-xs md:text-sm text-(--color-text)/60 mt-2">Find like-minded creators, collaborators, or supporters to bring the idea to life.</p>
            <div className="absolute -top-8 -left-8  w-20 h-20 rounded-full bg-(--color-secondary)/10  "></div>
            <span className="absolute top-2 left-2 text-xs sm:text-sm text-(--color-secondary)">04</span>
          </div>
        </div>
      </div>
    </div>
  );
}
