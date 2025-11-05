
<template>
  <div class="movie">
    <ElLoading v-if="loading" />
    <MovieCard :movie="movie" v-if="!loading && movie" />
    <div v-else>
      <h1>Aucun film trouvé</h1>
      <router-link to="/">Retour à la liste des films</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import MovieCard from '@/components/movie/card.vue'
import { useMovieStore } from '../stores/movie'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Movie } from '@/types/movie'
import { ElLoading } from 'element-plus'

const movie = ref<Movie | null>(null)
const route = useRoute()
const id = parseInt(route.params.id as string)
const movieStore = useMovieStore()
const { getMovieById, getMovies } = movieStore
const loading = ref(true)
onMounted(async () => {
  const item = getMovieById(id)
  if (item) {
    movie.value = item
    loading.value = false
  } else {
    await getMovie()
  }
})

const getMovie = async () => {
  try {
    loading.value = true
    await getMovies()
    const item = getMovieById(id)
    if (item) {
      movie.value = item
      loading.value = false
    } else {
      throw new Error('Movie not found')
    }
  } catch {
    throw new Error('Movie not found')
  }
}
</script>
