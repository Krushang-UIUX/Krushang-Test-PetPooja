import React, { useState } from 'react';

type Tab = {
  label: string;
  count: number;
};

type NavTabsProps = {
  tabs: Tab[];
};

const NavTabs: React.FC<NavTabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="nav-tabs d-flex gap-2 position-relative">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={`tab d-flex gap-2 align-items-center ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="label">{tab.label}</span>
            <span className="count d-flex align-items-center gap-2 justify-content-center">{tab.count}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavTabs;