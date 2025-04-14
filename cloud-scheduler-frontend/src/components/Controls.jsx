const Controls = ({ selectedStrategy, setSelectedStrategy, onRun }) => (
  <div className="flex gap-4 items-center">
    <select
      className="p-2 border rounded"
      value={selectedStrategy}
      onChange={(e) => setSelectedStrategy(e.target.value)}
    >
      <option value="round">Round Robin</option>
      <option value="least">Least Connection</option>
    </select>
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      onClick={onRun}
    >
      Run Simulation
    </button>
  </div>
);

export default Controls;
