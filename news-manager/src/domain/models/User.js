export class User {
  constructor(
    user_id,
    username,
    password,
    full_name,
    email,
    role_id,
    created_at,
    status
  ) {
    this.user_id = user_id;
    this.username = username;
    this.password = password;
    this.full_name = full_name;
    this.email = email;
    this.role_id = role_id;
    this.created_at = created_at;
    this.status = status;
  }
}
