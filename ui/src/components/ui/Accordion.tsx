import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import './accordion.css';
import { useState } from 'react';
import Separator from './Separator';

type AccordionProps = {
  children: React.ReactNode;
  title: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="accordion__header">
        {title}
        <button className="accordion__button" onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? (
            <HiChevronUp className="accordion__button-chevron" />
          ) : (
            <HiChevronDown className="accordion__button-chevron" />
          )}
        </button>
      </div>
      <Separator />
      {isExpanded && children}
    </>
  );
};

export default Accordion;
