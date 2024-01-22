import { useEffect, useState } from 'react'
import { Dimensions, Animated } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import {
    SlidingTab,
    SlidingTabContainer,
    TabBarContainer,
    TabButton,
} from './BarStyles'
import { theme } from '../../../theme/theme'


const { width } = Dimensions.get('window')
const MARGIN = 16
const TAB_BAR_WIDTH = width - 2 * MARGIN
const TAB_WIDTH = TAB_BAR_WIDTH / 2

type AnimatedBarProps = BottomTabBarProps
type IoniconsIconNames = 'home-outline' | 'bookmark-outline'

export default function AnimatedBar({ state, descriptors, navigation }: AnimatedBarProps) {

    const [translateX] = useState(new Animated.Value(0))

    function translateTab(index: number) {
        Animated.spring(translateX, {
            toValue: index * TAB_WIDTH,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        translateTab(state.index)
    }, [state.index])


    return (
        <TabBarContainer tabBarWidth={TAB_BAR_WIDTH}>
            <SlidingTabContainer tabWidth={TAB_WIDTH}>
                <SlidingTab style={{ transform: [{ translateX }] }}>

                </SlidingTab>
            </SlidingTabContainer>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const isFocused = state.index === index

                function onPress() {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                function onLongPress() {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TabButton
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={index}
                    >
                        <Ionicons
                            name={options.tabBarLabel as IoniconsIconNames}
                            size={isFocused ? 32 : 24}
                            color={isFocused ? theme.COLORS.BLUE : 'gray'}
                        />
                    </TabButton>
                )
            })}
        </TabBarContainer>

    )
}



