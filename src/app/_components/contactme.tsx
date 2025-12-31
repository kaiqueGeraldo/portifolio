"use client";

import Image from "next/image";
import { Assets } from "@/assets";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  nome: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um e-mail válido"),
  assunto: z.string().min(3, "O assunto é muito curto"),
  mensagem: z.string().min(10, "Sua mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

export function ContactMe() {
  const maxLength = 800;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  });

  const mensagemAtual = watch("mensagem", "");

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok) {
        toast.success("Mensagem enviada com sucesso! 🚀");
        reset();
      } else if (res.status === 429) {
        toast.error("Muitas tentativas! Tente novamente em 24h.");
      } else {
        toast.error(responseData.error || "Erro ao enviar mensagem.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão. Verifique sua internet.");
    }
  };

  const getInputClass = (hasError: boolean) =>
    `w-full p-3 rounded-md border ${
      hasError
        ? "border-red-800 focus:ring-red-800"
        : "border-black/60 focus:ring-primary"
    } placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 transition-colors duration-300`;

  const ErrorMessage = ({ message }: { message?: string }) => {
    if (!message) return null;
    return (
      <span className="text-red-800 text-xs font-medium mt-1 ml-1 block tracking-wide">
        {message}
      </span>
    );
  };

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center lg:px-16">
      {/* Texto e Imagem */}
      <div className="text-center lg:text-left">
        <div data-aos="zoom-in">
          <h1 className="font-colgent text-4xl font-bold">CONTATE-ME</h1>
          <p className="font-semibold text-secondary text-lg mb-6">
            Para contatos profissionais, oportunidades ou propostas de
            colaboração, sinta-se à vontade para preencher o formulário.
          </p>
        </div>
        <Image
          src={Assets.General.Contato}
          alt={"Contato"}
          className="hidden lg:block max-w-sm"
          data-aos="fade-right"
        />
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-opacity-90 bg-white/20 p-6 rounded-xl shadow-lg flex flex-col gap-3"
        data-aos="fade-left"
      >
        {/* Campo Nome */}
        <div>
          <input
            {...register("nome")}
            placeholder="Nome"
            maxLength={50}
            className={getInputClass(!!errors.nome)}
          />
          <ErrorMessage message={errors.nome?.message} />
        </div>

        {/* Campo Email */}
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            maxLength={50}
            className={getInputClass(!!errors.email)}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>

        {/* Campo Assunto */}
        <div>
          <input
            {...register("assunto")}
            placeholder="Assunto"
            maxLength={100}
            className={getInputClass(!!errors.assunto)}
          />
          <ErrorMessage message={errors.assunto?.message} />
        </div>

        {/* Campo Mensagem */}
        <div>
          <textarea
            {...register("mensagem")}
            placeholder="Digite sua mensagem..."
            maxLength={maxLength}
            onWheel={(e) => e.stopPropagation()} 
            data-lenis-prevent
            className={`${getInputClass(!!errors.mensagem)} resize-none h-40 overflow-y-auto overscroll-y-contain cursor-text`}
          />
          <div className="flex justify-between items-start mt-1 px-1">
            <div className="flex-1">
              <ErrorMessage message={errors.mensagem?.message} />
            </div>
            <span className="text-xs text-black/60 font-medium ml-2">
              {mensagemAtual.length} / {maxLength}
            </span>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center shadow-md font-semibold tracking-wide mt-2"
        >
          {isSubmitting ? (
            <span className="animate-pulse">Enviando...</span>
          ) : (
            "Enviar Mensagem"
          )}
        </button>
      </form>
    </div>
  );
}
