import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface PokemonList {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    pokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    pokemons: builder.query<PokemonList, void>({
      query: () => `pokemon`,
    }),
  }),
});

export const {
  useLazyPokemonByNameQuery,
  useLazyPokemonsQuery,
  usePokemonByNameQuery,
  usePokemonsQuery,
} = pokemonApi;
