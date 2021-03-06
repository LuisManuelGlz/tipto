import React, { useContext } from 'react';
import { Image, ListRenderItemInfo, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../../context/AppContext';
import { IS_INTRODUCTION_KEY } from '../../constants/Storage';
import Text from '../../components/Text';
import styles from './IntroScreen.styles';
import { Slide } from '../../types/slide';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    description:
      'The app that will help you\nsplit the total of a bill among\nyour friends in a very easy way',
    image: require('../../assets/eating_together.png'),
    backgroundColor: '#0099ff',
  },
  {
    key: 2,
    title: 'Eating out',
    description: 'Ideal when you go with your\nfriends to eat out',
    image: require('../../assets/breakfast.png'),
    backgroundColor: '#00CBA9',
  },
  {
    key: 3,
    title: 'Title 3',
    description: "Let's go buy some beers 😎\nOr something like that",
    image: require('../../assets/beer.png'),
    backgroundColor: '#FF5500',
  },
];

const IntroScreen = () => {
  const { setIsIntroduction } = useContext(AppContext);

  const storeIsIntroduction = async (value: boolean) => {
    try {
      await AsyncStorage.setItem(IS_INTRODUCTION_KEY, JSON.stringify(value));
      setIsIntroduction(false);
    } catch {
      console.error('Something wrong');
    }
  };

  const renderItem = ({
    item: { title, description, image, backgroundColor },
  }: ListRenderItemInfo<Slide>) => {
    return (
      <View style={[styles.slide, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
        <Image style={[styles.image]} source={image} />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  };

  const keyExtractor = ({ key }: Slide) => JSON.stringify(key);

  const renderSkipButton = () => {
    return <Text style={styles.skipButton}>Skip</Text>;
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-back" color="rgba(255, 255, 255, 0.9)" size={24} />
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-forward" color="rgba(255, 255, 255, 0.9)" size={24} />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="checkmark" color="rgba(255, 255, 255, 0.9)" size={24} />
      </View>
    );
  };

  const onDone = () => {
    storeIsIntroduction(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={slides}
        showSkipButton
        showPrevButton
        renderSkipButton={renderSkipButton}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onDone={onDone}
      />
    </SafeAreaView>
  );
};

export default IntroScreen;
