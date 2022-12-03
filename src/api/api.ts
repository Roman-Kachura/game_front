import axios, {AxiosResponse} from 'axios';

//'https://game-server.romankachura.amvera.io'
const $api = axios.create({
    baseURL: 'https://git.heroku.com/project-game-server.git/'
});

export const api = {
    enterToGame(name: string) {
        return $api.post<AxiosResponse, AxiosResponse<UserType>>('users', {name});
    },
    leaveGame(id: number) {
        return $api.delete<AxiosResponse>(`users/${id}`);
    }
}

export type UserType = {
    gameid: string | null
    id: number
    name: string
    sign:number
}