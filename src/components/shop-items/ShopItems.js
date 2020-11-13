import React from 'react'
import './ShopItems.css'
import ItemData from '../../data/data.json'
import {Link} from 'react-router-dom'

const ShopItems = () => {
    const item = ItemData.map(item => {
        return (
            <div key={item._id} className="shop-items" style={{backgroundImage: `url(${item.picture})`}}>
                <div>
                    <h1 className="shop-items__title">{item.name}</h1>
                </div>
                <div className="shop-items__button">
                    <button><Link>Shop Now</Link></button>
                </div>
            </div>
        )
    })

    return (
        <div className="shop-item">
            {item}
        </div>
    )
}

export default ShopItems