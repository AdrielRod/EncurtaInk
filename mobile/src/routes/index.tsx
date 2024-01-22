import styled from 'styled-components/native'
import { useContext } from "react";
import RoutesApp from "./app.routes";
import RoutesLogin from "./login.routes";
import { AuthContext } from "../contexts/AuthContext";

export default function Routes() {
    const { isAuthenticated, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <Container>
                <Image
                    source={require('../assets/images/splash.png')}

                    resizeMode='cover'
                />
            </Container>
        )
    }
    return (
        isAuthenticated ? <RoutesApp /> : <RoutesLogin />
    )
}

const Image = styled.Image`
    width: 90%;
    height: 90%;
`

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BLACK_TERTIARY};
    justify-content: center;
    align-items: center;
`