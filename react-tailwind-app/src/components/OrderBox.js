function OrderBox(props) {
    const handleTakeOrder = () => {
      props.onTakeOrder(props.orderId);
    }
  
    return (
      <div>
        <div className='inOrderBox'>
          <h4>Store: {props.StoreN}</h4>
          <p>Order: {props.OrderN}</p>
          <p>Score: {props.Score}</p>
        </div>
        <span>Order by: {props.Username}</span>
        <button onClick={handleTakeOrder}>Take Order</button>
      </div>
    );
  }
  export default OrderBox;
