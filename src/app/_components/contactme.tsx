"use client";

import localFont from "next/font/local";
import Image from "next/image";
import contatoImg from "../../../public/contato.webp";
import { useState } from "react";

const minhaFonte = localFont({
  src: "../../../public/fonts/Colgent.ttf",
  display: "swap",
});

export function ContactMe() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const maxLength = 400;

  const API_URL = "https://backend-portifolio.up.railway.app/enviar-email";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.nome || !form.email || !form.assunto || !form.mensagem) {
      setMessage("❌ Preencha todos os campos antes de enviar.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setMessage("✅ Email enviado com sucesso! Obrigado pelo contato.");
        setForm({ nome: "", email: "", assunto: "", mensagem: "" });
      } else {
        setMessage(`❌ Erro: ${data.message || "Erro ao enviar email."}`);
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setMessage("❌ Erro ao enviar email.");
      setLoading(false);
    }
  };

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center lg:px-16">
      {/* Texto e Imagem */}
      <div className="text-center lg:text-left">
        <div data-aos="zoom-in">
          <h1 className={`${minhaFonte.className} text-4xl font-bold`}>
            CONTATE-ME
          </h1>
          <p className="font-semibold text-secondary text-lg mb-6">
            ESTAMOS SEMPRE A UMA MENSAGEM DE DISTÂNCIA! ESTOU ABERTO A NOVOS
            PROJETOS E OPORTUNIDADES DE TRABALHO. ENTRE EM CONTATO!
          </p>
        </div>
        <Image
          src={contatoImg}
          alt={"Contato"}
          className="hidden lg:block max-w-sm"
          data-aos="fade-right"
        />
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-opacity-90 bg-white/20 p-6 rounded-xl shadow-lg"
        data-aos="fade-left"
      >
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          maxLength={50}
          value={form.nome}
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded-md border border-black/60 placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          data-aos="zoom-in"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          maxLength={50}
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded-md border border-black/60 placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          data-aos="zoom-in"
        />
        <input
          type="text"
          name="assunto"
          placeholder="Assunto"
          maxLength={50}
          value={form.assunto}
          onChange={handleChange}
          className="w-full p-3 mb-3 rounded-md border border-black/60 placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          data-aos="zoom-in"
        />
        <textarea
          name="mensagem"
          placeholder="Digite sua mensagem..."
          maxLength={maxLength}
          value={form.mensagem}
          onChange={handleChange}
          onInput={handleInput}
          className="w-full p-3 rounded-md border border-black/60 placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          data-aos="zoom-in"
          style={{ resize: "none", overflow: "hidden" }}
        />
        <div
          className="text-sm text-black/60 flex justify-end"
          data-aos="zoom-in"
        >
          <span>{form.mensagem.length}</span> / {maxLength}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-primary text-white p-3 rounded-md hover:bg-primary/90 transition-all"
          data-aos="zoom-in"
        >
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </button>
        {message && <p className="mt-3 text-black">{message}</p>}
      </form>
    </div>
  );
}
