import React from 'react';
import type { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  const { name, description, icon, url, bgColor, hoverBgColor, textColor, shadowColor } = subject;

  return (
    <a
      href={url || '#'}
      target={url ? "_blank" : "_self"}
      rel={url ? "noopener noreferrer" : ""}
      onClick={onClick}
      className={`
        group
        block 
        p-8 
        rounded-2xl 
        ${bgColor}
        ${textColor}
        shadow-lg
        ${shadowColor}
        transform
        transition-all
        duration-300
        ease-in-out
        hover:scale-105
        hover:shadow-2xl
        ${hoverBgColor}
        hover:-translate-y-2
      `}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-white/50 rounded-full">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-base opacity-90">{description}</p>
        <span className="
          inline-block 
          mt-4 
          px-4 
          py-2 
          text-sm 
          font-semibold 
          bg-white/60 
          rounded-full 
          opacity-0 
          group-hover:opacity-100
          transition-opacity
          duration-300
          ease-in-out
        ">
          Explore &rarr;
        </span>
      </div>
    </a>
  );
};

export default SubjectCard;
