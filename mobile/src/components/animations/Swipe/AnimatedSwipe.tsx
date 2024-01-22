import React, { useRef } from 'react'
import { GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler'
import {
  StyledSwipeable,
} from './SwipeStyles'
import { renderRightActions } from './RightActions'

interface IAnimatedSwipe {
  children: React.ReactNode
  index: number
  pressFavorite: (index: number) => void
  pressDelete: (index: number) => void
}



export default function AnimatedSwipe({
  children,
  pressFavorite,
  pressDelete,
  index,
}: IAnimatedSwipe) {
  const swipeableRef = useRef<Swipeable>(null);

  function close() {
    swipeableRef.current?.close();
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={swipeableRef}
        friction={1}
        enableTrackpadTwoFingerGesture
        rightThreshold={120}
        onSwipeableCloseStartDrag={(event) => {
          console.log(event)
        }}
        renderRightActions={(progress) =>
          renderRightActions({ progress, pressFavorite, pressDelete, index, close })
        }
      >
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
}