import styled from "styled-components";

import { Footer, Header, Main } from "./components";

const Root = styled.div`
  background-color: #05336b;
  background-image: linear-gradient(#05336b 9%, #0d5ab9); ;
`;

function App() {
  return (
    <Root>
      <Header />
      <Main />
      <Footer />
    </Root>
  );
}

export default App;
