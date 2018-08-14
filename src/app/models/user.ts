export class User {
    id: string;
    name: string;

    constructor(user: Partial<User> = {}) {
        this.id = user.id || '';
        this.name = user.name || '';
    }
}

