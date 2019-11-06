import React from 'react'
import ChildishButton from "../ChildishButton";

class Stateful extends React.Component {

    state = {
        message : 'Cool stateful component',
        buttonMsg : 'Cool stateful button'
    }

    handleClick(e){
        this.update.bind(this);
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
                <ChildishButton onClick={this.handleClick()}>{this.state.buttonMsg}</ChildishButton>
            </div>

        )
    }
}

export default Stateful;
