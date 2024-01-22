import React from 'react';
import { Animated } from 'react-native';
import { RightActionsContainer } from './SwipeStyles';
import renderRightAction from './RightAction';
import { theme } from '../../../theme/theme';

interface IRightActionsProps {
  progress: Animated.AnimatedInterpolation<number>;
  pressFavorite: (index: number) => void;
  pressDelete: (index: number) => void;
  close: () => void;
  index: number;
}

export function renderRightActions({
  progress,
  pressFavorite,
  pressDelete,
  index,
  close,
}: IRightActionsProps) {
  function renderAction(
    color: string,
    x: number,
    icon: 'favorite' | 'trash',
    actionCallback: (index: number) => void
  ) {
    return renderRightAction({
      color,
      x,
      progress,
      icon,
      index,
      close: close,
      pressFavorite: actionCallback,
      pressDelete: actionCallback,
    });
  }

  return (
    <RightActionsContainer>
      {renderAction(theme.COLORS.BLUE, 90, 'favorite', pressFavorite)}
      {renderAction(theme.COLORS.RED, 82, 'trash', pressDelete)}
    </RightActionsContainer>
  );
}
