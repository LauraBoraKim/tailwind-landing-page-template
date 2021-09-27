import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items, cartItems, setCartItems }) {
  const handleClick = (itemID) => { 
    let copied = [...cartItems]
    let flag = false //  인자의 itemID와 같은 상품이 이미 카트에 담겨있는지 여부를 저장
    
    let addedItem
    copied.map((item) => {
      if(item.itemId === itemID){
        item.quantity++
        flag = true
      }
    })

    if(!flag){
      addedItem = {'itemId' : itemID, "quantity" : 1}
      copied.push(addedItem)
    }
    setCartItems(copied)
  }
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
