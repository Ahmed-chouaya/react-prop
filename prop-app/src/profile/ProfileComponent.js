import React from 'react'
import User from './UserNameAlert'
import PropTypes from 'prop-types'

function ProfileComponent(props){
    function getData(){
        return alert(props.FullName)
      }
    return (
        <div>
            <h1>
                Hello {props.FullName} 
            </h1>
            <h1>
                Profession : {props.Profession}
            </h1>
            <h1>
                Bio: {props.Bio}
            </h1>
            {props.children}
            <User data={getData}/>
        </div>
    )
}

ProfileComponent.propTypes = {
    FullName: PropTypes.string,
    Profession: PropTypes.string,
    Bio: PropTypes.string
}


ProfileComponent.defaultProps = {
    FullName: "you didn't type your name",
    Profession: 'type it here',
    Bio: 'tell us about you'
}

export default ProfileComponent