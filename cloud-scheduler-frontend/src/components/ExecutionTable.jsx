const ExecutionTable = ({ cloudletLogs }) => (
  <div className="mt-6 overflow-x-auto">
    <table className="min-w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded shadow">
      <thead className="bg-gray-200 dark:bg-gray-700">
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">VM</th>
          <th className="p-2">Time</th>
          <th className="p-2">Start</th>
          <th className="p-2">End</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {cloudletLogs.map((log, idx) => {
          const [id, vm, time, start, end, status] = log.split(",");
          return (
            <tr
              key={idx}
              className="text-center border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="p-2">{id}</td>
              <td className="p-2">{vm}</td>
              <td className="p-2">{time}</td>
              <td className="p-2">{start}</td>
              <td className="p-2">{end}</td>
              <td className="p-2">{status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default ExecutionTable;
