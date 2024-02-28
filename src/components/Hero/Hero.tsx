import React from "react";
import { Img } from "react-image";
import { Link } from "react-router-dom";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
  id: number;
};

export const Hero: React.FC<Props> = ({ imgUrl, title, text, id }) => (
  <div className="relative w-full h-128 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900">
    <div className="relative flex flex-col-reverse h-full max-w-screen-xl mx-auto z-10 pb-12 text-left">
      <section className="text-white max-w-2xl px-6">
        <h2 className="font-bold mb-3 md:mb-6 flex flex-col">
          <span className="text-xl md:text-3xl mb-1 md:mb-2 text-slate-200">
            Today's top film:
          </span>
          <span className="text-3xl md:text-5xl ">{title}</span>
        </h2>
        <p className="text-lg mb-4 md:hidden">
          {text.length > 200 ? text.slice(0, 196) + "..." : text}
        </p>
        <p className="text-lg mb-6 hidden md:block">{text}</p>
        <Link
          to={`/film/${id}`}
          className="bg-zinc-500 rounded-full py-2 px-6 text-lg text-white inline-block hover:bg-zinc-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white font-semibold focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Full details
        </Link>
      </section>
    </div>
    <Img
      className="object-cover object-top -z-10 animate-fade-in absolute w-full h-full top-0 left-0"
      src={imgUrl}
      alt="hero"
    />
  </div>
);
