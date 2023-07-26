import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  let orders = await prisma.orders.findMany({
    where: {
      userId: event.context.params.id,
      orderBy: { id: 'desc' },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    }
  })

  return orders
})
