import React from 'react'
import NewsItem from './NewsItem'
import LogsContainer from './LogsContainer'
import logo from './guild_logo_white.svg'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {news: null, members: null}
  }

  componentDidMount () {
    this.getGuild().then(response => {
      const json = JSON.parse(response)
      const news = json.news
      const members = json.members
      this.setState({news, members})
    })
  }

  getGuild () {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", `https://us.api.battle.net/wow/guild/Frostmane/Critical%20Failure?fields=news%2C+members&locale=en_US&apikey=c93sxduxdezc4axs5bnzjwv5w8a579ep`)
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
      xhr.send()
    })
  }

  getItems () {
    const {news, members} = this.state
    if (!news || !members) return null
    const items = news.filter(single => single.type === 'itemLoot')
    items.length = 10
    return items.map(item => {
      const character = this.getCharacter(item.character)
      return <NewsItem key={`${item.character}: ${item.timestamp * item.itemId}`} item={item} character={character} />
    })
  }

  getCharacter (name) {
    const {members} = this.state
    const member = members.filter(member => member.character.name === name)[0]
    return member.character
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Critical Failure</h1>
        </header>
        <div className='App-body'>
          <div className='App-loot'>
            {this.getItems()}
          </div>
          <div className='App-logs'>
            <LogsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App
