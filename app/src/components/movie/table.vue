<template>
    <div class="movie-list">
        <ElTable :data="movies" style="width: 100%">
            <ElTableColumn prop="title" label="Titre" />
            <ElTableColumn prop="releaseDate" label="Date de sortie">
                <template #default="{ row }">
                    {{ dayjs(row.releaseDate).format('DD/MM/YYYY') }}
                </template>
            </ElTableColumn>
            <ElTableColumn prop="genre" label="Genre" />
            <ElTableColumn prop="author" label="Auteur">
                <template #default="{ row }">
                    {{ row.author.firstName }} {{ row.author.lastName }}
                </template>
            </ElTableColumn>
            <ElTableColumn label="Actions">
                <template #default="{ row }">
                   <router-link :to="`/movie/${row.id}`">
                        <ElButton type="primary">Voir</ElButton>
                    </router-link>
                </template>
            </ElTableColumn>
        </ElTable>
    </div>
</template>
<script setup lang="ts">
import type { Movie } from '@/types/movie'
import { ElTable, ElTableColumn, ElButton } from 'element-plus'
import dayjs from 'dayjs'

withDefaults(defineProps<{
    movies: Movie[]
}>(), {
    movies: () => []
})
</script>
<style scoped lang="scss">
.movie-list {
    width: 100%;
}
</style>