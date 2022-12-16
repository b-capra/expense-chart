import './index.css'

const ChartBar = (data) => {
  const varStyles = {
    height: `${Math.round(data.data.amount * 2.86)}px`
  }

  const currentDay = new Date().toString().slice(0, 3).toLowerCase()
  if (currentDay === data.data.day) varStyles.background = 'var(--cyan)'

  return (
    <div className='dayContainer'>
      <div className="bar" style={varStyles}></div>
      <div className='label'>{data.data.day}</div>
    </div>
  )
}

export default ChartBar