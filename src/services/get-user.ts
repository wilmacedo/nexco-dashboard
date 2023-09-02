export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const defaultUser: User = {
  firstName: "Wilson",
  lastName: "Macedo",
  email: "wil.macedo.sa@gmail.com",
};

export function getUser(timeout = 350): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultUser);
    }, timeout);
  });
}
