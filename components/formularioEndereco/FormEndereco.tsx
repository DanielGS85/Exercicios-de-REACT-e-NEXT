'use client'

import { useState } from "react";

export default function FormEndereco() {

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  async function enviaForm() {

    const res = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    const dados = await res.json();

    setRua(dados.logradouro);
    setBairro(dados.bairro);
    setCidade(dados.localidade);
    setUf(dados.uf);
  }

  function aoMudarRua(e: React.ChangeEvent<HTMLInputElement>) {
    setRua(e.target.value);
  }

  function aoMudarBairro(e: React.ChangeEvent<HTMLInputElement>) {
    setBairro(e.target.value);
  }

  function aoMudarCidade(e: React.ChangeEvent<HTMLInputElement>) {
    setCidade(e.target.value);
  }

  function aoMudarUf(e: React.ChangeEvent<HTMLInputElement>) {
    setUf(e.target.value);
  }

  return (
    <>

      <label htmlFor="cep">CEP</label>

      <input
        name="cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        onBlur={enviaForm}
        type="text"
        id="cep"
        placeholder="Digite o CEP"
      />


      <label htmlFor="rua">Rua</label>

      <input
        name="rua"
        value={rua}
        onChange={aoMudarRua}
        type="text"
        id="rua"
        placeholder="Rua"
      />


      <label htmlFor="bairro">Bairro</label>

      <input
        name="bairro"
        value={bairro}
        onChange={aoMudarBairro}
        type="text"
        id="bairro"
        placeholder="Bairro"
      />


      <label htmlFor="cidade">Cidade</label>

      <input
        name="cidade"
        value={cidade}
        onChange={aoMudarCidade}
        type="text"
        id="cidade"
        placeholder="Cidade"
      />


      <label htmlFor="uf">UF</label>

      <input
        name="uf"
        value={uf}
        onChange={aoMudarUf}
        type="text"
        id="uf"
        placeholder="UF"
      />

    </>
  );
}

// function setDados(dados: unknown) {
//   throw new Error("Function not implemented.");
// }

