/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useEffect, useState } from "react";

export default function FormEndereco() {
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [dados, setDados] = useState('');

  function aoMudarCep(e: React.ChangeEvent<HTMLInputElement>) {
    setCep(e.target.value)
  }



  function aoMudarRua(e: React.ChangeEvent<HTMLInputElement>) {
    setRua(e.target.value)
  
  }

  function aoMudarBairro(e: React.ChangeEvent<HTMLInputElement>) {
    setBairro(e.target.value)

  }

  function aoMudarCidade(e: React.ChangeEvent<HTMLInputElement>) {
    setCidade(e.target.value)
    
  }

  function aoMudarUf(e: React.ChangeEvent<HTMLInputElement>) {
    setUf(e.target.value)
    
  }

  useEffect(() => {

    async function CarregarCep() {
      const res = await fetch('viacep.com.br/ws/01001000/json/')
      const dados = await res.json()
      setDados(dados)
    }
    CarregarCep();
  },
    []);


  return (
    <fieldset
      className="
        w-1
        font-black
        flex
        flex-col 
        gap-4"
    >
      <label htmlFor="CEP"></label>
      <input
        name="cep"
        onChange={aoMudarCep}
        onBlur={aoMudarCep} 
        type="text"
        id="CEP"
        placeholder="CEP (ex:12345-600)"
      />

      <label htmlFor="Rua"></label>
      <input
        name="rua"
        onChange={aoMudarRua}
        type="text" id="Rua" placeholder="Rua (ex:Rua maria)" />

      <label htmlFor="Bairro"></label>
      <input
        name="bairro"
        onChange={aoMudarBairro}
        type="text"
        id="Bairro"
        placeholder="Bairro (ex: Andrade Cunha)"
      />

      <label htmlFor="Cidade"></label>
      <input
        name="cidade"
        onChange={aoMudarCidade}
        type="text" id="Cidade" placeholder="Cidade (ex:Rondonopolis)" />

      <label htmlFor="UF"></label>
      <input
        name="uf"
        onChange={aoMudarUf}
        type="text" id="UF" placeholder="UF" />
    </fieldset>
  );
}

function setDados(dados: unknown) {
  throw new Error("Function not implemented.");
}

