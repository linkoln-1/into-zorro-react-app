let jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});
const users = router.db.get('users');

server.use(jsonServer.bodyParser);
server.use(middlewares);

const getRandomToken = (length) => {
  if (length === undefined || length <= 0) {
    length = 1;
  }
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  let first = 0;
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      first = 10;
    } else {
      first = 0;
    }
    result +=
      characters[Math.round(Math.random() * (characters.length - first - 1))];
  }
  return result;
};

//Авторизация
server.post('/auth', (req, res) => {
  const { login, password } = req.body;
  const authUser = users
    .toJSON()
    .find((user) => user.login === login && user.password === password);
  if (authUser) {
    const { id, login, token, email, firstName, roles, address, lastName } =
      authUser;
    res.json({
      id,
      login,
      token,
      email,
      firstName,
      address,
      lastName,
      roles,
      password: null,
    });
  } else {
    res.status(401).json({ message: 'Ошибка авторизации' });
  }
});

//Регистрация
server.post('/users', (req, res, next) => {
  const defaultDate = {
    address: null,
    roles: 'Пользователь',
    avatar: null,
    token: getRandomToken(50),
  };
  const loginCheck = users.some((user) => user.login === req.body.login);
  if (
    req.body.login === undefined ||
    req.body.password === undefined ||
    req.body.firstName === undefined ||
    req.body.lastName === undefined ||
    req.body.email === undefined
  ) {
    res.status(400);
    res.send();
  } else if (loginCheck.toJSON()) {
    res.status(400).json({ error: 'Такой логин уже существует' });
    res.send();
  }
  req.body = { ...req.body, ...defaultDate };
  next();
});

server.use(router);
server.listen(process.env.PORT || 8000, () => {
  console.log(`JSON Server is running on 8000`);
});

//для запуска сервера, в первом терминале нужно набрать:
//npx json-server --watch db.json --port 8000

// Для автоматического обновления сервера:
//   1) Установка nodemon (для сервера) - npm i -D nodemon;
// 2) В package.json  в разделе scripts дописываем «dev»: «nodemon server.js»
// 3) Запуск сервера npx nodemon server.js
//
//
// Сначала в первом терминале пишем команду:
//   npx json-server --watch db.json --port 8000
//
// Не закрывая этот, открываем еще один терминал и запускаем приложение.js
//
// Fetch-запросы делаем по адресу: http://localhost:8000/
