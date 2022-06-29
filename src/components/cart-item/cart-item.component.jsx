import {CartItemContainer, ItemDetails, Image, Title} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Title>{name}</Title>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;