const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // تأكد أن db.json موجود
const middlewares = jsonServer.defaults();

// استخدم الـ middleware الافتراضية (مثل الـ logging و الـ CORS)
server.use(middlewares);

// إضافة الـ router
server.use(router);

// تحديد الـ port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
