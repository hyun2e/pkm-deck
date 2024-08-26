import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div``;

const Dashboard = ({ selectedPokemon }) => {
  console.log(selectedPokemon);
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={true} />
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
