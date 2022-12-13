import './index.css';
import BalanceCard from './BalanceCard';
import SpendingCard from './SpendingCard';
import data from '../data.json'

const App = () => {
  return (
    <div className="app">
      <BalanceCard />
      <SpendingCard data={data} />
      <div className='attribution'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/b-capra/expense-chart">Brett Capra</a>.
      </div>
    </div>
  );
}

export default App;
