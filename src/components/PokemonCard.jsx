import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/pokemonContext";
import { useContext } from "react";

const Card = styled.div``;

const Button = styled.button``;

function PokemonCard({ pokemon, onAddd, isSelected }) {
  const navigate = useNavigate();
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  const removePokemon = (pokemon) => {
    const filteredPokemon = selectedPokemon.filter(
      (poke) => poke.id !== pokemon.id
    );
    setSelectedPokemon(filteredPokemon);
  };

  return (
    <Card>
      <div onClick={() => navigate(`/detail?id=${pokemon.id}`)}>
        <img src={""} alt={""} />
        <p>{pokemon.korean_name}</p>
      </div>
      {isSelected ? (
        <Button
          onClick={() => {
            removePokemon(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
            onAddd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
