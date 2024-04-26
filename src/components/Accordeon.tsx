import React, { useState } from 'react';
import { FiChevronDown, FiChevronLeft } from 'react-icons/fi';

interface AccordionItem {
  id: string;
  label: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = () => {
      if (index === expandedIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(index);
      }
    };

    return (
      <div onClick={handleClick} key={item.id} className="p-3 flex flex-col">
        <div className="cursor-pointer flex items-center text-2xl p-3 w-fit font-bold text-start bg-white/80 rounded-md">
          {item.label}
          {!isExpanded ? <FiChevronDown /> : <FiChevronLeft />}
        </div>
        {isExpanded && (
          <div className="flex w-full mx-auto p-3 m-2 text-xl bg-sky-600/60 text-white rounded-md">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="flex flex-col align-start p-5 w-full text-start h-[320px]">
      {renderItems}
    </div>
  );
};

export default Accordion;
