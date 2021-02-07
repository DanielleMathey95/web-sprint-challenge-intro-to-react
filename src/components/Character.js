// Write your Character component here
import React from "react";
import styled from "styled-components";
const Character = (props) => {
  const {character} = props
  return (
    <div className="container">
      <div className="info">
        <Card>
          <Name>
            <h3>{character.name}</h3>
          </Name>
          <Info>
            <p>DOB: {character.birth_year}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
          </Info>
        </Card>
      </div>
    </div>
  );
};

const Card = styled.div`
  background-color: black;
  color: lightgrey;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10%;
  margin-bottom: 5%;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  background: -webkit-linear-gradient(left, #081a8c, #29d606, #58088c);
`;

const Info = styled.p`
  font-size: 20px;
  color: #098496
`

export default Character;
