import { Global } from '@emotion/react'

// Import the OpenSans font
import fontOpenSansRegularURL from '@assets/fonts/OpenSans-Regular.woff2'
import fontOpenSansMediumURL from '@assets/fonts/OpenSans-Medium.woff2'
import fontOpenSansSemiboldURL from '@assets/fonts/OpenSans-Semibold.woff2'
import fontOpenSansBoldURL from '@assets/fonts/OpenSans-Bold.woff2'

// Import the Oswald font
import fontOswaldRegularURL from '@assets/fonts/Oswald-Regular.woff2'
import fontOswaldMediumURL from '@assets/fonts/Oswald-Medium.woff2'
import fontOswaldSemiboldURL from '@assets/fonts/Oswald-Semibold.woff2'
import fontOswaldBoldURL from '@assets/fonts/Oswald-Bold.woff2'

// Import the Roboto Condensed font
import fontRobotoCondensedRegularURL from '@assets/fonts/RobotoCondensed-Regular.woff2'
import fontRobotoCondensedBoldURL from '@assets/fonts/RobotoCondensed-Bold.woff2'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      /* Open Sans fonts */
      @font-face {
        font-family: 'OpenSans-Regular';
        font-style: normal;
        font-display: swap;
        src: url(${fontOpenSansRegularURL}) format('woff2');
      }
      @font-face {
        font-family: 'OpenSans-Medium';
        font-style: normal;
        font-display: swap;
        src: url(${fontOpenSansMediumURL}) format('woff2');
      }
      @font-face {
        font-family: 'OpenSans-Semibold';
        font-style: normal;
        font-display: swap;
        src: url(${fontOpenSansSemiboldURL}) format('woff2');
      }
      @font-face {
        font-family: 'OpenSans-Bold';
        font-style: normal;
        font-display: swap;
        src: url(${fontOpenSansBoldURL}) format('woff2');
      }

      /* Oswald fonts */
      @font-face {
        font-family: 'Oswald-Regular';
        font-style: normal;
        font-display: swap;
        src: url(${fontOswaldRegularURL}) format('woff2');
      }
      @font-face {
        font-family: 'Oswald-Medium';
        font-style: normal;
        font-display: swap;
        src: url(${fontOswaldMediumURL}) format('woff2');
      }
      @font-face {
        font-family: 'Oswald-Semibold';
        font-style: normal;
        font-display: swap;
        src: url(${fontOswaldSemiboldURL}) format('woff2');
      }
      @font-face {
        font-family: 'Oswald-Bold';
        font-style: normal;
        font-display: swap;
        src: url(${fontOswaldBoldURL}) format('woff2');
      }

      /* Roboto Condensed fonts */
      @font-face {
        font-family: 'RobotoCondensed-Regular';
        font-style: normal;
        font-display: swap;
        src: url(${fontRobotoCondensedRegularURL}) format('woff2');
      }

      @font-face {
        font-family: 'RobotoCondensed-Bold';
        font-style: normal;
        font-display: swap;
        src: url(${fontRobotoCondensedBoldURL}) format('woff2');
      }
      
      `}
  />
)

export default Fonts
