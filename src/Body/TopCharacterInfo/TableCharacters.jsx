import React from "react";
import "./TopCharacterInfo.css";

const TableCharacters = ({ characterdata }) => {
  const filteredCharacters = characterdata
    .slice()
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

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
