// Заданы ссылки на данные таблиц:
//https://jsonplaceholder.typicode.com/

// Решите список задач, используя конструкцию async/await.
// В решении задач вам потребуется отправлять несколько запросов для верной фильтрации данных

// 1. Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя (api /users) и выводит список его задач (api /todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя

async function getTodos(username) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com=${username}`);

    const data = await response.json();
    if (data.length > 0) {
      let user = data[0].id
      const toDosResp = await fetch(`https://jsonplaceholder.typicode.com=${user}`)
    }

    const dataFromToDos = await toDosResp.json()
    console.log(dataFromToDos)

  } catch (error) {
    console.error("Error:", error);
  }
}

getTodos('Samantha')




// 2. Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок поста (api /posts) и выводит список всех его комментариев (api /comments).
// В качестве ответа в консоль выведите массив с комментариями. Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.


async function getComments(title) {
try {
const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = posts.json()

const post = posts.find(post => post.title === title)


const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?post=${post.id}`)
const dataComments = await comments.json()

if(dataComments.length === 0) {
  console.log('There are any comments here')
} else {
console.log((dataComments))
} 
} catch (error) {
  console.error('Error:', error)


}

}

getComments("qui est esse")


// 3. Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм пользователя (api /users) и выводит все его фотографии (api /photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

async function getPhotoByNickName(username) {
  try {
const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
const dataUsers = usersResponse.json()

const post = users.find(user => user.photo === photo)

const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?post=${photo.id}`)
const dataPhotos = photosResponse.json()

} catch (error) {
  console.error('Error:', error)
}

}


getPhotoByNickName('Kamren')