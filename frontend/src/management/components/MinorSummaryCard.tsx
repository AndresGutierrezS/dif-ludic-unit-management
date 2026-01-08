

export const MinorSummaryCard = () => {
  return (
    <section className="bg-white my-6 p-6 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
        
        <img
          src="/images/user.png"
          alt="Minor Image"
          className="w-20 h-20 sm:w-24 sm:h-24 border-4 rounded-full border-gray-200"
        />

        <div className="text-gray-600 flex flex-col gap-1 text-center sm:text-left">
          <p className="font-bold text-xl sm:text-2xl text-(--color-principal)">
            Juan Perez Lopez
          </p>

          <p className="text-sm">
            Curp: Curp34242343 · Edad: 15 anios · Sexo: Masculino
          </p>

          <p className="bg-green-100 text-green-700 px-3 py-1 rounded-2xl text-xs w-fit mx-auto sm:mx-0">
            Activo
          </p>

          <p className="text-sm">
            Registro: 2025-08-01
          </p>
        </div>
      </div>
    </section>
  )
}
