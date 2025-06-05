import React from 'react';


type WorkflowCardProps = {
    cardTitle: string;
    responsesStatus: string;
    responsesStatusNumber: number;
    taskPart: string;
    taskPartNumber: number;
};

const WorkflowCard: React.FC<WorkflowCardProps> = ({
    cardTitle,
    responsesStatus,
    responsesStatusNumber,
    taskPart,
    taskPartNumber,
}) => {

    return (
        <>
            <article className="workflow_card">
                <div className="card-header">
                    <h2 className='mb-0'>{cardTitle}</h2>
                </div>

                <div className="card-body d-flex justify-content-between">
                    <div className="status__item d-flex align-items-center gap-1">
                        <span className='mb-0'>{responsesStatus}</span>
                        <span className='status-number d-flex justify-content-center align-items-center'>{responsesStatusNumber}</span>
                    </div>
                    <div className="status__item d-flex align-items-center gap-1">
                        <span className='mb-0'>{taskPart}</span>
                        <span className='status-number d-flex justify-content-center align-items-center'>{taskPartNumber}</span>
                    </div>
                </div>
            </article>
        </>
    );
};

export default WorkflowCard;