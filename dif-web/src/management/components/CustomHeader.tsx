
export const CustomHeader = () => {
    return (
      <header className="bg-(--color-principal) w-full h-20 px-7 text-white flex items-center justify-between">
        
        {/* left */}
        <div className="flex items-center gap-3">
          <img src="./images/logoDIF.png" alt="DIF logo" className="w-16 h-10" />
          <div>
            <p className="text-xl font-semibold leading-tight">
              Sistema Seguimiento de Gestión de Menores
            </p>
            <p className="text-sm text-blue-100">
              DIF Guadalajara
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-7">
          <img src="./images/user.png" alt="User Image" className="w-10 h-10 rounded-3xl"/>
          <div>
            <p className="text-sm font-semibold">
              Administrador
            </p>
            <p className="text-xs">
              Último acceso: 17/07/2025 21:32
            </p>
          </div>
          <button className="rounded-md border text-sm px-4 h-8.5">
            Cerrar sesión
          </button>
        </div>
            
      </header>
    );
}
