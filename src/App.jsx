import { useState } from "react";
import List from "./components/List";
import styled from "styled-components";
import data from "./data";
import {mobile} from './responsive'

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <Container>
      <Wrapper>
        <Title>{people.length} birthdays today</Title>
        <List people={people}></List>
        {people.length > 0 && <Button onClick={() => setPeople([])}>Clear</Button>}
        {people.length === 0 && <Button onClick={() => setPeople(data)}>Refresh</Button>}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);

  ${mobile({
    width: "100%",
    height: "100%",
  })}
`;

const Title = styled.h1`

`;

const Button = styled.button`
  margin: 20px;
  width: 280px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  background: linear-gradient(to bottom right, lightblue, lightgreen);
  border: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom right, lightgreen, lightblue);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  }
`;
export default App;
