import TableCharacters from "./TableCharacters";
import "./TopCharacterInfo.css";

const TopCharacterInfo = ({ characters }) => {
  return (
    <div className="top-card-container">
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <TableCharacters characterdata={characters} />
        </table>
      </section>
    </div>
  );
};

export default TopCharacterInfo;