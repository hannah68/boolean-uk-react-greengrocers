const cartItems = (props) => {
    console.log(props.cartItems);
    return(
        <ul className="item-list cart--item-list">
            {props.cartItems.map(item => {
                return (
                    <li>
                        <img
                            className="cart--item-icon"
                            src={`assets/icons/${item.id}.svg`}
                            alt={item.name}
                        />
                        <p>{item.name}</p>
                        <button className="quantity-btn remove-btn center">-</button>
                            <span className="quantity-text center">{item.qty}</span>
                        <button className="quantity-btn add-btn center">+</button>
                    </li>

                )
            })}
        </ul>
    )
}

export default cartItems;