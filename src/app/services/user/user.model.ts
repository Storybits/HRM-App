export class User {

  constructor(
    public username: string,
    public password: string,
    public image?: string,
    public name?: string,
    public job_role?: string,
    public token?: string,
    public id?: number
    ) {}
}
