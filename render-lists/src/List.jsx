import propTypes from 'prop-types'

function List(props) {

    const itemList = props.items
    const category = props.category
    const listItems = itemList.map(item => <li>{item.name} - {item.price}$ </li>)
    return (<><h3 className="list-category">{category}</h3> <ul className="list-items">{listItems}</ul></>)
}

export default List