import React from "react";
import { connect } from "react-redux"
import { getCounter } from "../actions/counter";

import styles from "./Counter.module.css";

class Counter extends React.Component {
    // constructor() {
    //     super();
    // }

    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement()
    }

    toggleHandler = () => {

    }

    render() {
        return (
            <main className={styles.counter}>
                <h1>Web Counter</h1>
                <div className={styles.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleHandler}>Toggle Counter</button>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        increment: getCounter(dispatch).incrementRequest,
        decrement: getCounter(dispatch).decrementRequest
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);