export const getApi = () => {
    return fetch("https://wedev-api.sky.pro/api/v1/:sofya-moiseenk/comments", {
    method: "GET",
    })
    .then((response) => {
      return response.json();
    })
};

export const postApi = (textInputElement, nameInputElement) => {
  return  fetch("https://wedev-api.sky.pro/api/v1/:sofya-moiseenk/comments", {
  method: "POST",
  body: JSON.stringify({
    text: textInputElement.value
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;'),
    name: nameInputElement.value
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;'),
    forceError: true,
  }),
})
}