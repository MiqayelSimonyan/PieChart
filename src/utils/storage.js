export class Storage {
    static setToken(name, token) {
        typeof window != 'undefined' && localStorage.setItem(name, token);
    }

    static deleteToken(name) {
        typeof window != 'undefined' && localStorage.removeItem(name);
    }

    static getToken(name) {
        return typeof window != 'undefined' && localStorage.getItem(name);
    }
};