import React from 'react';
import './TopCharacterInfo.css';

const TableCharacters = ({ characterdata }) => {
  const filteredCharacters = characterdata.filter(
    character => character.votes >= 90 && character.votes <= 110
  ).sort((a, b) => b.votes - a.votes)

  return (
    <tbody>
      {filteredCharacters.map((character, index) => (
        <tr key={index} className={index % 2 === 0 ? "dark" : "light"}>
          <td>{character.name}</td>
          <td>{character.skillset}</td>
          <td>{character.votes}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableCharacters;
