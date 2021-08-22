import IMovie from "./movie";
export default interface IState {
    search: {
        movies: IMovie[]
    }
}