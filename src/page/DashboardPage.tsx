import Button from '../components/common/Button';
import { LuLayoutDashboard } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import Card from '../components/common/Card';
import './dashboard.scss';
import './../style/responsive.scss';
import Widgets from '../components/widgets/Widgets';
import ReactBarChart from '../components/common/ReactBarChart';
import ReactTable from '../components/common/ReactTable';
import TaskCard from '../components/common/TaskCard';
import RadioButton from '../components/common/RadioButton';
import { FiUserPlus } from 'react-icons/fi';
import WorkflowCard from '../components/common/WorkflowCard';

const DashboardPage = () => {
  const user = {
    name: 'Ajay',
    role: 'Manager'
  };

  const baseRows = [
    { name: 'Anita', department: 'IT Services', assigned: 90, ongoing: 80, overdue: 90, completed: '90%' },
    { name: 'Rahul', department: 'Human Resources', assigned: 31, ongoing: 31, overdue: 31, completed: '31%' },
    { name: 'Priya', department: 'Sales Division', assigned: 45, ongoing: 45, overdue: 45, completed: '45%' },
    { name: 'Vikram', department: 'Research and Development', assigned: 79, ongoing: 79, overdue: 79, completed: '79%' },
  ];

  const data: typeof baseRows = [];

  for (let i = 0; i < 7; i++) {
    data.push(...baseRows);
  }

  const radioOptions = [
    {
      id: 'shift',
      title: 'Make shift & assign',
      description: 'Assign individuals to specific shifts based on availability and role requirements'
    },
    {
      id: 'menu',
      title: 'Menu correction',
      description: 'Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.'
    }
  ];


  const FaUser = FiUserPlus as unknown as React.FC;

  const taskData = [
    { taskName: 'Menu Planning', assignedTo: 'Ajay', status: 'Overdue', dueDate: '12-07-2024' },
    { taskName: 'Staff Scheduling', assignedTo: 'Niraj', status: 'Overdue', dueDate: '01-08-2023' },
    { taskName: 'Inventory management', assignedTo: 'Vijay', status: 'Overdue', dueDate: '02-09-2022' },
    { taskName: 'Customer Feedback Analysis', assignedTo: 'Arvind', status: 'Overdue', dueDate: '11-06-2025' },
    { taskName: 'Inventory management', assignedTo: 'Vijay', status: 'Overdue', dueDate: '02-09-2022' },
    { taskName: 'Customer Feedback Analysis', assignedTo: 'Arvind', status: 'Overdue', dueDate: '11-06-2025' },
    { taskName: 'Inventory management', assignedTo: 'Vijay', status: 'Overdue', dueDate: '02-09-2022' },
    { taskName: 'Customer Feedback Analysis', assignedTo: 'Arvind', status: 'Overdue', dueDate: '11-06-2025' },
    { taskName: 'Inventory management', assignedTo: 'Vijay', status: 'Overdue', dueDate: '02-09-2022' },
    { taskName: 'Customer Feedback Analysis', assignedTo: 'Arvind', status: 'Overdue', dueDate: '11-06-2025' },
  ];

  return (
    <>
      <main className='main__section'>
        <section className="row mx-0 px-0 justify-content-between align-items-center main__head-section">
          <h1 className='col-auto main__heading px-0 mb-0'>Good Evening ! {user.name}</h1>
          <Button icon={LuLayoutDashboard} label="Add Widgets" className='btn-secondary' />
        </section>
        <section className="row mx-0 px-0 card__section row-gap-md-0 row-gap-2">
          <div className="col-md-4 col-12 pe-xl-4 pe-md-2 ps-md-0 px-0 card-1">
            <Card icon={CiViewList} totalTasks={22} taskName={'Tasks'} statusItemName1={'Ongoing'} statusItemName2={'Overdue'} statusItemName3={'Completed'} statusNumber1={10} statusNumber2={2} statusNumber3={10} countColors={{ statusItem1: 'warning-color', statusItem2: 'danger-color', statusItem3: 'success-color' }} />
          </div>
          <div className="col-md-4 col-12 pe-xl-4 pe-md-2 ps-md-0 px-0 card-2">
            <Card icon={HiOutlineExclamationCircle} totalTasks={22} taskName={'Issues'} statusItemName1={'Open'} statusItemName2={'Ignored'} statusItemName3={'Resolved'} statusNumber1={10} statusNumber2={2} statusNumber3={10} countColors={{ statusItem1: 'warning-color', statusItem2: 'danger-color', statusItem3: 'success-color' }} />
          </div>
          <div className="col-md-4 col-12 px-md-0 px-0 card-3">
            <Card icon={CiViewList} totalTasks={20} taskName={'Workflows'} statusItemName1={'Ongoing Task'} statusItemName2={'Schduled Task'} statusItemName3={'Responses'} statusNumber1={10} statusNumber2={0} statusNumber3={10} countColors={{ statusItem1: 'warning-color', statusItem2: 'purple-color', statusItem3: 'success-color' }} />
          </div>
        </section>

        <section className='row mx-0 px-0 workflow__widget-section h-212px'>
          <Widgets title="Work Allocated" showTableTotalItem={false} showDropdown={true} showLinkIcon={false} showDots={true} showNavTab={true}>
            <>
              <div className="task__card-section d-flex flex-column gap-3">
                <div className="row mx-0 px-0">
                  <div className="col-lg-4 col-md-6 col-12 pe-md-3 pt-md-0 ps-md-0 px-0 py-2">
                    <TaskCard id={'#3789'} commentNumber={14} cardHeading={'How to Manage Stock'} date={'22 June, 2024'} time={'11:00 am'} className={'warning-color'} taskStatus={'Ongoing'} />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 pe-lg-3 pt-md-0 ps-md-0 px-0 py-2">
                    <TaskCard id={'#3789'} commentNumber={14} cardHeading={'How to Manage Stock'} date={'22 June, 2024'} time={'11:00 am'} className={'warning-color'} taskStatus={'Ongoing'} />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 pe-lg-0 pe-md-3 pt-lg-0 ps-md-0 px-0 py-2">
                    <TaskCard id={'#7182'} commentNumber={18} cardHeading={'Tracking Daily Earnings'} date={'12 October, 2024'} time={'11:00 am'} className={'warning-color'} taskStatus={'Ongoing'} />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 pe-lg-3 pb-lg-0 ps-md-0 px-0 py-2">
                    <TaskCard id={'#6047'} commentNumber={17} cardHeading={'Tool for Managing Reservations'} date={'12 October, 2024'} time={'11:00 am'} className={'success-color'} taskStatus={'Completed'} />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 pe-md-3 pb-md-0 ps-md-0 px-0 py-2">
                    <TaskCard id={'#6047'} commentNumber={17} cardHeading={'Tool for Managing Reservations'} date={'22 June, 2024'} time={'11:00 am'} className={'danger-color'} taskStatus={'Overdue'} />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 pb-md-0 px-0 py-2">
                    <TaskCard id={'#4820'} commentNumber={15} cardHeading={'Coordinating Employee Shifts'} date={'22 June, 2024'} time={'11:00 am'} className={'success-color'} taskStatus={'Completed'} />
                  </div>
                </div>
              </div>
            </>
          </Widgets>
        </section>

        <section className='row mx-0 px-0 employee__widget-section h-212px'>
          <Widgets title="Employee wise progress" showTableTotalItem={false} showDropdown={true} showLinkIcon={true} showDots={true} showNavTab={true}>
            <>
              <ReactTable data={data} rowsPerPage={20} />
            </>
          </Widgets>
        </section>

        <section className='row mx-0 px-0 double__widgets-section'>
          <div className="col-lg-6 col-12 px-0 notepad__widget-section">
            <Widgets title="Personal Notepad" showTableTotalItem={false} showDropdown={false} showLinkIcon={true} showDots={true}>
              <>
                <RadioButton options={radioOptions} />
              </>
            </Widgets>
          </div>
          <div className="col-lg-6 col-12 px-0 allocation__widget-section h-212px">
            <Widgets title="Department wise allocation" showTableTotalItem={false} showDropdown={false} showLinkIcon={false} showDots={true} showNavTab={true}>
              <ReactBarChart />
            </Widgets>
          </div>
        </section>

        <section className='row mx-0 px-0 double__widgets-section'>
          <div className="col-lg-6 col-12 px-0 overdue__widget-section">
            <Widgets title="Overdue tasks" tableTotalItem={10} showTableTotalItem={true} showDropdown={false} showLinkIcon={true} showDots={true}>
              <div className="table-container">
                <table className="data-table">
                  <thead className="table-light">
                    <tr>
                      <th>Task Name</th>
                      <th>Assigned to</th>
                      <th>Status</th>
                      <th>Due date</th>
                      <th className='text-center'>Reassign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskData.map((task, index) => (
                      <tr key={index}>
                        <td>{task.taskName}</td>
                        <td>{task.assignedTo}</td>
                        <td>
                          <span className="status-column">
                            {task.status}
                          </span>
                        </td>
                        <td>{task.dueDate}</td>
                        <td className='d-flex justify-content-center'>
                          <button className="btn btn-secondary d-flex justify-content-center align-items-center">
                            <FaUser />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Widgets>
          </div>
          <div className="col-lg-6 col-12 px-0 workflows__widget-section">
            <Widgets title="Workflows" showTableTotalItem={false} showDropdown={false} showLinkIcon={true} showDots={true}>
              <>
              <div className="task__card-section d-flex flex-column gap-3">
                <div className="row mx-0 px-0">
                  
                  <div className="col-md-6 col-12 pe-md-3 ps-md-0 pt-md-0 px-0 py-2">
                    <WorkflowCard cardTitle={'Stock Control Strategies'} responsesStatus={'Responses'} responsesStatusNumber={47} taskPart={'Task'} taskPartNumber={22} />
                  </div>
                  <div className="col-md-6 col-12 pe-md-0 ps-md-0 pt-md-0 px-0 py-2">
                    <WorkflowCard cardTitle={'How to Handle Inventory'} responsesStatus={'Responses'} responsesStatusNumber={23} taskPart={'Task'} taskPartNumber={15} />
                  </div>
                  <div className="col-md-6 col-12 pe-md-3 ps-md-0 px-0 py-2">
                    <WorkflowCard cardTitle={'Inventory Management Tips'} responsesStatus={'Responses'} responsesStatusNumber={56} taskPart={'Task'} taskPartNumber={30} />
                  </div>
                  <div className="col-md-6 col-12 pe-md-0 ps-md-0 px-0 py-2">
                    <WorkflowCard cardTitle={'Managing Your Stock Effectively'} responsesStatus={'Responses'} responsesStatusNumber={89} taskPart={'Task'} taskPartNumber={5} />
                  </div>
                  <div className="col-md-6 col-12 pe-md-3 ps-md-0 pb-md-0 px-0 py-2">
                    <WorkflowCard cardTitle={'Optimizing Your Inventory'} responsesStatus={'Responses'} responsesStatusNumber={10} taskPart={'Task'} taskPartNumber={45} />
                  </div>
                  <div className="col-md-6 col-12 pe-md-0 ps-md-0 pb-md-0 px-0 py-2">
                    <WorkflowCard cardTitle={'Stock Management Techniques'} responsesStatus={'Responses'} responsesStatusNumber={20} taskPart={'Task'} taskPartNumber={23} />
                  </div>
                </div>
              </div>
            </>
            </Widgets>
          </div>
        </section>
      </main>
    </>
  )
}

export default DashboardPage;