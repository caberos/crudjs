import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'


function RegisterPage() {

    const { register, handleSubmit, formState: {
        errors} } = useForm();
    const { signup, isAuthenticated, errors: RegisterErrors}  = useAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        if (isAuthenticated) navigate('/task')
    },[isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
       signup(values);
    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md p-10 rounded-md items-center justify-center">
            {
                RegisterErrors.map((error,i)=> (
                    <div className='bg-red-500 p-2 text-white' key={i}>{error}</div>
                ))
            }
            <h1 className='text-2xl font-bold my-2'>Register new account</h1>
            <form
                onSubmit={onSubmit}>
                <input type="text" {...register("username", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Username" />
                    {errors.username && (
                        <p className='text-red-500'>"Username is required"</p>
                    )}
                <input type="email" {...register("email", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email" />
                    {errors.email && (
                        <p className='text-red-500'>"Email is required"</p>
                    )}                    
                <input type="password" {...register("password", { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password" />
                    {errors.password && (
                        <p className='text-red-500'>"Password is required"</p>
                    )}
                <button className='bg-zinc-700 text-white px-4 py-2 rounded-md my-2' type="submit">Register</button>
            </form>
            <p className='flex gap-x-4 justify-between'>Already have a account
                <Link to='/login' className='bg-zinc-700 text-sky-500 px-4 py-2 rounded-md my-2'>Login</Link></p> 
            </div></div>
    )
}

export default RegisterPage