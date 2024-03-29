import React from "react";
import style from "./CartMain.module.css"

const CartMain = ({ name, itemId, price, src, value, inputChange }) => {
    return (
        <div className={style.wrapper} >
            <div className={style.secondWrapper} key={itemId}>
                <div className={style.imageWrapper}>
                    <img src={src} alt="product image" />
                </div>
                <div className={style.editWrapper}>
                    <div className={style.textWrapper}>
                        <p className={style.mainText}>{name}</p>
                    </div>
                    <div className={style.priceWrapper} >
                        <p className={style.price} >Price: {price} UAH</p>
                    </div>
                    {/* <div className={style.countWrapper}>
                        <input className={style.countInput} type="number" min={1} defaultValue={1} name={name} value={value} onChange={inputChange} id={itemId} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CartMain;