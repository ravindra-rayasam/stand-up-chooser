import React from 'react';

const displayCurrent = (props)=> {
    var listOfMembers = props.member.map ((person) => {
       return (
           <div className='image-card current-image-card' key={person}>{person}</div>
       );
    });
    return (
        <div>
            {listOfMembers}
        </div>    
    );
}

//Functional Component 
const Current = (props) =>{
    return (
        <section> 
            <h2>
                Turn Now  
            </h2>
            
            {displayCurrent(props)}            
        </section>
    );
}


export default Current;