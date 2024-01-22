import styled from "styled-components/native"

type LabelStyles = {
    type: 'BLACK' | 'WHITE'
}

export const Text = styled.Text<LabelStyles>`
    color: ${({theme, type}) => type == 'BLACK' ?  theme.COLORS.BLACK_SECONDARY : theme.COLORS.WHITE};
    font-size: 16px;
    font-weight: 500;
`


