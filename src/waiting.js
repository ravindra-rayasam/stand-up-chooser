import React from 'react';

//Class based component
class Waiting extends React.Component {

    chooseNextMember = (e)=>{
        let min = 1;
        let max= this.props.members.length;
        //console.log(min+"min -max"+max); // ES 5 Syntax for string concatenation.
        //console.log(`min ${min} - max ${max}`); // ES 6 Syntax
        let calIndVal = (max- min) - Math.random();

        // Display of last element is sometime issue as currentIndex value goes -ve. Hence ternary operator.
        let currentIndex =    Math.round(calIndVal > 0 ? calIndVal :0)  ; 
        this.props.onSelection(currentIndex);
    }

    displayWaiting () {
        // When having trouble setting  array in state use below
        //const waitingMembers = Array.from(this.props.members);
        //var listOfMembers =waitingMembers.map ((person) => {

        var listOfMembers =this.props.members.map ((person) => {
           return ( 
            <div key={person} class='image-card'>{person}</div>
           );
        });

        return (
            <div>
                {listOfMembers}
            </div>    
        );
    }

    render () {
        return (
            <section>
                <a class="btn" href="#" onClick={(e) => this.chooseNextMember(e)}>Whose Turn Now?</a><br/>
                {this.displayWaiting()}
            </section>
        );
    }
}

export default Waiting;