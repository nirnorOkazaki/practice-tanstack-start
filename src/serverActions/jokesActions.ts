import { createServerFn } from "@tanstack/react-start"
import jokesData from '../data/jokes.json'
import type {JokesData} from '../types'

export const getJokes = createServerFn({method: "GET"}).handler(async ()=> {
    return jokesData as JokesData
})