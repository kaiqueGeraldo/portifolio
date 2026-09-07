export default function Loading() {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <div className="text-lg font-semibold text-primary">Carregando...</div>
    </section>
  );
}
