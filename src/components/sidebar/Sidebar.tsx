import React from 'react';
import Drawer from 'react-modern-drawer';
import Link from '../common/Link';
import { IoHomeOutline } from 'react-icons/io5';
import { CiViewList } from "react-icons/ci";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { TiFlowChildren } from "react-icons/ti";
import { MdOutlineCalendarMonth, MdLogout } from "react-icons/md";
import { GoBrowser, GoGraph } from "react-icons/go";
import { HiOutlineTemplate } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import './sidebar.scss';

const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(true)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    const ArrowBackIcon = IoIosArrowBack as unknown as React.FC;

    const user = {
        name: 'Ajay',
        role: 'Manager'
    };

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size={isOpen ? 250 : 70}
            >
                <circle className="close-icon pointer d-flex justify-content-center align-items-center" onClick={toggleDrawer} aria-label="Toggle sidebar">
                    <ArrowBackIcon />
                </circle>
                <div className="row mx-0 px-0 flex-column justify-content-between h-100 position-relative">
                    <ul className='sidebar__links'>
                        <li>
                            <Link href="/" icon={IoHomeOutline} label="Home" className='active' />
                        </li>
                        <li>
                            <Link href="/" icon={CiViewList} label="Task" />
                        </li>
                        <li>
                            <Link href="/" icon={HiOutlineExclamationCircle} label="Issues" />
                        </li>
                        <li>
                            <Link href="/" icon={TiFlowChildren} label="Web Flow" />
                        </li>
                        <li>
                            <Link href="/" icon={MdOutlineCalendarMonth} label="Calendar" />
                        </li>
                        <li>
                            <Link href="/" icon={GoBrowser} label="Browse Templates" />
                        </li>
                        <li>
                            <Link href="/" icon={HiOutlineTemplate} label="Template Library" />
                        </li>
                        <li>
                            <Link href="/" icon={LuUsers} label="User Management" />
                        </li>
                        <li>
                            <Link href="/" icon={GoGraph} label="Reports" />
                        </li>
                        <li>
                            <Link href="/" icon={MdLogout} label="Logout" />
                        </li>
                    </ul>

                    <div className="d-flex py-3 px-2 gap-2 align-items-center sidebar__user-panel">
                        <circle className="circle text-uppercase d-flex align-items-center justify-content-center">
                            {user.name.charAt(0)}
                        </circle>
                        <div className="d-flex flex-column user-profile">
                            <p className="mb-1">{user.name}</p>
                            <small>{user.role}</small>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Sidebar