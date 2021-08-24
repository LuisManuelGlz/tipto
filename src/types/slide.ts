import { ImageSourcePropType } from "react-native";

export type Slide = {
  key: number | string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  backgroundColor: string;
};
