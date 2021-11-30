import React from 'react'

function User(props){
    return (
        <div>
            <h1>get user name</h1>
            <button onClick={props.data}> click me!</button>
        </div>
    )
}
export default User