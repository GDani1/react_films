import React from 'react';
import { Link } from 'react-router-dom';


type Props = {
  title: string;
};

export const Breadcrumb: React.FC<Props> = ({ title }) => (
  <div className=" bg-stone-500">
    <div className="max-w-screen-xl mx-auto px-6 py-4 text-slate-50 text-lg space-x-4">
      <Link
        to="/"
        className="hover:opacity-80 cursor-pointer duration-300 transition-opacity"
      >
        Home
      </Link>
      <span>|</span>
      <span>{title}</span>
    </div>
  </div>
);
