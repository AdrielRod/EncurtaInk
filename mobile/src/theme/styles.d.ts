import 'styled-components/native'
import { theme } from './theme'
import { ThemeData } from './theme'

declare module 'styled-components/native' {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeData {}
}