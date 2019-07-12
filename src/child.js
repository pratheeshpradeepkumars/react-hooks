import React from "react";

class Child extends React.Component {
  state = { counter: 0 };
  incriment = () => {
    this.setState(
      prevState => ({
        counter: prevState.counter + 1
      }),
      () => {
        console.log(this.state.counter);
      }
    );
  };
  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>Child</h2>
        <p>
          Mouse X: {this.props.x} Mouse Y : {this.props.y}
        </p>
        <p>Counter : {counter}</p>
        <button onClick={this.incriment}>+</button>
      </div>
    );
  }
}

export default Child;
