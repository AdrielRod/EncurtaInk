import { ViewStyle } from "react-native";
import {Feather} from '@expo/vector-icons'
import { Container, Loading, Text } from "./AlertStyles"
import { theme } from "../../../theme/theme";

interface ILabel {
    type: 'info' | 'alert-circle' | 'loading';
    text: string;
    containerStyles?: ViewStyle;
}
export default function Alert({ type, text, containerStyles }: ILabel) {

    return (
        <Container style={{...containerStyles}}>
            {type == "alert-circle" && <Feather name={type} color={theme.COLORS.RED} size={15}/>}
            {type == "info" && <Feather name={type} color={theme.COLORS.WHITE} size={15}/>}
            {type == "loading" && <Loading size={15} color={theme.COLORS.BLUE}/>}
            <Text type={type}>{text}</Text>
        </Container>
    )
}