import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changeTitleAction,
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../actions/actions";

// React component version
class Home extends Component {
  // actions are dispatched here, hence no need for mapDispatchToProps
  incrementCounter = () => this.props.dispatch(increment());
  incrementAsyncCounter = () => this.props.dispatch(incrementAsync());
  decrementCounter = () => this.props.dispatch(decrement());
  decrementAsyncCounter = () => this.props.dispatch(decrementAsync());
  changeTitle = () => this.props.dispatch(changeTitleAction());
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.props.title}</p>
        <p>Count: {this.props.count}</p>
        <p>
          <button onClick={this.incrementCounter}>Increment</button>
          <button
            onClick={this.incrementAsyncCounter}
            disabled={this.props.isIncrementing}
          >
            Increment Async
          </button>
        </p>
        <p>
          <button onClick={this.decrementCounter}>Decrementing</button>
          <button
            onClick={this.decrementAsyncCounter}
            disabled={this.props.isDecrementing}
          >
            Decrement Async
          </button>
        </p>
        <button onClick={() => this.props.history.push("/about-us")}>
          Go to about page via redux
        </button>
        <button onClick={this.changeTitle}>
          Call print console reducer reducer
        </button>
      </div>
    );
  }
}

// populating props used by this component from state
const mapStateToProps = state => ({
  title: state.homeTitle,
  count: state.counter.count,
  isIncrementing: state.isIncrementing,
  isDecrementing: state.isDecrementing
});

// connect redux to component
export default connect(mapStateToProps)(Home);
