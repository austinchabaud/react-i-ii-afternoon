import React from 'react'

function Control(props) {
    
    return(
        <div className='controlbuttons'>
            <button onClick={props.prevIndex} disabled={!props.index}>Previous</button>
            <button onClick={props.nextIndex} disabled={props.index >= 24}>Next</button>
        </div>
    )
}

export default Control