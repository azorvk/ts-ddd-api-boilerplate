import { User } from "~/domain/User";

export default interface IUserRepository {
    create(user: User): void
}