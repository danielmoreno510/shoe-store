type CarouselProps = {
  shoe: Shoe;
  width?: number;
};

type Shoe = {
  id: string;
  images: string[];
  reference: string;
  brand: string;
  sizes: Sizes[];
  price: number;
  size: number;
};

type Sizes = {
  label: string;
  value: string;
};

type ShoeImageProps = {
  item: string;
  size: number;
};
