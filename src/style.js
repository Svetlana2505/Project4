import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const Global = createGlobalStyle`


body {
  background: #000;

}

h1,p{
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;

}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


`;
