import './index.css'
import ChartBar from "./ChartBar"

const SpendingChart = (data) => {
  const spending = data.data

  return (
    <div className="chartContainer">
      {spending.map(dailySpend => 
        <ChartBar key={spending.indexOf(dailySpend)} amount={dailySpend.amount} />
      )}
    </div>
  )
}

export default SpendingChart