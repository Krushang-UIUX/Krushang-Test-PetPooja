import React from 'react';
import type { IconType } from 'react-icons';

type CardProps = {
  totalTasks: number;
  taskName: string;
  statusNumber1: number;
  statusNumber2: number;
  statusNumber3: number;
  countColors?: {
    statusItem1: string;
    statusItem2: string;
    statusItem3: string;
  };
  statusItemName1: string,
  statusItemName2: string,
  statusItemName3: string,
  icon: IconType;
};

const Card: React.FC<CardProps> = ({
  totalTasks,
  taskName,
  statusNumber1,
  statusNumber2,
  statusNumber3,
  countColors = {
    statusItem1: '',
    statusItem2: '',
    statusItem3: '',
  },
  icon: Icon,
  statusItemName1,
  statusItemName2,
  statusItemName3,
}) => {

  return (
    <>
      <article className="card p-lg-3 p-2">
        <div className="card-header">
          <div className="card-title d-flex">
            <div className='icon-bg'>
              {Icon({ 'aria-hidden': true })}
            </div>
            <h2>{totalTasks} {taskName}</h2>
          </div>
        </div>

        <div className="card-body d-flex align-items-center gap-3 row-gap-1 flex-wrap">
          <div className="status-item d-flex align-items-center gap-1">
            <span>{statusItemName1}</span>
            <circle className={`count d-flex justify-content-center align-items-center ${countColors?.statusItem1}`}>{statusNumber1}</circle>
          </div>
          <div className="status-item d-flex align-items-center gap-1">
            <span>{statusItemName2}</span>
            <circle className={`count d-flex justify-content-center align-items-center ${countColors?.statusItem2}`}>{statusNumber2}</circle>
          </div>
          <div className="status-item d-flex align-items-center gap-1">
            <span>{statusItemName3}</span>
            <circle className={`count d-flex justify-content-center align-items-center ${countColors?.statusItem3}`}>{statusNumber3}</circle>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
