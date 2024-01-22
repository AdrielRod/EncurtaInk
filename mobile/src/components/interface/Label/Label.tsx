import { ViewStyle } from "react-native";
import { Text } from "./LabelStyles"

interface ILabel {
    type: 'BLACK' | 'WHITE';
    text: string;
    textStyles?: ViewStyle;
}
export default function Label({ type, text, textStyles }: ILabel) {

    return (
        <Text type={type} style={{...textStyles}}>{text}</Text>
    )
}