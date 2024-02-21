const host = "https://wedev-api.sky.pro/api/v2/moiseenko-sofya/comments";
const userURL = "https://wedev-api.sky.pro/api/user/login";
export let token; 
export let nameUser;
export const setName = (newName) => {
  nameUser = newName;
}

export const setToken = (newToken) => {
token = newToken;
};

export function getTodos() {
  return  fetch(host, {
    method: "GET",
    headers : {
      Authorization: `Bearer ${token}`,
    }
  })
    .then((response) => {
      if(response.ststus === 401) {



        throw new Error("Нет авторизации")
      }

      return response.json();

    })
}

export function postTodo( {name}, {text} ) {
  return fetch(host, {
    method: "POST",
    headers : {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;"),
      text: text
        .replaceAll("___<", "&lt;")
        .replaceAll(">", "&gt;"),
      forceError: true

    }),
  })
  .then((response) => {
    if(response.status===500){
        throw new Error("Извините, неполатки с сервером")
       }
       if(response.status===400){
        throw new Error("Недопустимое количество символов-меньше трех")
       } 
       // сonsole.log(response.status);
        return response.json();
      })
    }
      export function login({login, password}) {
        return fetch(userURL, {
             method: "POST",

             body: JSON.stringify({
              login,
              password,

             }),
           })
           .then((response, event) => {
            if(response.status === 400) {
              alert ("Вы ввели не верный логин или пароль");
              event.stopPropagation();
            }else{
              return response.json();

            }




           })
          }