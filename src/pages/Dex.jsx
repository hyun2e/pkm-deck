import { useEffect, useState } from "react";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../context/pokemonContext";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // useEffect(() => {
  //   // selectedPokemon 상태가 변경된 후에 실행되는 코드
  //   if (selectedPokemon.length > 6) {
  //     alert("최대 포캣몬 6개까지");

  //     // 최대 갯수를 초과한 경우 마지막에 추가된 포켓몬을 제거
  //     setSelectedPokemon((prev) => prev.slice(0, 6));
  //   }
  // }, [selectedPokemon]);

  // const addPokemon = (pokemon) => {
  //   if (selectedPokemon.find((item) => item.id === pokemon.id)) {
  //     alert("이미 등록된 포켓몬 입니다.");
  //     return;
  //   }

  //   setSelectedPokemon([...selectedPokemon, pokemon]);
  // };

  // const addPokemon = (pokemon) => {
  //   if (selectedPokemon.find((item) => item.id === pokemon.id)) {
  //     alert("이미 등록된 포켓몬 입니다.");
  //     return;
  //   }

  //   // 새로운 배열에 할당하여 길이를 체크 후 새 배열을 set
  //   const newPokemon = [...selectedPokemon, pokemon];

  //   if (newPokemon.length > 6) {
  //     alert("최대 포캣몬 6개까지");
  //     return;
  //   }

  //   setSelectedPokemon(newPokemon);
  // };

  const addPokemon = (pokemon) => {
    // 오잉?! 추가 버튼을 눌러도 업데이트 전 selectedPokemon이 나오네?!
    console.log(selectedPokemon);

    // 오잉?! 7개까지 추가가 되네?!
    // 6개 -> 7개로 추가하는 버튼을 눌렀다고 가정해 봅시다.
    // 이 시점에서 selectedPokemon은 setSelectedPokemon보다 이전 시점이기 때문에
    // selectedPokemon.length는 6이기 때문에 아래 if문에 걸리지 않아요.
    if (selectedPokemon.length > 6) {
      alert("최대 포캣몬 6개까지");
      return;
    }

    // 이 시점에서 이제 7개가 되고, 그 다음 추가 버튼을 눌렀을 때 위에 if문에 걸리겠죠?!
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const filteredPokemon = selectedPokemon.filter(
      (poke) => poke.id !== pokemon.id
    );
    setSelectedPokemon(filteredPokemon);
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon: selectedPokemon,
        setSelectedPokemon: setSelectedPokemon,
      }}
    >
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </PokemonContext.Provider>
  );
}

export default Dex;
