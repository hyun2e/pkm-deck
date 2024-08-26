import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div``;

const Button = styled.button``;

function PokemonCard({ pokemon, onAddd, onRemove, isSelected }) {
  const navigate = useNavigate();

  return (
    <Card>
      <div onClick={() => navigate(`/detail?id=${pokemon.id}`)}>
        <img src={""} alt={""} />
        <p>{pokemon.korean_name}</p>
      </div>
      {isSelected ? (
        <Button
          onClick={() => {
            onRemove();
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
            onAddd();
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
