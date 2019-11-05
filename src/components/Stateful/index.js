import React from 'react'
import ChildishButton from "../ChildishButton";

class Stateful extends React.Component {

    state = {
        message : 'Cool stateful component',
        buttonMsg : 'Cool stateful button'
    }

    update(e){
        this.setState({
            message : 'Cool CHANGED stateful component',
            buttonMsg : 'Cool CHANGED to:'
        })
    }

    render() {
        return (
            <div>
                <p>Very <b>{this.state.message}</b></p>
                <ChildishButton>{this.state.buttonMsg}</ChildishButton>
            </div>

        )
    }
}

export default Stateful;
