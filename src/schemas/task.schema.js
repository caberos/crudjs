import {z} from "zod"

export const createTasksSchema =  z.object({

    title: z.string({
        required_error: "Title is required",
    }),
    description: z.string({
        required_error: "Description must be a string",
    }),
    date: z.string().datetime().optional(),
});


export const updateTasksSchema =  z.object({

    title: z.string({
        required_error: "Title is required",
    }),
    description: z.string({
        required_error: "Description must be a string",
    }),
    date: z.string().datetime().optional(),
});