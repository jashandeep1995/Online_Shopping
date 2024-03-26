import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Chat from "./Chat";
import { useState } from 'react';
import { Link } from 'react-router-dom';





const Footer =()=>{

  
  
    return(
        <>
        <div className="footer">
            Dhanda's Shopping Store
            <div className='socialicon'>
                <FacebookIcon/>
                <InstagramIcon/>  
                    
            </div>
            <Link to="appointment" className='appointment'>Book An Appointment</Link>    
               
            <Chat />

            
        </div>
     


      
        </>
    );
}

export default Footer;

