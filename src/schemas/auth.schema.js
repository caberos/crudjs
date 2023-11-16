import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email : z.string({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})

//add in this part all variables that consider need to login example username, email, password.
export const loginSchema = z.object({
    email : z.string({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})