"use strict";

let numberOfFilms;
numberOfFilms = +prompt("сколько фильмов вы посмотрели?", "");

let
a = prompt("Фильм", ""),
b = prompt("Оценка", ""),
c = prompt("Фильм", ""),
d = prompt("Оценка", "");

let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
