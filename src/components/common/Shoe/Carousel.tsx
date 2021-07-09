import React from 'react';
import {View, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import styles from './styles';
import shoes from '../../../assets/images/shoes';
import {primaryColor} from '../../../constants';

export const ShoeImage: React.FC<ShoeImageProps> = ({item, size}) => (
  <Image style={[{width: size, height: size}]} source={shoes[item]} />
);

const CustomCarousel: React.FC<CarouselProps> = ({shoe, width = 180}) => {
  const [currentImage, setCurrentImage] = React.useState<number>(0);

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={shoe.images}
        renderItem={({item}) => <ShoeImage item={item} size={width} />}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideOpacity={0.85}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={index => setCurrentImage(index)}
        autoplay={true}
        loop
      />
      <Pagination
        dotsLength={shoe.images.length}
        activeDotIndex={currentImage}
        dotColor={primaryColor}
        inactiveDotColor="black"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default CustomCarousel;
