import { ImageSourcePropType } from "react-native";

export type SlideItem = {
  key: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  backgroundColor: string;
};
