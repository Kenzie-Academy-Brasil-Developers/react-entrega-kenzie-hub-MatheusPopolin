import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    }
    body{
        background-color: var(--color-grey-4);
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    img {
    max-width: 100%;
    }

    ul {
    list-style: none;
    }

    :root {
    /* Primary Palette */
    --color-primary:          #FF577F;
    --color-primary-focus:    #FF427F;
    --color-primary-negative: #59323F;

    /* Grey Scale Palette */
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    
    /* Feedback Palette */
    --color-negative: #E83F5B;
    --color-sucess:   #3FE864;

    --radius-1: 8px;
    --radius-2: 4px;
    }    
`;
