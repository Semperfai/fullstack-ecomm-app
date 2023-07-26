import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const order = await prisma.orders.create({
    data: {
      userId: body.userId,
      name: body.name,
      adress: body.address,
      zipcode: body.zipcode,
      city: body.city,
      country: body.country
    }
  })

  return order
})
