import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarKMode: false}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'container-light' : 'container'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="main-container">
        <div className={modeClassName}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
