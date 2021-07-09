type ShoesListProps = {
  isFetchingShoesList: boolean;
  shoesList: Shoe[];
  cart: Shoe[];
  getShoes: any;
  setAddToCart(shoe: Shoe): any;
  setCurrentShoe(shoe: Shoe): any;
  navigation: Navigate;
};
