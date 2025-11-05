interface Author {
    firstName: string
    lastName: string
    age: number
}

export interface Movie {
    id: number
    title: string
    description: string
    summary: string
    author: Author
    releaseDate: Date
    genre: string
    picture: string
}

export interface MovieResponse {
    [key: number]: Movie
}