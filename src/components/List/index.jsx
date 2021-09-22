import styled from "styled-components";

const List = ({ people }) => {
  return (
    <Container>
      {people.map((person) => (
        <Wrapper key={person.id}>
          <ImageWrapper>
            <Image src={person.image} alt={person.name} />
          </ImageWrapper>
          <Info>
            <Name>{person.name}</Name>
            <Age>{person.age}</Age>
          </Info>
        </Wrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 103px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  position: absolute;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin-bottom: 3px;
  padding: 0;
`;

const Age = styled.h4`
  margin-top: 3px;
  padding: 0;
`;

export default List;
