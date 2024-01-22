import { useContext } from "react";
import {Ionicons} from '@expo/vector-icons'
import { Container, Logo } from "./HeaderStyles"
import { ButtonIcon } from "../CustomInput/CustomInputStyles";
import { theme } from "../../../theme/theme";
import { AuthContext } from "../../../contexts/AuthContext";

export default function Header() {
    
    const {signOut} = useContext(AuthContext)

    return (
        <Container>
            <Logo
                source={require('../../../assets/images/logoSmall.png')}
            />
            <ButtonIcon onPress={signOut}>
                <Ionicons name="exit-outline" size={30} color={theme.COLORS.RED}/>
            </ButtonIcon>
        </Container>
    )
}