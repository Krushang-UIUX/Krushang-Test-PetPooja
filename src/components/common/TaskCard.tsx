import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { IoIosArrowUp } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TiFlowChildren } from 'react-icons/ti';


type TaskCardProps = {
  id: string;
  commentNumber?: number;
  cardHeading: string;
  date: string;
  time: string;
  className: string;
  taskStatus: string;
  taskType?: string;
};

const TaskCard: React.FC<TaskCardProps> = ({
  id = '',
  commentNumber,
  cardHeading = '',
  date = '',
  time = '',
  className = '',
  taskStatus = '',
  taskType = 'Inventory',
}) => {

  const UpArrow = IoIosArrowUp as unknown as React.FC;
  const CommentIcon = IoChatbubbleOutline as unknown as React.FC;
  const CalendarIcon = FaRegCalendarAlt as unknown as React.FC;
  const TimeIcon = GoClock as unknown as React.FC;
  const FlowIcon = TiFlowChildren as unknown as React.FC;

  return (
    <>
      <article className="task-card pointer">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-baseline flex-md-nowrap flex-wrap">
            <div className="d-flex flex-column gap-1">
              <div className="d-flex align-items-center justify-content-start id__section">
                <UpArrow />
                <span>ID {id}</span>
              </div>
              <h2 className='mb-0'>{cardHeading}</h2>
            </div>
            <div className="d-flex align-items-center justify-content-end comment__section">
              <CommentIcon />
              <span>{commentNumber}</span>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="d-flex flex-wrap date__time-section">
            <div className="d-flex align-items-center">
              <CalendarIcon />
              <span className='mb-0'>{date}</span>
            </div>
             <div className="d-flex align-items-center">
              <TimeIcon />
              <span className='mb-0'>{time}</span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-md-nowrap flex-wrap">
            <div className="d-flex align-items-center justify-content-start gap-2 flow__task">
                <FlowIcon />
                <span className={`border-1 ${className}`}>{taskStatus}</span>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <span className='task-type'>{taskType}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default TaskCard;
