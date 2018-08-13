import { injectGlobal } from 'styled-components';
import photo from '../images/dark_mosaic.png';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    background-image: url(${photo});
    background-repeat: repeat;

  }

  #app {
    min-height: 100%;
    min-width: 100%;
    display: flex;
    /* background: #0033aa; Old browsers */
    /* background: linear-gradient(135deg, #0033aa 0%,#3366cc 21%,#00aadd 51%,#3366cc 79%,#3366cc 79%,#0033aa 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
  a{
    text-decoration: none;
  }
  .center{
    display: flex;
    justify-content: center;
  }
  
  .end{
    display: flex;
    justify-content: flex-end;
  }
  
  .margin{
    margin: 20px !important;
  }

  .content{
    width:100%;
  }

  .autoMargin{
    margin: auto !important;
  }

  .flex-container{
    display: flex  
  }

  .justify-content{
    justify-content: space-between
  } 
  
  body.fontLoaded {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  .drawerLogo{
    max-height: 36px;
  }
  .fullHeight{
    height: 100%;
  }

  #tooltip-edit{
    padding: 10px 15px;
    min-width: 130px;
    color: #555555;
    line-height: 1.7em;
    background: #ffffff;
    border: none;
    border-radius: 3px;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    max-width: 200px;
    text-align: center;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    line-break: auto;
  }

  #tooltip-delete{
    padding: 10px 15px;
    min-width: 130px;
    color: #555555;
    line-height: 1.7em;
    background: #ffffff;
    border: none;
    border-radius: 3px;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    max-width: 200px;
    text-align: center;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    line-break: auto;
}`;
