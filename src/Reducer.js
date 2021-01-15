export const initialState = {
  basket: [
    {
      id: "122",
      title:
        "Dell U2719D Écran de PC 27 InfinityEdge UltraSharp Wide Quad HD LCD à Rétroéclairage LED, IPS, 60 Hz, 8 ms, Noir",
      price: 350,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Dhr7vaPiL._AC_SL1280_.jpg",
    },
    {
      id: "122",
      title:
        "Dell U2719D Écran de PC 27 InfinityEdge UltraSharp Wide Quad HD LCD à Rétroéclairage LED, IPS, 60 Hz, 8 ms, Noir",
      price: 350,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Dhr7vaPiL._AC_SL1280_.jpg",
    },
  ],
};

export const getBAsketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove item`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}
export default reducer;
