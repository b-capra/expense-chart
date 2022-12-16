import './index.css'
import ChartBar from "./ChartBar"

const SpendingChart = ({data}) => {
  const currentDay = new Date().toString().slice(0, 3).toLowerCase()

  return (
    <div className="chartContainer">
      {data.map(dailySpend => 
        <ChartBar 
          key={data.indexOf(dailySpend)} 
          data={dailySpend} 
          current={dailySpend.day === currentDay ? true : false}
        />
      )}
    </div>
  )
}

export default SpendingChart