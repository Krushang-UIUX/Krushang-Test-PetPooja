import React, { useState } from 'react';

type DataRow = {
  name: string;
  department: string;
  assigned: number;
  ongoing: number;
  overdue: number;
  completed: string;
};

type ReactTableProps = {
  data: DataRow[];
  rowsPerPage?: number;
};

const ReactTable: React.FC<ReactTableProps> = ({ data, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Assigned</th>
            <th>Ongoing</th>
            <th>Overdue</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.department}</td>
              <td>{row.assigned}</td>
              <td>{row.ongoing}</td>
              <td>{row.overdue}</td>
              <td>{row.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className='btn btn-secondary' onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className='btn btn-secondary' onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReactTable;
