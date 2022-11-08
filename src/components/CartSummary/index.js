import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext>
    {value => {
      const {cartList} = value

      const getTotalCost = () => {
        let totalAmount = 0

        cartList.forEach(eachProduct => {
          totalAmount += eachProduct.price * eachProduct.quantity
        })

        return totalAmount
      }

      const totalCost = getTotalCost()

      const itemsCount = cartList.length

      return (
        <div className="cart-summary">
          <h1 className="order-total">
            Order Total: <span className="total-cost">Rs {totalCost}/- </span>
          </h1>
          <p className="items-count">
            {itemsCount === 1 ? `${itemsCount} Item` : `${itemsCount} Items`} in
            cart
          </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext>
)

export default CartSummary
