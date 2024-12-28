const initialState = {
  products: [],
  favorites: [],
  basket: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case 'ADD_PRODUCTS':
      return {...state, basket: [...state.basket,action.payload]}
    
      default: {
      return state;
    }
  }
};
