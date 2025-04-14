import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const StrategyChart = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 text-center">
        📊 Strategy Comparison
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={[data]}>
          <XAxis dataKey="strategyName" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937", // dark background
              border: "none",
              color: "#fff",
            }}
          />
          <Bar dataKey="makespan" fill="#22c55e" name="Makespan" />
          <Bar dataKey="avgExecTime" fill="#fde68a" name="Avg Execution Time" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StrategyChart;
