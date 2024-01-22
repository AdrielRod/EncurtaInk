import { Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import styled from "styled-components/native";

type ButtonTypes = {
    color: string;
}

export const StyledSwipeable = styled(Swipeable)``;

export const RightActionsContainer = styled(Animated.View)`
  flex-direction: row;
  gap: 3px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  flex: 1;
`;

export const RightActionContainer = styled(Animated.View)`
  width: 50%;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const RightActionButton = styled.Pressable<ButtonTypes>`
  background-color: ${({color}) => color};
  border-radius: 8px;
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
`;