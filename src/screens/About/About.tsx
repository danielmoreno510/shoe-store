import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import styles from './styles';
import coverage from '../../assets/images/coverage.png';
import appcenter from '../../assets/images/appcenter.png';
import pipeline from '../../assets/images/pipeline.png';

const About = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Sneaker City</Text>
    <View style={styles.titleContainer}>
      <Text style={styles.subtitle}>Technologies</Text>
      <View style={styles.itemsContainer}>
        <Text style={styles.item}>- React Native</Text>
        <Text style={styles.item}>- TypeScript</Text>
        <Text style={styles.item}>- Redux - Saga</Text>
        <Text style={styles.item}>- esLint</Text>
        <Text style={styles.item}>- Test (Jest)</Text>
      </View>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.subtitle}>Tools</Text>
      <View style={styles.itemsContainer}>
        <Text style={styles.item}>- Reactotron</Text>
        <Text style={styles.item}>- Xcode</Text>
        <Text style={styles.item}>- Prettier</Text>
      </View>
    </View>
    <Text style={styles.text}>This project has a coverage of 81%</Text>
    <Image source={coverage} style={styles.image} />
    <Text style={styles.text}>
      In other projects I have implemented continuous integration processes with implementation within
      appcenter to download the ios and android builds
    </Text>
    <Image source={pipeline} style={styles.image} />
    <Image source={appcenter} style={styles.image} />
  </ScrollView>
);

export default About;
