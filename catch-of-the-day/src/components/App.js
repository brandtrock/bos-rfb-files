import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    // THREE STEP PROCESS
    // 1. Take a copy of the existing state, avoid mutations
    const fishes = {...this.state.fishes};
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state; overwrite the existing state
    this.setState({ fishes });
    // In ES6, if the property and value have the same name, you don't need to pass
    // both items, so the above setState is equivalent to this:
    // this.setState({ fishes: fishes });
    // Just pass the piece of state you wish to update, not the entire thing
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;