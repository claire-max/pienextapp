import css from '../styles/Menu.module.css';

export default function Menu ({pizzas}) {
    console.log(pizzas)
    return(
        <div className={css.container}>

          <div className={css.heading}>
            <span>OUR MENU</span>
            <span>MKNKNBK</span>
            <span>NN:NNK:NJNKKJ</span>
          </div>
        </div>
    )
}