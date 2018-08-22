import React from "react";
import { connect } from "react-redux";
import {
  changeTitleAction,
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../actions/actions";

// Presentation component version
const Home = props => (
  <div>
    <h1>Home</h1>
    <p>{props.title}</p>
    <p>Count: {props.count}</p>
    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>
    <p>
      <button onClick={props.decrement}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>
    <button onClick={() => props.history.push("/about-us")}>
      Go to about page via redux
    </button>
    <button onClick={() => props.changeTitle()}>
      Call print console reducer reducer
    </button>
  </div>
);

// populating props used by this component from state
const mapStateToProps = state => ({
  title: state.homeTitle,
  count: state.counter.count,
  isIncrementing: state.isIncrementing,
  isDecrementing: state.isDecrementing
});

// define how to dispatch (execute) function props used within the component
const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increment());
  },
  incrementAsync: () => {
    dispatch(incrementAsync());
  },
  decrement: () => {
    dispatch(decrement());
  },
  decrementAsync: () => {
    dispatch(decrementAsync());
  },
  changeTitle: () => {
    dispatch(changeTitleAction());
  }
});

// connect redux to component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
