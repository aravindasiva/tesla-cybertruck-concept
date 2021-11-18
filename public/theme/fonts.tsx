import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Gotham';
        font-style: normal;
        font-weight: bold;
        src: url('./fonts/Gotham-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'GothamBlack';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/Gotham-Black.otf') format('opentype');
      }
      @font-face {
        font-family: 'GothamLight';
        font-style: normal;
        font-weight: bold;
        src: url('./fonts/Gotham-Light.otf') format('opentype');
      }
      `}
  />
)
export default Fonts