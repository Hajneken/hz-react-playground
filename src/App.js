import React from 'react';
import ChildishButton from './components/ChildishButton'
import Stateful from "./components/Stateful";
import Stateless from "./components/Stateless";
import SyntheticEvt from "./components/SyntheticEvt";
import UnderstandRefs from "./components/UnderstandRefs";
import UnderstandLifecycle from "./components/UnderstandLifecycle";
import SWApiComponent from "./components/SWApiComponent";
import UnderstandHOC from "./components/UnderstandHOC";

class App extends React.Component{
    render(){
        return(
            <div>
                <ChildishButton></ChildishButton>
                <ChildishButton>Hynek</ChildishButton>
                <Stateful />
                <Stateless name="Stateless component"/>
                <SyntheticEvt />
                <UnderstandRefs />
                <UnderstandLifecycle />
                <SWApiComponent />
                <UnderstandHOC />
            </div>);
    }
}

export default App;
