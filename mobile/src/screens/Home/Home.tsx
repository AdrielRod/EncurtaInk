import React, { useCallback, useContext, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { Keyboard, Alert as Alerta } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import {
    Container,
    FlatList,
    WelcomeText,
} from "./HomeStyles"
import {
    Alert,
    CardLink,
    CustomInput,
    Header,
    Label,
    Title,
} from "../../components/interface"
import { AuthContext } from "../../contexts/AuthContext"
import { AreaPressable } from "../Login/LoginStyles"
import { AnimatedSwipe } from "../../components/animations"
import { isLinkInFavorites } from "../../helpers"
import { updateLinksStorage, createLink, getFavorites, getLinks } from "../../services"

export default function Home() {

    const { user } = useContext(AuthContext)
    const [link, setLink] = useState<string>('')
    const [allLinks, setAllLinks] = useState<string[]>([])
    const [errorText, setErrorText] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useFocusEffect(
        useCallback(() => {
            let isActive = true

            async function fetchLinks() {
                if (!isActive) return

                try {
                    const links = await getLinks()
                    setAllLinks(links)
                } catch (error) {
                    console.error(error)
                }
            }

            fetchLinks()
            return () => {
                isActive = false
            }
        }, [setAllLinks])
    )

    async function linkAdd() {
        if (!link) {
            setErrorText("Digite o link para podermos encurtar.")
            return
        }

        try {
            setLoading(true)

            const newLink = await createLink(link, 600800)
            setAllLinks((prevLinks) => [...prevLinks, newLink])
            await updateLinksStorage([...allLinks, newLink])
            setLink('')
            
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }


    async function linkDelete(link: string) {
        try {
            const currentFavorites = await getFavorites()
            const updatedLinks = allLinks.filter((item) => item !== link)

            await AsyncStorage.setItem('@links', JSON.stringify(updatedLinks))

            setAllLinks(updatedLinks)

            if (currentFavorites.includes(link)) {
                const updatedFavorites = currentFavorites.filter((item: string) => item !== link)
                await AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavorites))
            }

            Alerta.alert(`${link} foi removido com sucesso.`)
        } catch (error) {
            console.error('Erro ao remover o link:', error)
        }
    }


    async function linkFavorite(link: string) {
        try {
            const currentFavorites = await getFavorites()

            if (!isLinkInFavorites(link, currentFavorites)) {
                const updatedFavorites = [...currentFavorites, link]
                await AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavorites))

                Alerta.alert(`${link} foi adicionado com sucesso.`)
            } else {
                Alerta.alert(`${link} já está nos favoritos.`)
            }
        } catch (error) {
            console.error('Erro ao adicionar aos favoritos:', error)
        }
    }


    function dismissKeyboard() {
        Keyboard.dismiss()
    }

    return (
        <AreaPressable onPress={dismissKeyboard}>
            <Container>
                <Header />
                <WelcomeText>Bem vindo(a), {user?.name}</WelcomeText>
                <Label text='Cole o link abaixo:' type='WHITE' textStyles={{ marginTop: 10, marginLeft: 10 }} />
                <CustomInput
                    placeholder='Link'
                    type='CREATELINK'
                    value={link}
                    setValue={(text) => {
                        setLink(text)
                        setErrorText('')
                    }}
                    onPress={linkAdd}
                />
                {errorText && (
                    <Alert
                        text={errorText}
                        type="alert-circle"
                        containerStyles={{ marginLeft: 10, marginTop: 5 }}
                    />
                )}

                {loading && (
                     <Alert
                     text='Estamos encurtando, aguarde.'
                     type="loading"
                     containerStyles={{ marginLeft: 10, marginTop: 5 }}
                 />
                )}
                <Title
                    type="WHITE"
                    containerStyles={{ marginLeft: 10, marginTop: 10 }}
                    text="Histórico"
                />
                <Alert
                    text="Aperte no ícone para navegar para o link encurtado."
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5 }}
                />
                <Alert
                    text="Arraste para o lado esquerdo para favoritar ou deletar"
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5, marginBottom: 20 }}
                />

                <FlatList
                    data={allLinks}
                    style={{ marginBottom: 60 }}
                    renderItem={({ item, index }) => (
                        <AnimatedSwipe
                            pressDelete={(index) => linkDelete(allLinks[index])}
                            pressFavorite={(index) => linkFavorite(allLinks[index])}
                            index={index}
                        >
                            <CardLink linkText={item as string} />
                        </AnimatedSwipe>
                    )}
                />
            </Container>
        </AreaPressable>
    )
}
