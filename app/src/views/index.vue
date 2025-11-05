<template>
  <div class="home">
    <h1>Liste de films</h1>
    <ElLoading v-if="loading" />
    <MovieList :movies="listMovies" v-else />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MovieList from '@/components/movie/table.vue'
import { useMovieStore } from '../stores/movie'
import { storeToRefs } from 'pinia'
import { ElLoading } from 'element-plus'

const loading = ref(false)
const movieStore = useMovieStore()
const { listMovies } = storeToRefs(movieStore)

const getMovies = async () => {
  try {
    loading.value = true
    await movieStore.getMovies()
    loading.value = false
  } catch {
    loading.value = false
  }
  finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getMovies()
})
</script>
<style scoped lang="scss">
.home {
  padding: 20px;
}

.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #606266;
}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
