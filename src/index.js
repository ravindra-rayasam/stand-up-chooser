import React from 'react';
import ReactDOM from 'react-dom';
import Current from './current';
import Finished from './fininshed';
import Waiting from './waiting';
import Header from './Header';
import  './stand-up.css';

class App extends React.Component {

    // Initialize the state
    state = {
             allTeamMembers :['Ravindra','Alex', 'Ambi','Amanda', 'James'] ,
             waiting : ['Kov','Alex', 'Ambi','Amanda', 'James','Emma' , 'Emily','Ravindra', 'Paul'],
             current:[],
             finished:[]
            };
    
    getCurrentMember = (currentIndex) => {
        const currentPerson = [this.state.waiting[currentIndex]];
        console.log(Array.isArray(currentPerson));
        console.log(`current Person--${currentPerson}--${currentPerson.length}`);
        console.log();
        /* 

        Set the state in following order 
            1. Finished Team Mebers
            2. Current Member
            3. Waiting Team members

        */

        // Update Finished state only after First member has completed the turn.  
        if(this.state.current.length > 0 ) {
            this.setState({finished:[...this.state.finished,...this.state.current]});
        }

        //Update Current State
        this.setState ({current:[currentPerson]});

        // Update Wiating State
        this.setState({waiting:(this.state.waiting.filter((obj, index) => index !== currentIndex
        )).reverse()});

        
    }


    render () {
        return (
            <div class="container"> 
                <Header/>
                <Waiting members={this.state.waiting} onSelection = {this.getCurrentMember} />
                <Current member={this.state.current}  />
                <Finished members = {this.state.finished}/>
            </div>
        );
    }
}

ReactDOM.render (<App/> , 
document.querySelector('#root'));