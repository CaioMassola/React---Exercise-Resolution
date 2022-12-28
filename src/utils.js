export function login({ email, password }) {

  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let emailProviderExists = email[email.indexOf('@') + 1] == '.' ? false : true
      let errorMessage = 'E-mail or password wrong.'
      if (password === 'password123' && email[0] != '@' && email.includes("@") && email.includes(".com") && emailProviderExists) {
        resolve({ message: 'You have been authenticated!' });
      } else {
        reject({ message: errorMessage });
      }
    }, delay);
  });
}
