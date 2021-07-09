type ShoeProps = {
  shoe: Shoe;
  cart?: Shoe[];
  addToCart?(shoe: Shoe): any;
  showProduct?(shoe: Shoe): any;
  twoSection?: boolean;
  oneSection?: boolean;
  newSize?: number;
};
