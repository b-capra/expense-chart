import './index.css';
import SpendingChart from './SpendingChart';

const SpendingCard = (data) => {
  return (
    <div className='spending-card'>
      <p className='heading'>Spending - Last 7 days</p>
      <SpendingChart data={data.data} />
    </div>
  )
}

export default SpendingCard