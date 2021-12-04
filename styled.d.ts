import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      text: string,
      primary: string,
      secundary: string,

      background: string
    }
  }
}