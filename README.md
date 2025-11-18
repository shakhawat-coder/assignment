## 1. What are some differences between interfaces and types in TypeScript?

১.Interface keyword হিসেবে ব্যবহার করে interface , Type keyword হিসেবে ব্যবহার করে type. <br>
২. Interface অন্য interface কে extend keyword এর মাধ্যমে extend করতে পারে, Type extent keyword ব্যবহার করতে পারেনা।<br>
৩.একই নামে দুই বার interface লিখলে তারা merge হয়ে যায় কিন্তু একই নামে দুইবার type লিখলে error দেয়।<br>
৪.interface, Union type ব্যবহার করেনা,type Union type ব্যবহার করে।<br>

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

Keyof হল একটি type operator যেটা object এর key গুলোকে আলাদা করে আমাদের ব্যবহার করতে দেয়। এর ফলে আমরা এই object এর property নামগুলো ব্যবহার করতে পারি। এর ফলে ভুল নাম ব্যবহার করলে আমরা তৎক্ষণা eroor দেখতে পারব । ফলে আমাদের error টা সহজেই সমাধান করা যাবে।

উদাহরণ:
```
type Person = {
  name: string;
  age: number;
  city: string
};
function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

const person1: Person = { name: "Shakhawat", age: 26, city: "Dhaka" };

console.log(getProperty(person1, "age")); // 25
// console.log(getProperty(person1, "country")); // error এখানে keyof ব্যবহার করে আমরা শুধু name, age ও city key গুলোই access করতে পারছি। যদি অন্য কোনো key দেওয়া হয়, TypeScript error দিবে।
```

## 3. Explain the difference between any, unknown, and never types in TypeScript.

Any:যখন কোন variable এর ডেটা টাইপ সম্পর্কে আমরা নিশ্চিত নই তখন আমরা any ব্যবহার করি।এতে কোন type safety নেই।

Unknown:যখন একটি variable এর
যে কোন টাইপের ভ্যালু আসতে পারে কিন্তু সেটিকে ব্যবহারের পূর্বে আমরা চেক করে নেই সেক্ষেত্রে আমরা unknown ব্যবহার করি।যেহেতু ব্যবহারের পূর্বে আমরা চেক করে নেই সেহেতু এখানে type safety আছে।

Never:Infinity liop অথবা কোন এপ্লিকেশনে error দেখিয়ে বন্ধ করার জন্য নেভার ইউজ করি.এর টাইপ সেফটি সব থেকে বেশি

## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enum সাধারণত কোন নির্দিষ্ট কিছু property কে একত্রে রেখে তাতে নির্দিষ্ট কিছু value ধরে রাখতে সাহায্য করে। Enum কে আমরা টাইপ হিসেবে ব্যবহার করতে পারি আবার dot notation ইউজ করে যেকোনো জায়গায় ব্যবহার করতে পারি যার ফলে আমাদের ভুল হবার সম্ভাবনা থাকে না. Enum ব্যবহার করার ফলে আমাদের সব সময় number,string type ডিফাইন না করে অর্থবহ নাম ব্যবহার করার সুযোগ থাকে এর ফলে আমরা সহজেই এটাকে maintain করতে পারি।

Enum সাধারণত দুই প্রকার, String Enum এবং Numeric Enum

String Enum এর উদাহরণ: 
```
enum Order_status {
  OrderPlaced = "Order Placed",
  Processing = "Processing",
  Shipped = "Shipped",
  Delivered = "Delivered"
}
```
Numeric Enum এর উদাহরণ:
```
enum StatusCodes {<br>
  NotFound = 404,<br>
  Success = 200,<br>
  Accepted = 202,<br>
  BadRequest = 400,<br>
  ServerError = 500<br>
}
```
## 5. Provide an example of using union and intersection types in TypeScript.
```
type userInfo = {
  name: string;
}
type userRole = {
  role: "admin" | "user";
}
type password = {
  password: string
}
type User = userInfo & { role: "user" };
type Admin = userInfo & { role: "admin" } & password;

type UserWithRole = User | Admin;

function identifyUser(user: UserWithRole) {
  if (user.role === "user") {
    console.log(`${user.name} is a user`);
  } else if (user.role === "admin") {
    console.log(` ${user.name} is an admin`);
  }
}
identifyUser({ name: "John", role: "user" });
identifyUser({ name: "Sarah", role: "admin", password: "password" });
