import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { theme } from '../../../theme/theme';

type ButtonTypes = {
    color: string;
}

export const StyledSwipeable = styled(Swipeable)``;

export const RightActionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120px;
  gap: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const RightActionContainer = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
  
`;

export const RightActionButton = styled(TouchableOpacity)<ButtonTypes>`
    background-color: ${({color}) => color};
    border-radius: 8px;
    width: 58px;
    height: 54px;
    justify-content: center;
    align-items: center;
    

`;