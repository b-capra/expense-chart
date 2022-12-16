import './index.css';
import SpendingChart from './SpendingChart';
import SpendingSummary from './SpendingSummary';

const SpendingCard = (data) => {
  return (
    <div className='spending-card'>
      <p className='heading'>Spending - Last 7 days</p>
      <SpendingChart data={data.data} />
      <div className='divider'></div>
      <SpendingSummary data={data.data} />
    </div>
  )
}

export default SpendingCard