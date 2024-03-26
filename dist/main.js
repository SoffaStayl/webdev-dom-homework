/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTodos: () => (/* binding */ getTodos),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   nameUser: () => (/* binding */ nameUser),\n/* harmony export */   postTodo: () => (/* binding */ postTodo),\n/* harmony export */   setName: () => (/* binding */ setName),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   token: () => (/* binding */ token)\n/* harmony export */ });\nconst host = \"https://wedev-api.sky.pro/api/v2/moiseenko-sofya/comments\";\nconst userURL = \"https://wedev-api.sky.pro/api/user/login\";\nlet token; \nlet nameUser;\nconst setName = (newName) => {\n  nameUser = newName;\n}\n\nconst setToken = (newToken) => {\ntoken = newToken;\n};\n\nfunction getTodos() {\n  return  fetch(host, {\n    method: \"GET\",\n    headers : {\n      Authorization: `Bearer ${token}`,\n    }\n  })\n    .then((response) => {\n      if(response.ststus === 401) {\n\n\n\n        throw new Error(\"Нет авторизации\")\n      }\n\n      return response.json();\n\n    })\n}\n\nfunction postTodo( {name}, {text} ) {\n  return fetch(host, {\n    method: \"POST\",\n    headers : {\n      Authorization: `Bearer ${token}`,\n    },\n    body: JSON.stringify({\n      name: name\n        .replaceAll(\"<\", \"&lt;\")\n        .replaceAll(\">\", \"&gt;\"),\n      text: text\n        .replaceAll(\"___<\", \"&lt;\")\n        .replaceAll(\">\", \"&gt;\"),\n      forceError: true\n\n    }),\n  })\n  .then((response) => {\n    if(response.status===500){\n        throw new Error(\"Извините, неполатки с сервером\")\n       }\n       if(response.status===400){\n        throw new Error(\"Недопустимое количество символов-меньше трех\")\n       } \n       // сonsole.log(response.status);\n        return response.json();\n      })\n    }\n      function login({login, password}) {\n        return fetch(userURL, {\n             method: \"POST\",\n\n             body: JSON.stringify({\n              login,\n              password,\n\n             }),\n           })\n           .then((response, event) => {\n            if(response.status === 400) {\n              alert (\"Вы ввели не верный логин или пароль\");\n              event.stopPropagation();\n            }else{\n              return response.json();\n\n            }\n\n\n\n\n           })\n          }\n\n//# sourceURL=webpack://soffa25/./api.js?");

/***/ }),

/***/ "./loginPage.js":
/*!**********************!*\
  !*** ./loginPage.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\n\n\n\n\n const renderLogin =() =>{\n    const appElement = document.getElementById(\"app\");\n    const loginHTML = `  <div class=\"container\">\n    <div class=\"add-form-login\">\n        <input id=\"login-input\" type=\"text\" class=\"add-form-name-login\" placeholder=\"Введите логин\" />\n        <input id=\"password-input\" type=\"password\" class=\"add-form-name-login\" placeholder=\"Введите пароль\" />\n        <div class=\"add-form-row\">\n            <button id=\"login-button\" class=\"add-form-button-login\">Войти</button>\n            <button id=\"login-button\" class=\"add-form-button-login\">Авторизоваться</button>\n        </div>\n    </div>\n</div> `;\n\nappElement.innerHTML = loginHTML;\n\nconst buttonElement = document.getElementById(\"login-button\")\nconst loginInputElement = document.getElementById(\"login-input\")\nconst passwordInputElement = document.getElementById(\"password-input\")\n\nbuttonElement.addEventListener(\"click\", () => {\n;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.login)({\n    login: loginInputElement.value,\n    password: passwordInputElement.value,\n}).then((responseData) => {\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\n(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responseData.user.token);\n\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.nameUser);\n(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setName)(responseData.user.name);\nconsole.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.nameUser);\n    }).then(() => {\n       (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.fetchComments)(); \n    })\n\n});\n\n};\n\n//# sourceURL=webpack://soffa25/./loginPage.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPage.js */ \"./loginPage.js\");\n/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderComments.js */ \"./renderComments.js\");\n\n\n\n\n\n\n\n  console.log(\"It works!\");\n  // Код писать здесь\n  const ulElement = document.getElementById(\"list-comments\");\n  const setActiveButtonInput = () => {\n    nameInputElement.addEventListener(('input'),\n      () => { //привожу кнопку в порядок после инпута:\n        buttonElement.classList.remove('disabled-hover');//Делаю кнопку активной после ввода данных в инпут\n        buttonElement.removeAttribute('disabled', '');//Делаю кнопку активной после ввода данных в инпут\n        nameInputElement.classList.remove('err');\n      });\n  }\n  const setActiveButtonMessage = () => {\n    textareaInputElement.addEventListener(('input'), () => {\n      //привожу кнопку в порядок после текстареа:\n      buttonElement.classList.remove('disabled-hover');\n      //Делаю кнопку активной после ввода данных в текстареа\n      buttonElement.removeAttribute('disabled', '');\n      //Делаю кнопку активной после ввода данных в текстареа\n      textareaInputElement.classList.remove('err');\n    });\n  }\n  const disabledButton = () => {\n    // Делаю кнопку неактивной\n    buttonElement.setAttribute('disabled', '');\n    buttonElement.classList.add('disabled-hover');\n  }\n  const submitEnter = (event) => { // отправка сообщения по Enter\n    if (event.keyCode === 13) {\n      document.getElementById(\"add-button\").click();\n      nameInputElement.value = \"\";\n      textareaInputElement.value = \"\";\n    }\n  }\n  const buttonElement = document.getElementById(\"add-button\");\n  const buttonElementDel = document.getElementById(\"delete-button\");\n\n  const nameInputElement = document.getElementById('name-input');\n  const textareaInputElement = document.getElementById('textarea-input');\n  const loaderElement = document.querySelector('.loader');\n  let commentsArray = [];\n\n\n\n  //цепочка промисов method: \"GET\"\n\n const fetchComments = () => {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)().then((responseData) => {\n        const getApiComments = responseData.comments.map((comment) => {\n          return {\n            name: comment.author.name,\n            date: getDateNow(),\n            like: comment.likes,\n            userLike: false,\n            comment: comment.text,\n          };\n        });\n        commentsArray = getApiComments;\n        (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({commentsArray,likes,commentClick});\n        loaderElement.classList.add(\"hidden\");\n      });\n  };\n  \n\n  fetchComments();\n  const getDateNow = () => {\n    const dateNow = new Date();\n    let day = dateNow.getDate();\n    let month = dateNow.getMonth() + 1;\n    let year = dateNow.getFullYear() % 1000;\n    let hour = dateNow.getHours();\n    let minute = dateNow.getMinutes();\n    if (day < 10) {\n      day = \"0\" + day;\n    }\n    if (month < 10) {\n      month = \"0\" + month;\n    }\n    if (hour < 10) {\n      hour = \"0\" + hour;\n    }\n    if (minute < 10) {\n      minute = \"0\" + minute;\n    }\n    return `${day}.${month}.${year} ${hour}:${minute}`\n  }\n\n  document.addEventListener(\"keyup\", submitEnter);\n  const likes = () => {\n    const likeButtons = document.querySelectorAll('.like-button');\n    for (const likeButton of likeButtons) {\n      likeButton.addEventListener('click', (event) => {\n        event.stopPropagation();\n        const index = likeButton.dataset.index;\n        if (commentsArray[index].userLike === false) {\n          commentsArray[index].paint = '-active-like';\n          commentsArray[index].like += 1;\n          commentsArray[index].userLike = true;\n        } else {\n          commentsArray[index].paint = '';\n          commentsArray[index].like -= 1;\n          commentsArray[index].userLike = false;\n        }\n        (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({commentsArray,likes,commentClick});\n    });\n  };\n};\nconst commentClick = () => {\n  const userComments = document.querySelectorAll(\".comment\");\n  for (const userComment of userComments) {\n    userComment.addEventListener(\"click\", () => {\n      textareaInputElement.value = `>${userComment.dataset.text}\\n ${userComment.dataset.username},\\n`;\n    });\n  }\n}\n;(0,_renderComments_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)({commentsArray,likes,commentClick});\n\n  const getToken = () => _api_js__WEBPACK_IMPORTED_MODULE_0__.token\n  getToken ();\n  if(_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\n\n    setActiveButtonInput();//Делаем кнопку активной после ввода поля\n    setActiveButtonMessage();//Делаем кнопку активной после ввода поля\n\n}\n\nif (_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\n  buttonElementDel.addEventListener(('click'), () => { //Удаляю последний элемент (комментарий);\n     document.getElementById('list-comments').lastElementChild.remove();\n    });\n   } \n\n if (_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\n\n  buttonElement.disabled = true;\n nameInputElement.addEventListener('input', () => {\n  if ((nameInputElement.value === '') || (textareaInputElement.value === '')) {\n    buttonElement.disabled = true;\n    return;\n  }\n  else {\n    buttonElement.disabled = false;\n    return;\n  }\n});\ntextareaInputElement.addEventListener('input', () => {\n  if ((textareaInputElement.value === '') || (nameInputElement.value === '')) {\n    buttonElement.disabled = true;\n    return;\n  }\n  else {\n    buttonElement.disabled = false;\n    return;\n  }\n})\nbuttonElement.addEventListener('click', () => {\n  nameInputElement.classList.remove('error');\n  textareaInputElement.classList.remove('error');\n  if ((nameInputElement.value || textareaInputElement.value) === '') {\n    nameInputElement.classList.add('error');\n    textareaInputElement.classList.add('error');\n    return;\n  }\n  getDateNow();\n}); \n\n}   \n\n\n\n//# sourceURL=webpack://soffa25/./main.js?");

/***/ }),

/***/ "./renderComments.js":
/*!***************************!*\
  !*** ./renderComments.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _loginPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginPage.js */ \"./loginPage.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\n\n\nconst listElement = document.getElementById('list-comments')\n\nconst renderComments = ({commentsArray,likes,commentClick}) => {\n  const appElement = document.getElementById(\"app\")\n\n  const appHTML = commentsArray.map((item, index) =>  {\n\n   return `<li class=\"comment\" data-username=\"${item.name}\" data-text=\"${item.comment}\">\n<div class=\"comment-header\">\n  <div>${item.name}</div>\n  <div>${item.date}</div>\n</div>\n<div class=\"comment-body\">\n  <div class=\"comment-text\">\n    ${item.comment}\n  </div>\n</div>\n<div class=\"comment-footer\">\n  <div class=\"likes\">\n    <span class=\"likes-counter\">${item.like}</span>\n    <button data-index='${index}' class=\"like-button ${item.paint}\"</button>\n  </div>\n</div>\n</li>`\n  })\n .join('');\n\n  appElement.innerHTML = `\n  <ul class=\"comments\" id=\"list-comments\">\n  ${appHTML}\n  </ul>\n  ${!_api_js__WEBPACK_IMPORTED_MODULE_0__.token ? `<div class=\"authorization\">\n  Чтобы добавить комментарий,  <span id=\"link-to-link\">авторизуйтесь</span> \n  </div>` : \"\"}\n  ${_api_js__WEBPACK_IMPORTED_MODULE_0__.token ? \n  ` <div class=\"add-form\" id=\"addForm\">\n  <input id=\"name-input\" type=\"text\" class=\"add-form-name\" value=${_api_js__WEBPACK_IMPORTED_MODULE_0__.nameUser} readonly\n  placeholder=\"Введите ваше имя\" />\n  <textarea id=\"textarea-input\" type=\"textarea\" class=\"add-form-text\" placeholder=\"Введите ваш коментарий\"\n    rows=\"4\"></textarea>\n  <div class=\"add-form-row\">\n    <button class=\"add-form-button\" id=\"add-button\">Написать</button>\n    <button class=\"add-form-button\" id=\"delete-button\">Удалить коментарий</button>\n  </div>` : \"\"\n  }\n  ` ;\n\n\n\n  if (!_api_js__WEBPACK_IMPORTED_MODULE_0__.token) {\n    const authorizationButton = document.getElementById(\"link-to-link\");\n    authorizationButton.addEventListener(\"click\",  _loginPage_js__WEBPACK_IMPORTED_MODULE_1__.renderLogin )\n  }\n\n\n    likes();\n    commentClick();\n\n    const getToken = () => _api_js__WEBPACK_IMPORTED_MODULE_0__.token\n    getToken ();\n\n    if(_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\n      const buttonElement = document.getElementById(\"add-button\");\n\n      buttonElement.addEventListener(\"click\", () => {\n\n        const buttonElementDel = document.getElementById(\"delete-button\");\n\n        const nameInputElement = document.getElementById('name-input');\n        const textareaInputElement = document.getElementById('textarea-input');\n        const loaderElement = document.querySelector('.loader');\n        const loadingElement = document.querySelector('.loading');\n        const formElement = document.querySelector('.add-form');\n        const ulElement = document.getElementById(\"list-comments\");\n        buttonElement.disabled = true;\n        loadingElement.classList.add(\"loadingInvisible\")\n        formElement.classList.add(\"add-formInvisible\")\n        loaderElement.classList.add(\"hidden\");\n\n        const postCommentsPromise = () => {\n\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postTodo)({name:nameInputElement.value}, {text: textareaInputElement.value}).then((responseData) => {\n                nameInputElement.value = '';\n                textareaInputElement.value = '';\n               return (0,_main_js__WEBPACK_IMPORTED_MODULE_2__.fetchComments)()\n\n\n              })\n\n\n\n              .catch((error) => {\n                if  (error.message === 'Failed to fetch') {\n                   alert(\"Проблемы с интернетом, проверьте подключение\")\n\n                }\n\n                 alert(error.message);\n\n              })\n              .finally(() => {\n                console.log(\"click\");\n\n                formElement.classList.remove(\"add-formInvisible\");\n                buttonElement.disabled = false;\n              })\n\n\n        };\n\n\n        postCommentsPromise();\n\n\n\n      });\n\n    }\n\n\n\n  };\n\n//# sourceURL=webpack://soffa25/./renderComments.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;