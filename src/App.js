import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import ens from './ens';

class App extends Component {
  state = {
    events: [],
    blockNumber: ''
  };

  async componentDidMount() {
    const blockNumber = await web3.eth.getBlockNumber();
    const previousNumber = blockNumber - 1000;

    try {
      this.setState({ blockNumber: previousNumber });
    } catch (e) {
      this.setState({ e });
    }
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ events: [], message: 'Retrieving BidRevealed events...' });

    const bidRevealedEvents = await ens.getPastEvents('BidRevealed', {
      fromBlock: this.state.blockNumber
    });

    if (bidRevealedEvents.length === 0) {
      this.setState({ message: 'No BidRevealed events were found' });
    } else {
      let events = [];

      bidRevealedEvents.forEach(function(event, index, array) {
        events.push({
          id: event.id,
          hash: event.returnValues.hash,
          owner: event.returnValues.owner,
          value: event.returnValues.value,
          status: event.returnValues.status
        });
      });

      this.setState({ events, message: '' });
    }
  };

  render() {
    return (
      <div className="app">
        <h2>ENS Contract Events</h2>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>Block number to start from:</label>
            <input
              value={this.state.blockNumber}
              onChange={event =>
                this.setState({ blockNumber: event.target.value })
              }
            />
          </div>
          <button>Enter</button>
        </form>

        <br />

        <span className="message">{this.state.message}</span>

        <ul>
          {this.state.events.map(event => (
            <li key={event.id}>
              <span className="key">Hash</span>: {event.hash}
              <br />
              <span className="key">Owner</span>: {event.owner}
              <br />
              <span className="key">Value</span>: {event.value}
              <br />
              <span className="key">Status</span>: {event.status}
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
