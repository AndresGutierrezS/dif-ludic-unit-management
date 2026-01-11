import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPosting(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const user = formData.get('user') as string;
    const password = formData.get('password') as string;

    //todo: isValid
    
    navigate('/');
    return;

    setIsPosting(false);
  }
  
  return (
    <>
      <p className='text-center mb-6 text-lg text-gray-700 font-semibold'>
        Inserte sus credenciales para ingresar
      </p>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input 
          type="text"
          name="user"
          placeholder="Nombre de usuario"
          className='w-full p-2.5 shadow-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-principal)' 
        />

        <input 
          type="text"
          name="password"
          placeholder="Contraseña personal" 
          className="w-full p-2.5 shadow-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-principal)"
        />

        <button
          className="text-white bg-(--color-principal) rounded-md font-semibold p-2.5 hover:opacity-90 transition cursor-pointer"
          type="submit"
          disabled={isPosting}
        >
          Acceder
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-5">
        ¿No tienes una cuenta?{" "}
        <Link
          to="/auth/register"
          className="text-(--color-principal) font-semibold hover:underline"
        >
          Registrarse
        </Link>
      </p>
    </>
  )
}
