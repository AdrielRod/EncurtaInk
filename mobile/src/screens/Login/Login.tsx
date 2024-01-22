import React, { useState, useContext } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';
import { 
    AreaPressable,
    ButtonLogin, 
    Container, 
    ContainerInput, 
    Logo } from './LoginStyles';
import { AuthContext } from '../../contexts/AuthContext';
import { CustomInput, Label, Alert } from '../../components/interface';
import { theme } from '../../theme/theme';



export default function Login() {
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [errorEmailText, setErrorEmailText] = useState<string>('')
    const [errorPasswordText, setErrorPasswordText] = useState<string>('')

    const { signIn, loadingAuth } = useContext(AuthContext)

    async function handleLogin() {
        if (!email) {
            setErrorEmailText("Preencha o seu e-mail.")
        }
        if (!password) {
            setErrorPasswordText('Preencha a senha.')
        }
    
        if (email && password) {
            signIn(email, password)
            return
        }
    }

    return (
        <AreaPressable onPress={() => Keyboard.dismiss()}>
            <Container>
                <Logo source={require('../../assets/images/logoBig.png')} />
                <ContainerInput>
                    <CustomInput
                        placeholder='Email'
                        type='COMMOM'
                        value={email}
                        setValue={(text) => {
                            setEmail(text)
                            setErrorEmailText('')
                        }}
                    />
                    {errorEmailText && (
                        <Alert
                            text={errorEmailText}
                            type="alert-circle"
                            containerStyles={{ marginLeft: 10, marginTop: 5 }}
                        />
                    )}

                    <Label text='Senha' type='BLACK' textStyles={{ marginTop: 10, marginLeft: 1 }} />
                    <CustomInput
                        placeholder='Senha'
                        type='PASSWORD'
                        value={password}
                        setValue={(text) => {
                            setPassword(text)
                            setErrorPasswordText('')
                        }}
                    />

                    {errorPasswordText && (
                        <Alert
                            text={errorPasswordText}
                            type="alert-circle"
                            containerStyles={{ marginLeft: 10, marginTop: 5 }}
                        />
                    )}

                    <ButtonLogin onPress={handleLogin} disabled={loadingAuth}>
                        {loadingAuth ? <ActivityIndicator size={30} color={theme.COLORS.WHITE} /> : <Label text='Entrar' type='WHITE' />}
                    </ButtonLogin>
                </ContainerInput>
            </Container>
        </AreaPressable>
    );
}
