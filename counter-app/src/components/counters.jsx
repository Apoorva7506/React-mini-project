import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary  m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            // id={counter.id}

            //value={counter.value}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
          /*Children Way: { <h4>Counter #{counter.id}</h4>
            
          </Counter>} */
        ))}
      </div>
    );
  }
}

export default Counters;
