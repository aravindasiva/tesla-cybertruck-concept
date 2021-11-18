// theme.js
import { extendTheme } from "@chakra-ui/react"

// Global style overrides
// import styles from "./styles"

const overrides = {
  fonts: {
    heading: "Gotham",
    title: "GothamBlack",
    caption: "GothamLight"
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontSize: ["96px"],
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    caption: {
      fontFamily: 'caption',
      fontSize: ["30px"],
      fontWeight: "200",
      letterSpacing: "2px",
    },
    title: {
      fontFamily: 'title',
      fontSize: ["20px"],
      fontWeight: "bold",
      letterSpacing: "-1px",
    },
    small: {
      fontFamily: 'heading',
      fontSize: ["20px"],
      fontWeight: "bold",
      letterSpacing: "-1px",
    }
  }
}

export default extendTheme(overrides)
