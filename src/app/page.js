import Banner from "@/components/Banner";
import TrendingIdeaCard from "@/components/TrendingIdeaCard";
import { getTrendingIdeas } from "@/lib/data";
import { IoMdTrendingUp } from "react-icons/io";

export default async function Home() {

  const trendingIdeas = await getTrendingIdeas();

  return (
    <div className="">
      <Banner />

      {/* ternding idea section */}
      <div className="w-11/12 max-w-7xl mx-auto my-15 md:my-30 py-6 md:py-15 px-4 bg-(--color-primary)/5 rounded-lg">
        <div className="text-center ">
          <h2 className="text-xl md:text-3xl font-semibold font-sora text-(--color-primary) flex justify-center items-center gap-2"><IoMdTrendingUp size={40} />Trending Ideas </h2>
          <p className="text-sm md:text-base text-(--color-text)/60 mt-2">See what the community is buzzing about right now</p>
        </div>

        {/* trending card */}
        <div className="min-h-40 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {
            trendingIdeas.map(idea =>  <TrendingIdeaCard key={idea._id} trendingIdea={idea}/>)
          }
        </div>
      </div>
    </div>
  );
}
