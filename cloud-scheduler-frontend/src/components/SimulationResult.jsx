import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import Controls from "./Controls";
import SummaryCards from "./SummaryCards";
import StrategyChart from "./StrategyChart";
import ExecutionTable from "./ExecutionTable";

const SimulationResult = () => {
  const [selectedStrategy, setSelectedStrategy] = useState("round");
  const [resultData, setResultData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/simulate/${selectedStrategy}`
      );
      setResultData({
        strategyName:
          selectedStrategy === "round" ? "Round Robin" : "Least Connection",
        makespan: response.data.makespan,
        avgExecTime: response.data.averageExecutionTime,
        cloudletLogs: response.data.cloudletLogs,
      });
    } catch (err) {
      console.error("Error fetching simulation data:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />
      <Controls
        selectedStrategy={selectedStrategy}
        setSelectedStrategy={setSelectedStrategy}
        onRun={fetchData}
      />

      {resultData && (
        <>
          <SummaryCards
            makespan={resultData.makespan}
            avgExecTime={resultData.avgExecTime}
          />
          <StrategyChart data={resultData} />
          <ExecutionTable cloudletLogs={resultData.cloudletLogs} />
        </>
      )}
    </div>
  );
};

export default SimulationResult;
