import React, { Component } from 'react';
import { } from '../reducers/counterreducers'
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/counteractions'

class CounterApp extends Component {
    render() {
        const { count, incrementCount, decrementCount } = this.props;
        return (
            <div>
                <h2><span className="text-primary">{count}</span></h2>
                <br />
                <button className="btn btn-success" onClick={() => incrementCount()}>+</button>
                &nbsp;
                <button className="btn btn-danger" onClick={() => decrementCount()}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state
    }
};

const mapDispatchToProps = (dispatch) => ({
    // incrementCount: () => dispatch({ type: 'INCREMENT' }),
    // decrementCount: () => dispatch({ type: 'DECREMENT' })
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterApp)