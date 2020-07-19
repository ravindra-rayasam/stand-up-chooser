import React from 'react';

class Finished extends React.Component {


    displayFinished () {
        var listOfMembers = this.props.members.map ((person) => {
           return (
               <div class='image-card' key={person}>{person}</div>
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
                
                <h2>finished member. </h2>
                
                {this.displayFinished()}
                
            </section>
        );
    }
}

export default Finished;