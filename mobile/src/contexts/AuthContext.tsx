import React, {useState, createContext, ReactNode, useEffect} from "react";
import { apiLogin } from "../api/axios-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

type AuthContextData = {
    user: UserProps | null;
    isAuthenticated: boolean;
    loadingAuth: boolean;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    name: string;
    email: string;
    token: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loadingAuth, setLoadingAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const isAuthenticated = !!user?.name;
  
    useEffect(() => {
      async function getUser() {
        try {
          const userInfo = await AsyncStorage.getItem('@user');
          const hasUser: UserProps = JSON.parse(userInfo || '{}');
  
          if (Object.keys(hasUser).length > 0) {
            setUser({
              name: hasUser.name,
              email: hasUser.email,
              token: hasUser.token,
            });
          }
        } catch (error) {
          console.error('Erro ao obter informações do usuário:', error);
        } finally {
          setLoading(false);
        }
      }
  
      getUser();
    }, []);
  
    async function signIn(email: string, password: string) {
      setLoadingAuth(true);
  
      try {
        const response = await apiLogin.post('/login', {
          email,
          password,
        });
  
        const { name, token } = response.data;
        const data = {
          ...response.data,
        };
  
        setUser({
          name,
          email,
          token,
        });
  
        await AsyncStorage.setItem('@user', JSON.stringify(data));
      } catch (error) {
        console.error('Erro ao acessar:', error);
        Alert.alert('Desculpe, aconteceu um erro.');
      } finally {
        setLoadingAuth(false);
      }
    }
  
    function signOut() {
      setUser(null);
      AsyncStorage.removeItem('@user');
    }
  
    const contextValue: AuthContextData = {
      user,
      loadingAuth,
      isAuthenticated,
      loading,
      signIn,
      signOut,
    };
  
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
  }
  