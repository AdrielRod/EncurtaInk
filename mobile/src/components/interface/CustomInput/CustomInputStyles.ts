import styled from "styled-components/native"
import { Animated, TextStyle } from "react-native"


type ActivedInputType = {
  isActived: boolean;
  type: 'PASSWORD' | 'COMMOM' | 'CREATELINK'
}



export const Container = styled.View<ActivedInputType>`
  margin-bottom: 10px;
  ${({ type, theme, isActived }) => type == 'PASSWORD' && `
    border: 1px solid ${isActived ? theme.COLORS.BLUE : theme.COLORS.GRAY_SECONDARY};
    border-radius:12px;
    width: 95%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
  `}
  ${({ type, theme, isActived }) => type == 'CREATELINK' && `
  
    width: 95%;
    flex-direction: row;
    align-items: center;
    padding-right: 10px;
    margin-left: 10px;
    gap: 20px;
  `}
`;

export const Input = styled.TextInput<ActivedInputType>`
  width: ${({ type }) => type == 'PASSWORD' ? '90%' : '95%'};
  height: 50px;
  ${({ theme, isActived, type }) => type == "COMMOM" && `
  border: 1px solid ${isActived ? theme.COLORS.BLUE : theme.COLORS.GRAY_SECONDARY};`
  }
  ${({ theme, isActived, type }) => type == "CREATELINK" && `
  border: 1px solid ${isActived ? theme.COLORS.BLUE : theme.COLORS.WHITE};
  width: 85%;`
  }
  color: ${({theme, type}) => type == 'CREATELINK' && theme.COLORS.WHITE};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  font-size: 16px;
`;

export const ButtonIcon = styled.TouchableOpacity``