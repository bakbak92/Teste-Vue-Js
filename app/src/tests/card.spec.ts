import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../components/movie/card.vue'
import type { Movie } from '@/types/movie'
import dayjs from 'dayjs'

describe('Card.vue', () => {
  const mockMovie: Movie = {
    id: 1,
    title: 'The Matrix',
    description: 'Un film de science-fiction révolutionnaire',
    summary: 'Neo découvre la vérité sur la réalité',
    author: {
      firstName: 'Lana',
      lastName: 'Wachowski',
      age: 58
    },
    releaseDate: new Date('1999-03-31'),
    genre: 'Science-Fiction',
    picture: 'https://example.com/matrix.jpg'
  }

  it('displays the movie title correctly', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    expect(wrapper.find('h1').text()).toBe('The Matrix')
  })

  it('displays the movie genre correctly', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    expect(wrapper.find('h2').text()).toBe('Science-Fiction')
  })

  it('displays the movie author correctly', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    const text = wrapper.text()
    expect(text).toContain('Lana Wachowski')
  })

  it('formats the release date correctly', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    const expectedDate = dayjs(mockMovie.releaseDate).format('DD/MM/YYYY')
    expect(wrapper.text()).toContain(expectedDate)
  })

  it('displays the image with the correct src', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://example.com/matrix.jpg')
    expect(img.attributes('alt')).toBe('Movie Picture')
  })

  it('displays the movie description', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    expect(wrapper.text()).toContain('Un film de science-fiction révolutionnaire')
  })

  it('displays the movie summary', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    expect(wrapper.text()).toContain('Neo découvre la vérité sur la réalité')
  })

  it('displays the section titles', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    const h3Elements = wrapper.findAll('h3')
    expect(h3Elements).toHaveLength(2)
    expect(h3Elements[0]?.text()).toBe('Description')
    expect(h3Elements[1]?.text()).toBe('Résumé')
  })

  it('uses default values when no prop is provided', () => {
    const wrapper = mount(Card, {
      props: {
        movie: {
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
        }
      }
    })

    expect(wrapper.find('h1').text()).toBe('')
    expect(wrapper.find('img').attributes('src')).toBe('')
  })

  it('has the CSS class movie-card', () => {
    const wrapper = mount(Card, {
      props: {
        movie: mockMovie
      }
    })

    expect(wrapper.find('.movie-card').exists()).toBe(true)
  })
})

