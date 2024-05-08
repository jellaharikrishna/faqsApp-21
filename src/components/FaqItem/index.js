import {Component} from 'react'
import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const plusAlt = 'plus'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
const minusAlt = 'minus'

class FaqItem extends Component {
  state = {isClicked: false}

  onClickQuestion = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails

    const {isClicked} = this.state
    const iconUrl = isClicked ? minusIcon : plusIcon
    const altText = isClicked ? minusAlt : plusAlt

    return (
      <li className="item">
        <div className="question-card">
          <h1 className="question">{questionText}</h1>
          <button
            onClick={this.onClickQuestion}
            className="button"
            type="button"
          >
            <img className="img-icon" src={iconUrl} alt={altText} />
          </button>
        </div>
        {isClicked && (
          <div className="answer-card">
            <hr className="hr-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
