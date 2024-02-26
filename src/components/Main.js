import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material'
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
       <h1>Welcome to Daman games</h1> 
         <section className='intro'>
            Daman Games is a Best Earning Platform to Play a lot of Interesting 
            Online Games and Earn It offers a wide variety of games choose from Predicting 
            So many things Like Color and Number Whether you are fan of strategy or casual games.
      </section>
    
      <img className='image'src="https://www.f6s.com/content-resource/media/5132199_61a9bd388999b2f637d158cd7aa71d1f5d422ddd_large.png" alt="logo" style={{ width: '500px', height: '300px' }} />
    <h2>
      Click on the button to play now!
    </h2>
     <Button className='butt'href='https://damangames.in/#/register?invitationCode=813825997840' >Sign Up</Button>
    </div>
  )
}

export default Main