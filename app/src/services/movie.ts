import axios from 'axios'
import type { MovieResponse } from '@/types/movie'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export const fetchMovies = async (): Promise<MovieResponse> => {
    try {
        const response = await api.get(`/movies`)
        return response.data as MovieResponse
    } catch (error) {
        throw error
    }
}