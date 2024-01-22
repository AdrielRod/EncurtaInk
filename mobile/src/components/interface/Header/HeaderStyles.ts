import styled from "styled-components/native"
import { Platform } from "react-native"

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    background-color: ${({theme}) => theme.COLORS.BLACK_SECONDARY};
    flex-direction: row;
    padding-top: ${Platform.OS == 'android' ? '25px' : '0'};
    align-items: center;
    justify-content: space-around;
`

export const Logo = styled.Image`
`
