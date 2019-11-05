import React from 'react';
import ChildishButton from './components/ChildishButton'
import Stateful from "./components/Stateful";
import Stateless from "./components/Stateless";

class App extends React.Component{
    render(){
        return(
            <div>
                <ChildishButton></ChildishButton>
                <Stateful />
                <Stateless name="Stateless component"/>
            </div>);
    }
}

export default App;
