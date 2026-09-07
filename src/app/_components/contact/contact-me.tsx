"use client";

import Image from "next/image";
import { Assets } from "@/assets";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

function createContactSchema(t: (key: string) => string) {
  return z.object({
    nome: z.string().min(2, t("errors.nameMin")),
    email: z.string().email(t("errors.emailInvalid")),
    assunto: z.string().min(3, t("errors.subjectMin")),
    mensagem: z.string().min(10, t("errors.messageMin")),
  });
}

type ContactFormSchema = z.infer<ReturnType<typeof createContactSchema>>;

function getApiErrorMessage(
  status: number,
  responseData: { error?: string } | null,
  t: (key: string) => string,
) {
  if (status === 429) return t("errors.tooManyRequests");
  if (responseData?.error) return responseData.error;
  return t("errors.generic");
}

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span role="alert" className="text-red-300 text-xs font-medium mt-1 ml-1 block tracking-wide">
      {message}
    </span>
  );
}

export function ContactMe() {
  const maxLength = 800;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const t = useTranslations("ContactMe");

  const contactSchema = useMemo(() => createContactSchema(t), [t]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  });

  const mensagemAtual = useWatch({ control, name: "mensagem", defaultValue: "" });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json().catch(() => null);

      if (res.ok) {
        toast.success(t("success"));
        reset();
        return;
      }

      toast.error(getApiErrorMessage(res.status, responseData, t));
    } catch (error) {
      console.error(error);
      toast.error(t("errors.network"));
    }
  };

  const getInputClass = (hasError: boolean) =>
    `w-full p-3 rounded-md border ${
      hasError
        ? "border-red-400 focus:ring-red-400"
        : "border-white/20 focus:ring-primary"
    } placeholder-muted bg-transparent focus:outline-none focus:ring-2 transition-colors duration-300`;

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center lg:px-16">
      <div className="text-center lg:text-left">
        <div data-reveal="zoom-in">
          <h2 className="tracking-tight text-4xl font-medium">{t("title")}</h2>
          <p className="font-semibold text-secondary text-lg mb-6">
            {t("subtitle")}
          </p>
        </div>

        <Image
          width={1200}
          height={896}
          src={Assets.General.Contato}
          alt=""
          sizes="(min-width: 1280px) 560px, (min-width: 1024px) 440px, 288px"
          className="mx-auto w-72 max-w-full lg:w-full lg:max-w-[560px] h-auto object-contain lg:mx-0"
          data-reveal="fade-right"
          data-reveal-delay="160"
        />
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-white/10 bg-white/5 p-6 rounded-xl shadow-lg flex flex-col gap-3"
        data-reveal="fade-up"
        data-reveal-delay="280"
      >
        {/* Campo Nome */}
        <div>
          <input
            {...register("nome")}
            aria-label={t("namePlaceholder")}
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            maxLength={50}
            className={getInputClass(!!errors.nome)}
          />
          <ErrorMessage message={errors.nome?.message} />
        </div>

        {/* Campo Email */}
        <div>
          <input
            {...register("email")}
            aria-label={t("emailPlaceholder")}
            type="email"
            autoComplete="email"
            placeholder={t("emailPlaceholder")}
            maxLength={50}
            className={getInputClass(!!errors.email)}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>

        {/* Campo Assunto */}
        <div>
          <input
            {...register("assunto")}
            aria-label={t("subjectPlaceholder")}
            placeholder={t("subjectPlaceholder")}
            maxLength={100}
            className={getInputClass(!!errors.assunto)}
          />
          <ErrorMessage message={errors.assunto?.message} />
        </div>

        {/* Campo Mensagem */}
        <div>
          <textarea
            {...register("mensagem")}
            aria-label={t("messagePlaceholder")}
            placeholder={t("messagePlaceholder")}
            maxLength={maxLength}
            onWheel={(e) => e.stopPropagation()}
            data-lenis-prevent
            className={`${getInputClass(!!errors.mensagem)} resize-none h-40 overflow-y-auto overscroll-y-contain cursor-text`}
          />
          <div className="flex justify-between items-start mt-1 px-1">
            <div className="flex-1">
              <ErrorMessage message={errors.mensagem?.message} />
            </div>
            <span className="text-xs text-muted font-medium ml-2">
              {mensagemAtual.length} / {maxLength}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-background p-3 rounded-md hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center shadow-md font-semibold tracking-wide mt-2"
        >
          {isSubmitting ? (
            <span className="animate-pulse">{t("sending")}</span>
          ) : (
            <span>{t("sendBtn")}</span>
          )}
        </button>
      </form>
    </div>
  );
}
