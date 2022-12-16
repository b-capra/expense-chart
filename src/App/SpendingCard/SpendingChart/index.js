import './index.css'
import ChartBar from "./ChartBar"

const SpendingChart = (data) => {
  const weeklySpend = data.data

  return (
    <div className="chartContainer">
      {weeklySpend.map(dailySpend => 
        <ChartBar key={weeklySpend.indexOf(dailySpend)} data={dailySpend} />
      )}
    </div>
  )
}

export default SpendingChart