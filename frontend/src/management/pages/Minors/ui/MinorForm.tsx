import { Link } from "react-router-dom"


export const MinorForm = () => {


    return (
        <form>
            <div className="mt-6 p-6 bg-white flex flex-col gap-5 rounded-xl">
                {/* Jumbotron */}
                <div className="flex justify-between border-b-2 border-gray-200 py-3">
                    <h1 className="font-bold text-(--color-principal) text-2xl">Nuevo Registro de Menor</h1>
                    <Link to={'/'}>
                        <button className="px-5 py-2 text-sm text-gray-700 bg-(--color-secondary) rounded-md hover:bg-gray-700 hover:text-white hover:transition font-semibold">
                            Cancelar
                        </button>
                    </Link>
                </div>

                {/* Warning */}
                <p className="px-5 py-3 bg-blue-50 text-blue-400 border-l-4 border-blue-400 text-md rounded-sm">
                    Los campos marcados con * son obligatorios.
                </p>

                {/* Sections */}
                <div>
                    {/* Section title */}
                    <div className="px-6 py-5 bg-(--color-secondary) flex justify-between rounded-t-lg items-center">
                        <h2 className="text-(--color-principal) font-bold text-lg">Datos Personales del Menor</h2>
                        <span className="text-blue-400 text-xs px-2 py-1 bg-blue-50 rounded-full">Obligatorio</span>
                    </div>
                    <div className="grid grid-cols-3 px-3 py-6 border border-gray-200 rounded-md">
                        <div>
                            <p className="mb-1 text-gray-700 font-semibold">Nombre(s) <span className="text-red-500">*</span> </p>
                            <input 
                                type="text" 
                                className="border border-gray-200 rounded-sm w-full min-h-10"    
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}