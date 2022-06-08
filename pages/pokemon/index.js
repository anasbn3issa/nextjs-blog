import Layout from "../../components/layout";
import { useQuery } from "react-query";
import { getAllPokemons } from "../../lib/api";
import { useState } from "react";

export default function Post({ postData }) {
  const [name,setName] = useState('bulbasaur');
  const res = useQuery("pokemondddd", () => getAllPokemons(name), {
      onSuccess: (data) => {
          // n'affichi toast wala redirect
          console.log("success");
          console.log(data);
      },
      onError: (err) => {
          // toast wala ay haja . 
          console.log("error");
      },
  });

  console.log(res.data)

  return (
    <Layout>
      <>
        {/* {!res.isLoading ? (
          res.data.map((pokemon) => <div> {pokemon.name}</div>)
        ) : (
          <h1>still loading</h1>
        )} */}
      </>
    </Layout>
  );
}
