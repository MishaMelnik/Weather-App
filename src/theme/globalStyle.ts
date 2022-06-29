import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
      display: flex;
      margin: 4% auto 0 auto;
      width: 1280px;
      border-radius: 10px;
      height: 630px;
      box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    }

    h1 {
        margin: 0;
        padding: 0;
    }

    h2 {
        margin: 0;
        padding: 0;
    }

    .container {
        max-width: 1110px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .image {
        margin-right: 40px;
        width: 240px;
        height: 240px;
        grid-area: image;

        &.sold {
            z-index: 5;
        }
    }

    @media screen and (max-width: 640px) {
        .image {
            margin: 0 auto;
        }
    }

    @media screen and (min-width: 640px) and (max-width: 1280px) {
        .container {
            padding: 0 32px;
        }
 
        .image {
            width: 250px;
            height: 250px;
            grid-template-columns:100%;
        }
    }
`;

export default GlobalStyle;
