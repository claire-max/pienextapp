import css from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import Image from 'next/image'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Services () {
    return(
        <>
        <div className={css.heading}>
          <span>WHAT WE SERVE</span>
          <span>Your Favorites</span>
          <span>Delivery Partner</span>
          </div>

     {/* Services */}
        <div className={css.services}>
             {/* First Service */}
            <div className={css.feature}> 
              <div className={css.ImageWrapper}>
                <Image src={s1} alt="" objectFit='cover' layout='intrinsic'/>
              </div>

                 <span>Easy to Order</span>
                 <span>Quick and easy ordering</span>

            </div>
               {/* Second Service */}
            <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image src={s2} alt="" objectFit='cover' layout='intrinsic'/>
              </div>
                  
                 <span>Easy to Order </span>
                 <span>Quick and easy ordering</span>
                 </div>
               {/* Third Service */}
            <div className={css.feature}> 
            <div className={css.ImageWrapper}>
                <Image src={s3} alt="" objectFit='cover' layout='intrinsic'/>
              </div>
                  
                 <span>Easy to </span>
                 <span>Quick and easy ordering</span>
            </div>
        </div>

        </>
    )
  
}
