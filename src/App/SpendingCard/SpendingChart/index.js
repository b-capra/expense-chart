import './index.css'
import ChartBar from "./ChartBar"
import ChartLabel from './ChartLabel'

const SpendingChart = (data) => {
  const weeklySpend = data.data

  return (
    <div>
      <div className="chartContainer">
        {weeklySpend.map(dailySpend => 
          <ChartBar key={weeklySpend.indexOf(dailySpend)} amount={dailySpend.amount} />
        )}
      </div>
      <div className="labelContainer">
        {weeklySpend.map(dailySpend =>
          <ChartLabel key={weeklySpend.indexOf(dailySpend)} day={dailySpend.day} />  
        )}
      </div>
    </div>
  )
}

export default SpendingChart