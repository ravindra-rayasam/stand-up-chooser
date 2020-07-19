import React from 'react';

//Functional Component 
const Current = (props) =>{
    return (
        <section>
            <h2>
            current member.  
            </h2>
            <div class='current image-card'>
            {props.member}
            </div>
        </section>
    );
}


export default Current;