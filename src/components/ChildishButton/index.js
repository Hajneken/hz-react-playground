import React from 'react'

class ChildishButton extends React.Component {

    render() {
        return (
            <button>{this.props.children}</button>
        )
    }
}

ChildishButton.defaultProps = {
    children : "Default Name for Button"
}

export default ChildishButton;

