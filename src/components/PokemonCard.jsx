import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/pokemonContext";
import { useContext } from "react";

const Card = styled.div``;

const Button = styled.button``;

function PokemonCard({ pokemon, isSelected }) {
  const navigate = useNavigate();
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  const removePokemon = (pokemon) => {
    const filteredPokemon = selectedPokemon.filter(
      (poke) => poke.id !== pokemon.id
    );
    setSelectedPokemon(filteredPokemon);
  };

  const addPokemon = (pokemon) => {
    if (selectedPokemon.find((item) => item.id === pokemon.id)) {
      alert("이미 등록된 포켓몬 입니다.");
      return;
    }

    // 새로운 배열에 할당하여 길이를 체크 후 새 배열을 set
    const newPokemon = [...selectedPokemon, pokemon];

    if (newPokemon.length > 6) {
      alert("최대 포캣몬 6개까지");
      return;
    }

    setSelectedPokemon(newPokemon);
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
            addPokemon(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
