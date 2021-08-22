import React, { useContext } from 'react';
import {
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from '../../components/Button';
import { AppContext } from '../../context/AppContext';
import { IS_INTRODUCTION_KEY } from '../../constants/Storage';
import styles from './IntroScreen.styles';
import { SlideItem } from '../../types/slideItem';

const slides = [
  {
    key: 'greeting',
    title: 'Title 1',
    description: 'Lorem.\nipsum dolor sit amet',
    image: require('../../assets/eating_together.png'),
    width: 320,
    backgroundColor: '#0099ff',
  },
  {
    key: 'tip',
    title: 'Title 2',
    description: 'lorem ipsum dolor',
    image: require('../../assets/breakfast.png'),
    backgroundColor: '#00CBA9',
  },
  {
    key: 'beers',
    title: 'Title 3',
    description: 'lorem ipsum dolor sit amet\nLorem ipsum bla bla bla',
    image: require('../../assets/beer.png'),
    backgroundColor: '#FF5500',
  },
];

const IntroScreen = () => {
  const { setIsIntroduction } = useContext(AppContext);

  const _renderItem = ({
    item: { title, description, image, backgroundColor },
  }: ListRenderItemInfo<SlideItem>) => {
    return (
      <View style={[styles.slide, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
        <Image style={[styles.image]} source={image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  const _keyExtractor = (item: { key: string }) => item.key;

  const storeIsIntroduction = async (value: boolean) => {
    try {
      await AsyncStorage.setItem(IS_INTRODUCTION_KEY, JSON.stringify(value));
      setIsIntroduction(false);
    } catch {
      console.error('Something wrong');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {/* <Text>Welcome to tipto</Text>
      <Text>
        The app that will help you divide the total of a bill among your friends
        in a very easy way
      </Text>
      <Button
        title="Let's get started 😎"
        onPress={() => storeIsIntroduction(false)}
      /> */}
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        data={slides}
        showSkipButton
        showPrevButton
        onDone={() => storeIsIntroduction(false)}
      />
    </SafeAreaView>
  );
};

export default IntroScreen;
