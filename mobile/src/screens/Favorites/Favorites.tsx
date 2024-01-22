import { useContext, useState, useCallback } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { Alert as Alerta } from "react-native"
import { Alert, CardLink, CustomInput, Header, Label, Title } from "../../components/interface"
import { Container, FlatList } from "./FavoritesStyles"
import { AuthContext } from "../../contexts/AuthContext"
import { AreaPressable } from "../Login/LoginStyles"
import { Keyboard } from "react-native"
import { AnimatedSwipe } from "../../components/animations"
import { getFavorites } from "../../services"
import AsyncStorage from "@react-native-async-storage/async-storage"


export default function Favorites() {

    const [allLinksFavorited, setAllLinksFavorited] = useState<string[]>([])

    useFocusEffect(
        useCallback(() => {
            let isActive = true;

            async function fetchLinks() {
                if (!isActive) return;

                try {
                    const links = await getFavorites();
                    setAllLinksFavorited(links);
                } catch (error) {
                    console.error(error);
                }
            }

            fetchLinks()
            return () => {
                isActive = false;
            };
        }, [setAllLinksFavorited])
    )

    async function linkDelete(link: string) {
        try {
            const updatedLinks = allLinksFavorited.filter((item) => item !== link)

            await AsyncStorage.setItem('@links', JSON.stringify(updatedLinks))
            await AsyncStorage.setItem('@favorites', JSON.stringify(updatedLinks))

            setAllLinksFavorited(updatedLinks)

            Alerta.alert(`${link} foi deletado com sucesso.`)
        } catch (error) {
            console.error('Erro ao remover o link:', error)
        }
    }


    async function linkUnfavorite(link: string) {
        try {
            const updatedLinks = allLinksFavorited.filter((item) => item !== link)

            await AsyncStorage.setItem('@favorites', JSON.stringify(updatedLinks))

            setAllLinksFavorited(updatedLinks)

            Alerta.alert(`${link} foi removido dos favoritos.`)
        } catch (error) {
            console.error('Erro ao remover o link:', error)
        }
    }

    return (
        <AreaPressable onPress={() => Keyboard.dismiss()}>
            <Container>
                <Header />

                <Title
                    type="WHITE"
                    containerStyles={{ marginLeft: 10, marginTop: 40 }}
                    text="Favoritos"
                />
                <Alert
                    text="Aperte no ícone para navegar para o link encurtado."
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5 }} />
                <Alert
                    text="Arraste para o lado esquerdo para desfavoritar ou deletar"
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5, marginBottom: 20, }} />

                <FlatList
                    data={allLinksFavorited}
                    style={{ marginBottom: 60 }}
                    renderItem={({ item, index }) => (
                        <AnimatedSwipe
                            pressDelete={(index) => linkDelete(allLinksFavorited[index])}
                            pressFavorite={(index) => linkUnfavorite(allLinksFavorited[index])}
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
