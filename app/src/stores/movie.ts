import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { MovieResponse } from '@/types/movie'
import { fetchMovies } from '@/services/movie'

export const useMovieStore = defineStore('movie', () => {
  const movies = ref<MovieResponse>({})
  const getMovies = async () => {
    try {
      const response: MovieResponse = await fetchMovies()
      movies.value = response
    } catch (error) {
      throw error
    }
  }

  const getMovieById = (id: number) => {
    return movies.value[id]
  }

  const listMovies = computed(() => {
    return Object.values(movies.value)
  })

  return { movies, getMovies, getMovieById, listMovies }
})
