import React, { Component } from "react";

class Counterl extends Component {
  state = { count: 0, tags: ["tag1", "tag2", "tag3"] };

  //constructor() {
  //  super();
  // this.handleIncrement = this.handleIncrement.bind(this);
  //}

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There's No Tags!!!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}

export default Counterl;
