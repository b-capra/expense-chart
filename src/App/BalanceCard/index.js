import './index.css';
import logo from '../../logo.svg'

const BalanceCard = () => {
  return (
    <div className='balance-card'>
      <div className='balance'>
        <p className='text'>My balance</p>
        <p className='amount'>$921.48</p>
      </div>
      <img src={logo} className='logo' />
    </div>
  )
}

export default BalanceCard