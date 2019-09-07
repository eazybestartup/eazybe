import { ADD_ITEM, GET_INITIAL_PRICE, CLEAR_CART, REMOVE_ITEM } from './cart.actionTypes';

const INITIAL_STATE = {
  products: [
    {
      id: 0,
      name: 'Cerveja SKOL Beats Senses Garrafa 313mL',
      price: 1.11,
      imageUrl: 'https://www.skol.com.br/assets/images/produtos/beats-sense-garrafa.png',
      quantity: 1,
      category: 'Bebidas'
    },
    {
      id: 1,
      name: 'Máquina Dolce Gusto',
      price: 300,
      imageUrl: 'https://i.zst.com.br/thumbs/45/38/1b/6418817.jpg',
      quantity: 1,
      category: 'Máquinas e Aparelhos'
    },
    {
      id: 2,
      name: 'Pão Francês unidade',
      price: 2,
      imageUrl: 'https://pngimage.net/wp-content/uploads/2018/06/p%C3%A3o-franc%C3%AAs-png-3.png',
      quantity: 1,
      category: 'Comidas'
    },
  ],
  fretePrice: 5.12,
  totalPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.productId) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product; 
        }),
      }
      case REMOVE_ITEM:
          return {
            ...state,
            products: state.products.map(product => {
              if (product.id === action.productId) {
                return {
                  ...product,
                  quantity: product.quantity > 0 ? product.quantity - 1 : 0,
                };
              }
              return product; 
            }),
          }

      case GET_INITIAL_PRICE:
        return {
          ...state,
          totalPrice: state.products.reduce((acc, p) => acc + (p.price * p.quantity), state.fretePrice)
        }
      case CLEAR_CART:
        return  {
          ...state,
          products: [],
        }
      default:
        return state;
  }  
};

export default cartReducer;
