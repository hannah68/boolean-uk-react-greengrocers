const StoreItems = (props) => {
    
    return(
        <ul className="item-list store--item-list">
            {props.storeItems.map(el => {
                return(
                    <li key={el.id}>
                        <div className="store--item-icon">
                            <img src={`/assets/icons/${el.id}.svg`} alt={el.name} />
                        </div>
                        <button>Add to cart</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default StoreItems