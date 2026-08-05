import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import moviePoster from "@/assets/images/movie-poster.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextJSIcon from "@/assets/icons/nextjs.svg";

import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Next.JS",
    iconType: NextJSIcon,
  },
];

const favoriteMovies = [
  { title: "The Godfather", href: "https://www.imdb.com/title/tt0068646/" },
  { title: "Shutter Island", href: "https://www.imdb.com/title/tt1130884/" },
  { title: "The Dark Knight", href: "https://www.imdb.com/title/tt0468569/" },
  { title: "On the Waterfront", href: "https://www.imdb.com/title/tt0047296/" },
  { title: "A Streetcar Named Desire", href: "https://www.imdb.com/title/tt0044081/" },
  { title: "Scent of a Woman", href: "https://www.imdb.com/title/tt0105323/" },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📸",
    left: "3%",
    top: "25%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "30%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "65%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
  {
    title: "  Movies",
    emoji: "🎬",
    left: "45%",
    top: "70%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "",
    top: "",
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28 scroll-mt-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse Into My World"
          description="Learn more about who i am, what i do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <Image
                src={moviePoster}
                alt=""
                fill
                aria-hidden="true"
                className="-z-10 object-cover opacity-20"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-800 via-gray-800/95 to-gray-900/70" />
              <CardHeader
                title="Movie Nights"
                description="A few movies I can watch again and again."
                className="pb-4 md:pb-4"
              />
              <div className="relative z-10 grid grid-cols-2 gap-2 px-6 pb-6 md:px-10">
                {favoriteMovies.map((movie) => (
                  <a
                    key={movie.href}
                    href={movie.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${movie.title} on IMDb`}
                    className="group flex min-w-0 items-center justify-between gap-1 rounded-lg border border-white/10 bg-gray-950/60 px-3 py-2 text-xs text-white/80 backdrop-blur transition hover:border-emerald-300/60 hover:bg-gray-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                  >
                    <span className="truncate">{movie.title}</span>
                    <span aria-hidden="true" className="shrink-0 text-emerald-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools i use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="mt-8" />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies
               beyond the digital realm."
                className="px-6 py-6"
              />

              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center px-6 gap-2
                 bg-gradient-to-r from-emerald-300
                  to-sky-400 rounded-full py-1.5
                  absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="h-full w-full object-cover object-left-top"
                src={mapImage}
                alt="Map"
              />
              <div
                className="absolute top-1/2 left-1/2 
             transform -translate-x-1/2 -translate-y-1/2 rounded-full
             bg-gradient-to-r from-emerald-300 to-sky-400 
             after:absolute after:inset-0 after:rounded-full 
              after:outline after:outline-4 after:outline-gray-300
             after:animate-pulse after:duration-9000 after:ease-in-out
             "
              >
                <Image className="size-20" src={smileEmoji} alt="Smile Emoji" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
