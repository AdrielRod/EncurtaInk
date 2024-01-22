import styled from "styled-components/native"
import { Platform } from "react-native"

export const Container = styled.SafeAreaView`
    width: 95%;
    height: 80px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.BLACK_SECONDARY};
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 10px;
`

export const ButtonLink = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    border-radius: 4px;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
`

export const LinkText = styled.Text`
    font-size: 15px;
    overflow: hidden;
    align-self: flex-start;
    margin-top: 10px;
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`

export const BoxContent = styled.View`
    
`

export const ButtonCopyLink = styled.TouchableOpacity`
    padding-left: 10px;
    padding-right: 10px;
    width: 180px;
    border-radius: 6px;
    height: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
    align-self: flex-end;
    margin: 10px;
`

export const CopyText = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.BLUE};
`