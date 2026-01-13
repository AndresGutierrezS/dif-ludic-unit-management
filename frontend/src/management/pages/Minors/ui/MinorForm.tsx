import { Link } from "react-router-dom"
import { PersonalDataSection } from "./sections/PersonalDataSection"


export const MinorForm = () => {


    return (
        <form>
            <div className="mt-6 p-6 bg-white flex flex-col gap-5 rounded-xl">
                {/* Jumbotron */}
                <div className="flex justify-between border-b-2 border-gray-200 py-3">
                    <h1 className="font-bold text-(--color-principal) text-2xl">Nuevo Registro de Menor</h1>
                    <Link to={'/'}>
                        <button className="px-5 py-2 text-sm text-(--color-principal) bg-(--color-secondary) rounded-md hover:bg-gray-700 hover:text-white hover:transition font-semibold">
                            Cancelar
                        </button>
                    </Link>
                </div>

                {/* Warning */}
                <p className="px-5 py-3 bg-blue-50 text-blue-400 border-l-4 border-blue-400 text-md rounded-sm">
                    Los campos marcados con * son obligatorios.
                </p>

                {/* Sections */}
                <PersonalDataSection />
            </div>
        </form>
    )
}