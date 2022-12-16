import './index.css'

const SpendingSummary = ({data}) => {
  const dailyAmts = data.map(dayObj => dayObj.amount)
  const total = dailyAmts.reduce((acc, cur) => acc + cur)
  

  return (
    <div className="main">
      <div className="left">
        <p className="textTotal">Total this month</p>
        <p className='total'>${total}</p>
      </div>
      <div className="right">
        <p className='percent'>+2.4%</p>
        <p className='textTotal'>from last month</p>
      </div>
    </div>
  )
}

export default SpendingSummary