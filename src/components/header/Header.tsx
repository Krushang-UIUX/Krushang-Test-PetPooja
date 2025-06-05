import { IoHomeOutline } from 'react-icons/io5';
import { SiTicktick } from "react-icons/si";
import { FiPlus } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { PiBuildingOfficeThin } from 'react-icons/pi';
import { IoChevronDown } from 'react-icons/io5';
import Link from '../common/Link';
import LogoImg from '../../assets/Images/logo.svg';
import './header.scss';
import Button from '../common/Button';
import { SetStateAction, useState } from 'react';

const Header = () => {

  const [selectedOutlet, setSelectedOutlet] = useState('Outlet name');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const outlets = ['PetPooja 1', 'PetPooja 2', 'PetPooja 3'];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const selectOutlet = (outlet: SetStateAction<string>) => {
    setSelectedOutlet(outlet);
    setIsDropdownOpen(false);
  };

  const CalendarIcon = FaRegCalendarAlt as unknown as React.FC;
  const BuildingIcon = PiBuildingOfficeThin as unknown as React.FC;
  const DownArrow = IoChevronDown as unknown as React.FC;
    
  return (
    <header className='d-flex align-items-center z-999' role="banner">
      <section className='logo__section'>
        <img src={LogoImg} alt="Your Brand Logo" />
      </section>
      <section className='header__link-section d-flex justify-content-md-between justify-content-end'>
        <Link href="/" icon={IoHomeOutline} label="Home" className='active' />
        <div className='d-flex align-items-center header__right-part'>
          <Link href="/" icon={SiTicktick} label='' />
          <Link href="/" icon={LuBell} label='' />
          <div className="position-relative d-flex align-items-center">
            <div className="d-flex align-items-center date__dropdown gap-3">
              <span className="mb-0">24-03-2001</span>
              <CalendarIcon />
            </div>

            <div className="position-relative ps-md-2 ms-md-1 dropdown__menu">
              <button
                onClick={toggleDropdown}
                className="btn d-flex align-items-center gap-3"
              >
                <div className="d-flex gap-2 align-items-center">
                  <BuildingIcon />
                  <span className="mr-2">{selectedOutlet}</span>
                </div>
                <DownArrow />
              </button>

              {isDropdownOpen && (
                <ul className="position-absolute w-full bg-white ps-0 mb-0 w-100 shadow-sm mt-1 rounded-3 z-999">
                  {outlets.map((outlet, idx) => (
                    <li
                      key={idx}
                      onClick={() => selectOutlet(outlet)}
                      className="py-1 px-3 pointer"
                    >
                      {outlet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <hr />
          <Button icon={FiPlus} label="Create" className='btn-primary' />
        </div>
      </section>
    </header>
  );
}

export default Header;
