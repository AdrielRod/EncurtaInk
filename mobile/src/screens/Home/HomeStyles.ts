import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BLACK_TERTIARY};
`
export const WelcomeText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const FlatList = styled.FlatList``