import React, { Component } from 'react';


class NumberList extends Component {

    render() {
        return (
            <div>
            <h4>Hobbies:</h4>
            <ul>
                {/* {this.props.numList.map((n) => <li>{n}</li>)} */}
                {this.props.hobbyList.map((v,k) =><li>{k} {v}</li>)}
            </ul>

            
            </div>
        )
    }
}

export default NumberList;