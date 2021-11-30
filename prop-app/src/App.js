import './App.css';
import React  from 'react';
import ProfileComponent from './profile/ProfileComponent';

function App() {
  return (
     <div>
       <ProfileComponent >
         <div>
           <img style= {{width: '500px'}} src={'/user.png'} alt=''/>
         </div>
       </ProfileComponent>
     </div>
  );
}

export default App;


