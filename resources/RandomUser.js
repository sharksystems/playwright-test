import { faker } from '@faker-js/faker'

export default class RandomUser {

    constructor() {
        this.username = faker.person.firstName();
        this.password = faker.internet.password();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
    }

    get getUsername() {
        return this.username;
    }
    get getPassword() {
        return this.password;
    }
    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }
}