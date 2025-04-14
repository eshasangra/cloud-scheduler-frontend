const SummaryCards = ({ makespan, avgExecTime }) => (
  <div className="grid grid-cols-2 gap-4 my-4">
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center text-gray-900 dark:text-gray-100">
      <h4 className="text-md font-semibold">Makespan</h4>
      <p className="text-2xl font-bold">{makespan} ms</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center text-gray-900 dark:text-gray-100">
      <h4 className="text-md font-semibold">Average Execution Time</h4>
      <p className="text-2xl font-bold">{avgExecTime} ms</p>
    </div>
  </div>
);

export default SummaryCards;
