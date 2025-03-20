import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository"
import { CheckInUseCase } from "./check-in"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

let checkInsRepository: InMemoryCheckInsRepository
 let sut: CheckInUseCase
 
 describe('Check-in Use Case', () => {
   beforeEach(() => {
     checkInsRepository = new InMemoryCheckInsRepository()
     sut = new CheckInUseCase(checkInsRepository)

     vi.useFakeTimers()
   })
 
   afterEach(() => {
     vi.useRealTimers()
   })
 
   it('should be able to check in', async () => {
     const { checkIn } = await sut.execute({
       gymId: 'gym-01',
       userId: 'user-01',
     })
 
     expect(checkIn.id).toEqual(expect.any(String))
   })
 })