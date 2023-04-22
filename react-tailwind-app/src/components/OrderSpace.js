import OrderBox from './OrderBox';
import { useState } from 'react';

function OrderSpace(){
    
        const [orders, setOrders] = useState([]);
  const [sName, setSName] = useState("");
  const [mName, setMName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSNameChange = (event) => {
    setSName(event.target.value);
    setIsDisabled(event.target.value === "" || mName === "");
  };

  const handleMNameChange = (event) => {
    setMName(event.target.value);
    setIsDisabled(sName === "" || event.target.value === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      score: Math.floor(Math.random() * 100),
      id: Math.floor(Math.random() * 100),
      store: sName,
      order: mName,
      name: 'ddd',
    };

    const newOrders = [...orders, order].sort((a, b) => a.score - b.score);
    setOrders(newOrders);

    setSName("");
    setMName("");
    setIsDisabled(true);
  };

  const handleTakeOrder = (orderId) => {
    const takenOrder = orders.find(order => order.id === orderId);
    const filteredOrders = orders.filter(order => order.id !== orderId);
    setOrders(filteredOrders);
    const KeepOrderListItem = document.createElement('div');
    
    let s = document.createElement('p');
    let o = document.createElement('p');
    let n = document.createElement('p');
    s.innerHTML = 'Store: ' + takenOrder.store;
    o.innerHTML = 'Order: ' + takenOrder.order;
    n.innerHTML = 'Name: ' + takenOrder.name;
    KeepOrderListItem.appendChild(s);
    KeepOrderListItem.appendChild(o);
    KeepOrderListItem.appendChild(n);
    const orderListItem = document.createElement('li');
    orderListItem.appendChild(KeepOrderListItem);
    document.getElementById('Order List').appendChild(orderListItem);
  }
        return(
            <div className='OrderSpace'>
                <div id='Order List'>

</div>
<form onSubmit={handleSubmit}>
  <label htmlFor="sName">Store name:</label>
  <input type="text" id="sName" name="sName" value={sName} onChange={handleSNameChange}></input>
  <br />
  <label htmlFor="mName">Order name:</label>
  <input type="text" id="mName" name="mName" value={mName} onChange={handleMNameChange}></input>
  <br />
  <input type="submit" value="Place Order" disabled={isDisabled}></input>
</form>
<br />
<h3>Order List</h3>
<div id='OrderArea'>
  {orders.map((order) => (
    <OrderBox 
      key={order.score} 
      orderId={order.id} 
      Username={order.name} 
      StoreN={order.store} 
      OrderN={order.order} 
      Score={order.score} 
      onTakeOrder={handleTakeOrder}
    />
  ))}
</div>
            </div>
        );
}

export default OrderSpace