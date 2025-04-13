import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeProvider"

const useCustomTheme = () => {
    const theme = useContext(ThemeContext)
    return theme;
}

export default useCustomTheme;