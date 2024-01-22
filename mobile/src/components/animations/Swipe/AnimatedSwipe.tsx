import React, { useRef } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
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
        <StyledSwipeable
          ref={swipeableRef}
          friction={1}
          enableTrackpadTwoFingerGesture
          rightThreshold={10}
          renderRightActions={(progress) =>
            renderRightActions({ progress, pressFavorite, pressDelete, index, close })
          }
        >
          {children}
        </StyledSwipeable>
      </GestureHandlerRootView>
    );
  }