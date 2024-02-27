import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className='footer'>
          <p> <b> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </b></p>

         <div className='footerItems'>
           <span className='border'> CHEMICALS </span>
           <span className='border'> PROCESS POWER WATER &  WASTE WATER </span>
           <span className='border'> OILS & GAS PHARMA  </span> 
           <span className='border'>  PHARMA  </span> 
           <span className='border'> SUGARS & DISTILLERIES  </span>
           <span className='border'> PAPER & PULP </span> 
           <span className='border'> MARINE & DEFENCE METAL </span> 
           <span className='border'> METAL & MINING </span> 
           <span className='border'> FOOD & BEVERAGE </span>
           <span className='border'>PETROCHEMICAL & REFINERIES </span>
           <span className='border'>SOLAR </span>
           <span className='border'>BUILDING </span>
           <span className='border'>HVAC </span>
           <span className='border'>FIRE FIGHTING </span>
           <span className = 'borderEx'>AGRICULTURE & RESIDENTIAL</span>
        </div> 

        <div className= "colored">
            <p> 
            <span > <FontAwesomeIcon className='icon' icon={faPhone} /></span> 
            <span> Toll free 1800 200 1234  </span>
            </p>

            <p> 
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
            <span> www.facebook.com/crimpumps </span>
            </p>

            <p> 
            <FontAwesomeIcon icon={faGlobe}  size='2xl' />
            <span> www.cripgroups.com </span>
            </p>
        </div>
   </div>
  )
}
