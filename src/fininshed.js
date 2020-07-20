import React from 'react';

class Finished extends React.Component {


    displayFinished () {
        var listOfMembers = this.props.members.map ((person) => {
           return (
               <div className='image-card finished-image-card' key={person}>{person}</div>
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
            <section className="turn-finished"> 
                
                <h2>Turn finished </h2>
                
                {this.displayFinished()}
                
            </section>
        );
    }
}

export default Finished;