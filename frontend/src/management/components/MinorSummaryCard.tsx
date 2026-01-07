

export const MinorSummaryCard = () => {
  return (
    <section className="bg-white my-4 p-5">
        <div className="flex gap-6">
            <img src="/images/user.png" alt="User Image" className="w-30 h-30 border-4 rounded-full border-gray-200"/>
            <div>
                <p>Juan Perez Lopez</p>
                <p>Curp: Curp34242343  Edad: 15 anios</p>
                <p>Sexo: Masculino</p>
                <p>Activo</p>
                <p>Registro: 2025-08-01</p>
            </div>
        </div>
    </section>
  )
}
