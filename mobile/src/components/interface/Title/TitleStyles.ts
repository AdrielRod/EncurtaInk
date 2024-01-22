import styled from "styled-components/native"

type TitleProps = {
    type: 'BLACK' | 'WHITE'
}

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Title = styled.Text<TitleProps>`
    color: ${({theme, type}) => type == 'BLACK' ?  theme.COLORS.BLACK_SECONDARY : theme.COLORS.WHITE};
    font-size: 22px;
    font-weight: bold;
`

export const DividerLine = styled.View<TitleProps>`
    width: 100px;
    height: 4px;
    border-radius: 4px;
    background-color: ${({theme, type}) => type === 'BLACK' ? theme.COLORS.BLACK_SECONDARY : theme.COLORS.WHITE};
`


