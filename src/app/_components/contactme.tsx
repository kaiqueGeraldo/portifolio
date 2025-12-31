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
  const maxLength = 400;
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
            className={`w-full p-3 rounded-md border ${
              errors.nome ? "border-red-900" : "border-black/60"
            } placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.nome && (
            <span className="text-red-900 text-sm mt-1 block">
              {errors.nome.message}
            </span>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            maxLength={50}
            className={`w-full p-3 rounded-md border ${
              errors.email ? "border-red-900" : "border-black/60"
            } placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.email && (
            <span className="text-red-900 text-sm mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Campo Assunto */}
        <div>
          <input
            {...register("assunto")}
            placeholder="Assunto"
            maxLength={50}
            className={`w-full p-3 rounded-md border ${
              errors.assunto ? "border-red-900" : "border-black/60"
            } placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.assunto && (
            <span className="text-red-900 text-sm mt-1 block">
              {errors.assunto.message}
            </span>
          )}
        </div>

        {/* Campo Mensagem */}
        <div>
          <textarea
            {...register("mensagem")}
            placeholder="Digite sua mensagem..."
            maxLength={maxLength}
            className={`w-full p-3 rounded-md border ${
              errors.mensagem ? "border-red-900" : "border-black/60"
            } placeholder-black/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-red-900 text-sm min-h-[20px]">
              {errors.mensagem?.message}
            </span>
            <span className="text-sm text-black/60">
              {mensagemAtual.length} / {maxLength}
            </span>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
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
