//NodeJS file core module
//fs модулыг ашиглая гэсэн үг
var file = require("fs");
//file tai ajillah module duudlaa

// шинээр энэ модулыг ашиглаад message.txt гэдэг файлны доторх контентийг уншья
file.readFile("message.txt", (error, data) => {
  if (error) {
    // хэрвээ ямар нэг алдаа гарвал
    console.log("Error is happening");
    throw error;
  } else {
    // хэрвээ ямар нэг алдаа гарахгүй бол датаг хэвлэ
    console.log("Content: " + data);
  }
});
