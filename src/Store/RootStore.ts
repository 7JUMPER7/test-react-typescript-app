import { UserStore } from "./UserStore";

export class RootStore {
    user: UserStore;

    constructor() {
        this.user = new UserStore('Arsenii');
    }
}