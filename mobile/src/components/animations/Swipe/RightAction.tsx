import { Animated } from "react-native";

import {Fontisto} from '@expo/vector-icons'
import { RightActionContainer, RightActionButton } from "./SwipeStyles";
import { theme } from "../../../theme/theme";

interface IRightActionProps {
    color: string;
    x: number;
    progress: Animated.AnimatedInterpolation<number>;
    icon: 'favorite' | 'trash'
    index: number;
    close: () => void;
    pressFavorite?: (index: number) => void;
    pressDelete?: (index: number) => void;
}


export default function renderRightAction({ color, x, progress, icon, index,close, pressFavorite, pressDelete }: IRightActionProps){
    const translateX = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [x, 0],
    });

    function pressHandler() {
        if (icon === "favorite" && pressFavorite) {
          pressFavorite(index);
        } else if (pressDelete) {
          pressDelete(index);
        }
        close();
      }

    return (
        <RightActionContainer style={{ transform: [{ translateX: translateX }] }}>
            <RightActionButton color={color} onPress={pressHandler}>
                <Fontisto color={theme.COLORS.WHITE} size={24} name={icon} />
            </RightActionButton>
        </RightActionContainer>
    );
};