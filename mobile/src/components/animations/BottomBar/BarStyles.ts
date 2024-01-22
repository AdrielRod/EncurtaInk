import { Animated } from 'react-native';
import styled from "styled-components/native";

type TabBarContainerType = {
  tabBarWidth: number;
}

type SlidingTabContainerType = {
  tabWidth: number;
}

export const TabBarContainer = styled.View<TabBarContainerType>`
  margin-top: 20px;
  flex-direction: row;
  width: ${({tabBarWidth}) => tabBarWidth}px;
  height: 60px;
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  bottom: 5px;
  background-color: ${({ theme }) => theme.COLORS.BLACK_SECONDARY};
  border-radius: 32px;
`;

export const SlidingTabContainer = styled(Animated.View)<SlidingTabContainerType>`
  ${({ tabWidth }) =>`
    width: ${tabWidth}px;
    align-items: center;
    bottom: 5px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `}
`;

export const SlidingTab = styled(Animated.View)`
  width: 100px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  bottom: 1px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;
