import React, { SetStateAction, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { GoLinkExternal } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import './widgets.scss';
import NavTabs from '../common/NavTabs';

type WidgetProps = {
  title: string;
  showTableTotalItem: boolean;
  tableTotalItem?: number;
  children: React.ReactNode;
  showDropdown?: boolean;
  showLinkIcon?: boolean;
  showDots?: boolean;
  showNavTab?: boolean;
};

const Widgets: React.FC<WidgetProps> = ({
  title,
  showTableTotalItem = true,
  tableTotalItem,
  children,
  showDropdown = true,
  showLinkIcon = true,
  showDots = true,
  showNavTab = false,
}) => {
  const [selectedemployee, setSelectedemployee] = useState('Select Employee');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const employees = ['Employee 1', 'Employee 2', 'Employee 3'];
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const selectemployee = (employee: SetStateAction<string>) => {
    setSelectedemployee(employee);
    setIsDropdownOpen(false);
  };

  const DownArrow = IoIosArrowDown as unknown as React.FC;
  const LinkExternal = GoLinkExternal as unknown as React.FC;
  const BsThreeDot = BsThreeDots as unknown as React.FC;

  const tabs = [
    { label: 'Tasks', count: 10 },
    { label: 'Issues', count: 10 },
    { label: 'Workflows', count: 10 },
  ];

  return (
    <div className='widget'>
      <div className="widget-container">
        <div className="d-flex flex-column">
          <div className="widget-header d-flex justify-content-between align-items-center flex-wrap gap-lg-2 gap-1">
            <div className="d-flex gap-2">
              <h3>{title}</h3>
              {showTableTotalItem ? <span className='table-count d-flex justify-content-center align-items-center'>{tableTotalItem}</span> : <></>}
            </div>
            <div className="widget-controls d-flex align-items-center justify-content-end">
              {showDropdown && (
                <div className="position-relative ps-2 ms-1 dropdown__menu">
                  <button
                    onClick={toggleDropdown}
                    className="btn d-flex align-items-center gap-3"
                  >
                    <div className="d-flex gap-2 align-items-center">
                      <span className="mr-2">{selectedemployee}</span>
                    </div>
                    <DownArrow />
                  </button>

                  {isDropdownOpen && (
                    <ul className="position-absolute w-full bg-white ps-0 mb-0 w-100 shadow-sm mt-1 rounded-3">
                      {employees.map((employee, idx) => (
                        <li
                          key={idx}
                          onClick={() => selectemployee(employee)}
                          className="py-1 px-3 pointer"
                        >
                          {employee}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              <div className="d-flex gap-1">
                {showLinkIcon && (
                  <button className="linkicon-btn">
                    <LinkExternal />
                  </button>
                )}
                {showDots && (
                  <button className='bsDots-btn'>
                    <BsThreeDot />
                  </button>
                )}
              </div>
            </div>
          </div>
          {showNavTab && ( <NavTabs tabs={tabs} />)}
        </div>
        <hr className="horizontal m-0" />
        <div className="widget-body">{children}</div>
      </div>
    </div>
  );
};

export default Widgets;
