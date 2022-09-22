import { makeAutoObservable } from "mobx";

export class UserStore {
    private _name: String;
    private _role: String;

    constructor(name: String) {
        this._name = name;
        this._role = 'user';
        makeAutoObservable(this);
    }

    setName(name: String): void {
        this._name = name;
    }
    get name(): String {
        return this._name;
    }
}