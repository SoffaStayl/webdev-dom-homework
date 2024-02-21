import { postTodo, token, nameUser } from "./api.js";
import { renderLogin } from "./loginPage.js";
import { fetchComments } from "./main.js";
const listElement = document.getElementById('list-comments')

export const renderComments = ({commentsArray,likes,commentClick}) => {
  const appElement = document.getElementById("app")

  const appHTML = commentsArray.map((item, index) =>  {

   return `<li class="comment" data-username="${item.name}" data-text="${item.comment}">
<div class="comment-header">
  <div>${item.name}</div>
  <div>${item.date}</div>
</div>
<div class="comment-body">
  <div class="comment-text">
    ${item.comment}
  </div>
</div>
<div class="comment-footer">
  <div class="likes">
    <span class="likes-counter">${item.like}</span>
    <button data-index='${index}' class="like-button ${item.paint}"</button>
  </div>
</div>
</li>`
  })
 .join('');

  appElement.innerHTML = `
  <ul class="comments" id="list-comments">
  ${appHTML}
  </ul>
  ${!token ? `<div class="authorization">
  Чтобы добавить комментарий,  <span id="link-to-link">авторизуйтесь</span> 
  </div>` : ""}
  ${token ? 
  ` <div class="add-form" id="addForm">
  <input id="name-input" type="text" class="add-form-name" value=${nameUser} readonly
  placeholder="Введите ваше имя" />
  <textarea id="textarea-input" type="textarea" class="add-form-text" placeholder="Введите ваш коментарий"
    rows="4"></textarea>
  <div class="add-form-row">
    <button class="add-form-button" id="add-button">Написать</button>
    <button class="add-form-button" id="delete-button">Удалить коментарий</button>
  </div>` : ""
  }
  ` ;


  if (!token) {
    const authorizationButton = document.getElementById("link-to-link");
    authorizationButton.addEventListener("click",  renderLogin )
  }


    likes();
    commentClick();

    const getToken = () => token
    getToken ();

    if(token){
      const buttonElement = document.getElementById("add-button");

      buttonElement.addEventListener("click", () => {

        const buttonElementDel = document.getElementById("delete-button");

        const nameInputElement = document.getElementById('name-input');
        const textareaInputElement = document.getElementById('textarea-input');
        const loaderElement = document.querySelector('.loader');
        const loadingElement = document.querySelector('.loading');
        const formElement = document.querySelector('.add-form');
        const ulElement = document.getElementById("list-comments");
        buttonElement.disabled = true;
        loadingElement.classList.add("loadingInvisible")
        formElement.classList.add("add-formInvisible")
        loaderElement.classList.add("hidden");

        const postCommentsPromise = () => {

            postTodo({name:nameInputElement.value}, {text: textareaInputElement.value}).then((responseData) => {
                nameInputElement.value = '';
                textareaInputElement.value = '';
               return fetchComments()


              })



              .catch((error) => {
                if  (error.message === 'Failed to fetch') {
                   alert("Проблемы с интернетом, проверьте подключение")

                }

                 alert(error.message);

              })
              .finally(() => {
                console.log("click");

                formElement.classList.remove("add-formInvisible");
                buttonElement.disabled = false;
              })


        };


        postCommentsPromise();



      });

    }



  };