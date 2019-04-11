import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>Count: <span className="text-primary">{this.props.count}</span></h2>
                <button className="btn btn-success" onClick={this.props.onIncrementClick}>Increment</button>
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
    onIncrementClick: () => dispatch({ type: 'INCREMENT' })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)