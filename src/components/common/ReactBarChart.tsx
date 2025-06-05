import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { department: 'dept 1', tasks: 15, overdue: 5 },
    { department: 'dept 2', tasks: 35, overdue: 5 },
    { department: 'dept 3', tasks: 40, overdue: 20 },
    { department: 'dept 4', tasks: 70, overdue: 20 },
    { department: 'dept 5', tasks: 70, overdue: 20 },
    { department: 'dept 6', tasks: 70, overdue: 20 },
    { department: 'dept 7', tasks: 70, overdue: 20 },
];

const formattedData = data.map(d => {
    return {
        department: d.department,
        tasks: d.tasks,
        overdue: d.overdue,
    };
});

const COLORS = {
    tasks: '#99CFB5',      
    overdue: '#FFDD9D',   
};

const ReactBarChart = () => (
    <>
    <div className="col-12 px-0 d-flex justify-content-end gap-3 mb-2">
        <Legend
                payload={[
                    { value: 'Tasks', type: 'square', color: COLORS.tasks },
                    { value: 'Overdue Tasks', type: 'square', color: COLORS.overdue },
                ]}
            />
    </div>
    <ResponsiveContainer width="100%" height={200}>
        <BarChart data={formattedData} barCategoryGap={20}>
            <XAxis dataKey="department" tick={{ fill: '#999' }} />
            <YAxis tickFormatter={(val) => `${val}%`} tick={{ fill: '#999' }} domain={[0, 100]} />
            <Tooltip formatter={(value) => {
                if (typeof value === 'number') {
                    return `${value.toFixed(1)}%`;
                }
                return value;
            }} />
            <Bar dataKey="tasks" stackId="a" fill={COLORS.tasks} />
            <Bar dataKey="overdue" stackId="a" fill={COLORS.overdue} radius={[8, 8, 0, 0]} />
        </BarChart>
    </ResponsiveContainer>
    </>
);

export default ReactBarChart;