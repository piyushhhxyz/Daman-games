import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <h1>Welcome to Daman games</h1>
      <Typography variant="body1" className='teacher-text'>
        Where imagination meets innovation! Dive into a world of endless fun and excitement with our collection of captivating games designed to thrill players of all ages. Whether you're a casual gamer or a seasoned pro, our diverse range of titles promises to keep you entertained for hours on end. Join our community today and embark on an unforgettable gaming journey with Damangames!
      </Typography>

      <img className='image' src="https://www.f6s.com/content-resource/media/5132199_61a9bd388999b2f637d158cd7aa71d1f5d422ddd_large.png" alt="logo" style={{ width: '500px', height: '300px' }} />

      <h2>
        Click on the button to play now!
      </h2>

      <a className='butt' href='https://damangames.in/#/register?invitationCode=3MhJw2777807'>
        Sign Up
      </a>
      <br />
      <br />

      {/* Teacher Information */}
      <Typography variant="body1" className='teacher-text'>
        <strong>TEACHER OF DAMAN</strong>
        <br />
        Teacher Jennifer Candor, who helps you with your games and concerns, please message her once you have already created an account. She will teach you how to profit at Daman Games.
        <br />
        <br />

        <strong>WhatsApp Numbers:</strong>
        <br />
        +91 92767 50379
        <br />
        +91 85309 83951
        <br />
        +91 72497 05636
        <br />
        <br />

        <strong>Telegram:</strong>
        <br />
        <a href="https://t.me/VIP_DAMANCLUBhelp">https://t.me/VIP_DAMANCLUBhelp</a>
        <br />
        <a href="https://t.me/CandorJennifer_1130">https://t.me/CandorJennifer_1130</a>
        <br />
        <br />

        <strong>Email:</strong>
        <br />
        tchrjnfrcndr30@gmail.com
        <br />
        damangamesjnfr30@gmail.com
        <br />
        <br />

        <strong>TEACHER CHANNEL:</strong>
        <br />
        <a href="https://t.me/YourTEACHERofficialChannel">https://t.me/YourTEACHERofficialChannel</a>
        <br />
        <br />

        <strong>AGENT BONUS CHANNEL:</strong>
        <br />
        <a href="https://t.me/DamanEventBonus">https://t.me/DamanEventBonus</a>
      </Typography>
    </div>
  );
};

export default Main;
