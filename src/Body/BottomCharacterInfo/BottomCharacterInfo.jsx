import React from "react";
import "./BottomCharacterInfo.css";

export default class BottomCharacterInfo extends React.Component {
  render() {
    const characters = this.props.characters;
    return (
      <div className="total-container">
        <section className="character-cards">
          <div className="card-container">
            {characters.map((character, index) => (
              <div key={index} className="card">
                <div className="card-titles">
                  <h3>{character.name}</h3>
                  {character.nickName && <h4>{character.nickName}</h4>}
                </div>
                <div className="img-division">
                  <img src={character.imageUrl} alt={character.name} />
                </div>
                <p>{character.background}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}
