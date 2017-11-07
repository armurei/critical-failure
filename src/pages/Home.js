import React from 'react'
import NewsItem from '../components/NewsItem'
import LogsContainer from '../components/LogsContainer'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-body'>
          <div className='Home-loot'>
            <NewsItem />
          </div>
          <div className='Home-logs'>
            <LogsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Home