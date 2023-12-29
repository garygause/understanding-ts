class User {
  private readonly id: string;
  name: string;

  constructor(id: string, name: string) {
    this.name = name;
  }

  describe() {
    return 'User: ' + this.name;
  }
}

const user1 = new User('123', 'Gary');
console.log(user1.describe());

class AdminUser extends User {
  private permissions: string[];

  constructor(id: string, name: string, permissions: string[]) {
    super(id, name);
    this.permissions = permissions;
  }

  get userPermissions() {
    return this.permissions;
  }

  set userPermissions(permissions: string[]) {
    this.permissions = permissions;
  }
}

const admin = new AdminUser('123', 'Gary', ['read', 'write']);
console.log(admin.userPermissions);
admin.userPermissions = ['read'];

abstract class UserInterface {
  abstract id: string;
  abstract describe(): string;
}
