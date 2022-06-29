import { useContext } from 'react';
import { Footer, ProductCardContainer, Image, StyledButton } from './product-card.styles.jsx';
import {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const {name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product)
    }

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <StyledButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</StyledButton>
        </ProductCardContainer>
    )
    
}

export default ProductCard;