import { ViewStyle } from "react-native";
import { Container, Title, DividerLine } from "./TitleStyles"

interface ILabel {
    type: 'BLACK' | 'WHITE';
    text: string;
    containerStyles?: ViewStyle;
}
export default function Label({ type, text, containerStyles }: ILabel) {

    return (
        <Container style={{...containerStyles}}>
            <Title type={type}>{text}</Title>
            <DividerLine type={type}/>
        </Container>
    )
}