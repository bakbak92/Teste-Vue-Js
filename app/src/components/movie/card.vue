<template>
    <div class="movie-card">
        <h1>{{ movie.title }}</h1>
        <div class="row">
            <div class="col">
                <img :src="movie.picture" alt="Movie Picture" />
            </div>
            <div class="col">
                <h2>{{ movie.genre }}</h2>
                <p>{{ movie.author.firstName }} {{ movie.author.lastName }}</p>
                <p>{{ dayjs(movie.releaseDate).format('DD/MM/YYYY') }}</p>
            </div>
        </div>
        <div>
            <h3>Description</h3>
            <p>{{ movie.description }}</p>
        </div>
        <div>
            <h3>Résumé</h3>
            <p>{{ movie.summary }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/types/movie';
import dayjs from 'dayjs';

withDefaults(defineProps<{
    movie: Movie;
}>(), {
    movie: () => ({
        id: 0,
        title: '',
        description: '',
        summary: '',
        author: {
            firstName: '',
            lastName: '',
            age: 0
        },
        releaseDate: new Date(),
        genre: '',
        picture: ''
    })
});

</script>

<style scoped lang="scss">
.movie-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
}
</style>