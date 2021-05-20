import React, { useState, useEffect } from 'react'
import PokemonService from '../shared/api/service/PokemonService'

export const HomeView = () => {
	const [character, setCharacter] = useState([])
	const [count, setCount] = useState(1)

  const fetchDataFromExternalAPI = async () => {
		const { data } = (await PokemonService.searchForPokemon(count))
		setCharacter(data)
  }

	useEffect (() => {
		fetchDataFromExternalAPI()

	}, [count])

	const buttons = () => {
		return <div>
			<button onClick={() => setCount(count + 1)}>Increment</button> <br />
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	}

	const displayCharacterName = () => {
		if (character || undefined) {
			return <div>
				<h2>{(character || undefined)?.name}</h2>
			</div>
		}
	}

	return (
		<div>
			<h1>inlämning 2 </h1>
			{displayCharacterName()}
			{buttons()}
		</div>
	)
}
