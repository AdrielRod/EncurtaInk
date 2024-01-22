import styled from "styled-components/native"

type TitleProps = {
    type: 'info' | 'alert-circle' | 'loading'
}

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Text = styled.Text<TitleProps>`
    ${({theme, type}) => type == 'info' &&  `color: ${theme.COLORS.WHITE}`};
    ${({theme, type}) => type == 'alert-circle' &&  `color: ${theme.COLORS.RED}`};
    ${({theme, type}) => type == 'loading' &&  `color: ${theme.COLORS.BLUE}`};
    font-size: 12px;
    font-weight: 500;
`

export const Loading = styled.ActivityIndicator``
