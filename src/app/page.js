import Banner from "@/components/Banner";
import TrendingIdeaCard from "@/components/TrendingIdeaCard";
import { getTrendingIdeas } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
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
        <div className="min-h-40 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
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
    </div>
  );
}
