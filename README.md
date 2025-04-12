# Strategy Simulation Viewer

A React-based web application to visualize and compare different strategy simulation results. It fetches data from a backend API and displays performance metrics like makespan and average execution time in a bar chart. The UI is designed with a dark theme.

## Features

- **Strategy Selector**: Choose between different simulation strategies such as "Round Robin", "Least Connection", and "Genetic Algorithm".
- **Visualization**: View simulation results in a bar chart comparing the makespan and average execution time of different strategies.
- **Cloudlet Logs**: View logs associated with cloudlet execution.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Charting**: Recharts
- **Backend**: Node.js/Express (assumed, based on axios usage)
- **API Integration**: Axios for making API calls to fetch simulation data.

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/your-username/strategy-simulation-viewer.git
cd strategy-simulation-viewer

# Install dependencies
npm install

# Start the development server
npm start

# Make sure the backend API is running on http://localhost:8081 (or update the API URL if it's different)
