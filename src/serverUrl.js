const { NODE_ENV } = process.env;

export let serverUrl;

if (NODE_ENV === 'development') {
  serverUrl = 'http://localhost:8000'; // адрес сервера на локалке
} else {
  serverUrl = 'https://into-zorro-restaurant.onrender.com/'; // адрес сервера после выгрузки
}
