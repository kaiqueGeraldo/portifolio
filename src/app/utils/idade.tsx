"use client";

import { useState, useEffect } from "react";

const calcularIdade = (dataNascimento: string): number => {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  if (
    hoje.getMonth() < nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() &&
      hoje.getDate() < nascimento.getDate())
  ) {
    idade--;
  }
  return idade;
};

export default function Idade() {
  const [idade, setIdade] = useState<number | null>(null);

  useEffect(() => {
    setIdade(calcularIdade("2007-04-24"));
  }, []);

  if (idade === null) return null;

  return <span>{idade}</span>;
}
