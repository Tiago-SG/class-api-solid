import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository"
import { CreateGymUseCase } from "./create-gym"
import { beforeEach, describe, expect, it } from "vitest"

let gymsRepository: InMemoryGymsRepository
 let sut: CreateGymUseCase
 
 describe('Create Gym Use Case', () => {
   beforeEach(() => {
     gymsRepository = new InMemoryGymsRepository()
     sut = new CreateGymUseCase(gymsRepository)
   })
 
   it('should to create gym', async () => {
     const { gym } = await sut.execute({
       title: 'JavaScript Gym',
       description: null,
       phone: null,
       latitude: -27.2092052,
       longitude: -49.6401091,
     })
 
     expect(gym.id).toEqual(expect.any(String))
   })
 })