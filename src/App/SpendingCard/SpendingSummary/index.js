import './index.css'

const SpendingSummary = () => {
  return (
    <div className="main">
      <div className="left">
        <p className="textTotal">Total this month</p>
        <p className='total'>$478.33</p>
      </div>
      <div className="right">
        <p className='percent'>+2.4%</p>
        <p className='textTotal'>from last month</p>
      </div>
    </div>
  )
}

export default SpendingSummary