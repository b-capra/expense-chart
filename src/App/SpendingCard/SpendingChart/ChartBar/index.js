import './index.css'

const ChartBar = ({data, current}) => {
  const varStyles = {
    height: `${Math.round(data.amount * 2.86)}px`
  }

  return (
    <div className='dayContainer'>
      <div className='hoverLabel'>${data.amount}</div>
      <div className={current ? 'bar current' : 'bar'} style={varStyles}></div>
      <div className='label'>{data.day}</div>
    </div>
  )
}

export default ChartBar