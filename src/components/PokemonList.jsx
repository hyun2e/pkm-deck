import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div``;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isSelected={false}
          onAddd={onAddPokemon}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
