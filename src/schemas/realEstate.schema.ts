import { z } from "zod";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().positive(),   
    size: z.number().positive(),
    createdAt: z.string(),
    updatedAt: z.string(),
    addressId: z.object({
        street: z.string().max(120),
        zipCode:z.string().max(8),
        number: z.number(),
        city: z.string().max(20),
        state: z.string().max(2)

    }),
    categoryId: z.number().positive().int()
})

export const createRealEstateSchema =  realEstateSchema.omit({id:true, createdAt:true, updatedAt:true})