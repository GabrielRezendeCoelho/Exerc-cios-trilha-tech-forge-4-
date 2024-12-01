//Gerenciador de Favoritos
//Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
//MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
//BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 
var FavoriteManager = /** @class */ (function () {
    function FavoriteManager() {
        this.favorites = [];
    }
    return FavoriteManager;
}());
var MoviesFavoriteManager = /** @class */ (function (_super) {
    __extends(MoviesFavoriteManager, _super);
    function MoviesFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoviesFavoriteManager.prototype.addFavorite = function (item) {
        if (this.favorites.indexOf(item) === -1) {
            this.favorites.push(item);
        }
    };
    MoviesFavoriteManager.prototype.getFavorites = function () {
        return __spreadArray([], this.favorites, true).sort();
    };
    return MoviesFavoriteManager;
}(FavoriteManager));
var BooksFavoriteManager = /** @class */ (function (_super) {
    __extends(BooksFavoriteManager, _super);
    function BooksFavoriteManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooksFavoriteManager.prototype.addFavorite = function (item) {
        this.favorites.unshift(item);
    };
    BooksFavoriteManager.prototype.getFavorites = function () {
        return this.favorites;
    };
    return BooksFavoriteManager;
}(FavoriteManager));
var moviesManager = new MoviesFavoriteManager();
moviesManager.addFavorite("Inception");
moviesManager.addFavorite("The Matrix");
moviesManager.addFavorite("Inception"); // Duplicado, não será adicionado
console.log("Filmes favoritos:", moviesManager.getFavorites());
var booksManager = new BooksFavoriteManager();
booksManager.addFavorite("1984");
booksManager.addFavorite("Brave New World");
console.log("Livros favoritos:", booksManager.getFavorites());
