import Map from "./components/Map/index";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
   background-color: #00583F;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Map />
    </div>
  );
}

export default App;
