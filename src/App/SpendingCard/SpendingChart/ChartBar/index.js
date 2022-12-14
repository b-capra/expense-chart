import './index.css'

const ChartBar = (amount) => {
  const barLength = {
    height: `${Math.round(amount.amount * 2.86)}px`
  }

  return (
    <div className="bar" style={barLength}></div>
  )
}

export default ChartBar