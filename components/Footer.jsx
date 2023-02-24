
import css from '../styles/Footer.module.css'
import {UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons'
import Image from 'next/image'
import Logo from '../assets/logo-pdf.png'

export default function Footer (){
    return(
       <div className={css.container}>
        <span>All Rights Reserved</span> 
        <div className={css.social}>
            <UilFacebook size={40}/>
            <UilGithub size={40}/>
            <UilInstagram size={40}/>
        </div>
        <div className={css.logo}>

<Image src ={Logo} alt='' width={90} height={80}/>
</div>
       </div> 
    )
}