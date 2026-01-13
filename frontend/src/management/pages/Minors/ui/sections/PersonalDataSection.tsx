

export const PersonalDataSection =  () => {

    return (
        <section>
            {/* Section title */}
            <div className="px-6 py-5 bg-(--color-secondary) flex justify-between rounded-t-lg items-center">
                <h2 className="text-(--color-principal) font-bold text-lg">Datos Personales del Menor</h2>
                <span className="text-blue-400 text-xs px-2 py-1 bg-blue-50 rounded-full font-semibold">Obligatorio</span>
            </div>

            {/* Section grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-3 py-6 border border-gray-200 rounded-md">
                <div className="flex flex-col">
                    <label 
                        htmlFor="name"
                        className="mb-1.5 text-(--color-principal) font-semibold"
                    >
                        Nombre(s) <span className="text-red-500">*</span>
                    </label>
                    <input 
                        id='name'
                        type="text" 
                        className="border border-gray-200 rounded-sm w-full min-h-10 px-2"    
                    />
                </div>
                <div className="flex flex-col">
                    <label 
                        htmlFor="paternal-last-name"
                        className="mb-1.5 text-(--color-principal) font-semibold"
                    >
                        Apellido Paterno <span className="text-red-500">*</span>
                    </label>
                    <input 
                        id='paternal-last-name'
                        type="text" 
                        className="border border-gray-200 rounded-sm w-full min-h-10 px-2"    
                    />
                </div>
                <div className="flex flex-col">
                    <label 
                        htmlFor="maternal-last-name"
                        className="mb-1.5 text-(--color-principal) font-semibold"
                    >
                        Apellido Materno
                    </label>
                    <input 
                        id='maternal-last-name'
                        type="text" 
                        className="border border-gray-200 rounded-sm w-full min-h-10 px-2"    
                    />
                </div>
                <div className="flex flex-col">
                    <label 
                        htmlFor="curp"
                        className="mb-1.5 text-(--color-principal) font-semibold"
                    >
                        CURP <span className="text-red-500">*</span>
                    </label>
                    <input 
                        id='curp'
                        type="text" 
                        className="border border-gray-200 rounded-sm w-full min-h-10 px-2"    
                    />
                </div>
                <div className="flex flex-col">
                    <label 
                        htmlFor="birthday"
                        className="mb-1.5 text-(--color-principal) font-semibold"
                    >
                        Fecha de Nacimiento <span className="text-red-500">*</span>
                    </label>
                    <input 
                        id='birthday'
                        type="date" 
                        className="border border-gray-200 rounded-sm w-full min-h-10 px-2"    
                    />
                </div>
                <div className="flex flex-col">
                    <label 
                        htmlFor="gender"
                        className="mb-1.5 text-(--color-principal) font-semibold"
                    >
                        Sexo <span className="text-red-500">*</span>
                    </label>
                    <select 
                        id='gender'
                        className="border border-gray-200 rounded-sm w-full min-h-10 px-2"    
                    >
                        <option >Seleccionar...</option>
                        <option >Hombre</option>
                        <option >Mujer</option>
                    </ select>
                </div>
                <div className="flex flex-col">
                    <label 
                        htmlFor="nationality"
                        className="mb-1.5 text-(--color-principal) font-semibold"
                    >
                        Nacionalidad <span className="text-red-500">*</span>
                    </label>
                    <input 
                        id='nationality'
                        type="text" 
                        className="border border-gray-200 rounded-sm w-full min-h-10 px-2"    
                    />
                </div>
            </div>
        </section>
    )
}