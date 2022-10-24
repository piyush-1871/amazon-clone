export const initialState = {
  basket: [
    {
      id: 12312,
      title: 'Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50',
      price: 199,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg',
    },
    {
      id: 12312,
      title: 'Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50',
      price: 199,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71SUSc-97RL._UL1280_.jpg',
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item)=> item.price+amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      //logic for removing item from basket
      
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
      if(index >= 0){
        // item exits in basket, remove it
        newBasket.splice(index, 1);
      }else{
        console.warn(`Can't remove product (id : ${action.id} as it is not in the basket. )`)
      }
      return { 
        ...state, 
        basket : newBasket 
      };

    default:
      return state;
  }
};

export default reducer;
