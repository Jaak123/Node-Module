const request = require("request");
const fs = require("fs-extra");

// Synch- олон үйлдэл зэрэг хийх боломжгүй нэгийгээ дууссаны дараа, дараагийн үйлдэлүүд дарааллаж хийгдэнэ. Хүлээдэг
// Asynch- нэгэн зэрэг хүлээгдэхгүй бүх үйлдлүүдээ хийгдэх боломжтой
