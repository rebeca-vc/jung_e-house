import "./style/Cart.css"

const Cart = () => {
    let monster = 44.91;
    let ivy = 56.14;
    let bunch = 84.21;
    let total = monster + ivy + bunch;
    return (<div class="jh-cart">
          <h2>Cart</h2>
          <ul>
            <li>Monstera: R$ {monster.toString().replace('.', ',')}</li>
            <li>Ivy: R$ {ivy.toString().replace('.', ',')}</li>
            <li>Bunch of flowers: R$ {bunch.toString().replace('.', ',')}</li>
          </ul>
        <p>Total: {total}</p>
        </div>);
}

export default Cart;