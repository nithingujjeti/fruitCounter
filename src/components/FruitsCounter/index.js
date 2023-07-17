import {Component} from 'react'
import './index.css'

class fruitsCounter extends Component {
  state = {mango1: 0, banana: 0}

  onIncrement = () => {
    const {mango1} = this.state
    this.setState({mango1: mango1 + 1})
  }

  onIncrease = () => {
    const {banana} = this.state
    this.setState({banana: banana + 1})
  }

  render() {
    const {mango1, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="color">{mango1}</span> mangoes
            <span className="color"> {banana}</span> bananas
          </h1>
          <div className="fruitContainer">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
              />
              <br />
              <button onClick={this.onIncrement} className="btn" type="button">
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
              />
              <br />
              <button onClick={this.onIncrease} className="btn" type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default fruitsCounter
