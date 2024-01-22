import { Alert, Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons'
import { BoxContent, ButtonCopyLink, ButtonLink, Container, CopyText, LinkText } from "./CardLinkStyles"
import { theme } from "../../../theme/theme";

interface ICardLink {
    linkText: string;
}

export default function CardLink({linkText}: ICardLink) {

    async function openURL() {
        const supported = await Linking.canOpenURL(linkText);
        
        if (supported) {
            await Linking.openURL(linkText);
        } else {
            console.error(`Não é possível abrir a URL: ${linkText}`);
        }
    }

    async function copyToClipboard(){
        await Clipboard.setStringAsync(linkText)
        Alert.alert('URL copiada com sucesso:', linkText)
    }

    return (
        <Container>
            <ButtonLink onPress={openURL}>
                <Ionicons name="link" size={36} color={theme.COLORS.BLUE} />
            </ButtonLink>
            <BoxContent>
                <LinkText numberOfLines={1}>{linkText}</LinkText>
                <ButtonCopyLink onPress={copyToClipboard}>
                    <CopyText>Copiar Link Encurtado</CopyText>
                </ButtonCopyLink>
            </BoxContent>
        </Container>
    )
}