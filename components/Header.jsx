import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/logo-pdf.png';
import {UilShoppingBag} from '@iconscout/react-unicons';
import { useStore } from "../store/store";
import Link from 'next/link'

export default function Header() {
    const items = useStore((state)=>state.cart.pizzas.length)

    return(
       <div className={css.header}>
        {/*logo side */}
        <div className={css.logo}>

           <Image src ={Logo} alt='' width={90} height={80}/>
        </div>
       {/*Menu side */}
       <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
       </ul>

               {/* Right side */}
        <div className={css.rightside}>
            <Link href ='/cart'>
            <div className={css.cart}>
                <UilShoppingBag size={40}/>
         <div className={css.badge}>{items}</div>
            </div>
            </Link>
        </div>
       </div> 

    )
}