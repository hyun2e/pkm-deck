import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const DashboardContainer = styled.div``;

const Dashboard = () => {
  const { selectedPokemon } = useContext(PokemonContext);

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
