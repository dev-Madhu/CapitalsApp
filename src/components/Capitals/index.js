import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedCountryId: countryAndCapitalsList[0].id}

  onChangeButton = event => {
    this.setState({selectedCountryId: event.target.value})
  }

  getCountry = () => {
    const {selectedCountryId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === selectedCountryId,
    )
    console.log(activeCountry)
    return activeCountry.country
  }

  render() {
    const {selectedCountryId} = this.state
    const capital = this.getCountry(selectedCountryId)

    return (
      <div className="app-container">
        <div className="main-box">
          <div className="selection-box">
            <h1 className="heading">Countries And Capitals</h1>
            <div>
              <select
                className="select-item"
                id="select-label"
                value={selectedCountryId}
                onChange={this.onChangeButton}
              >
                {countryAndCapitalsList.map(eachOption => (
                  <option value={eachOption.id} key={eachOption.id}>
                    {eachOption.capitalDisplayText}
                  </option>
                ))}
              </select>
              <label htmlFor="select-label" className="label-text">
                is capital of which country?
              </label>
            </div>
            <p className="capital">{capital}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
