# 1. React-Query with NextJS

![image](https://user-images.githubusercontent.com/74180525/180655628-00677c80-96bb-4260-9e74-7eead1509c9d.png)

<div>Import from ‘react-query’ báo lỗi như trên
=> Tìm hiểu thì là vấn đề chung của các người dùng Typescript, cách xử lý thêm dòng:	"noImplicitAny": false trong  file tsconfig.json như bên dưới
 </div>
 <br>

![image](https://user-images.githubusercontent.com/74180525/180655737-c4a6c0c4-c3a4-44d4-8924-9915088a5340.png)

<div>Sau khi sử dụng <b> Hydrate, QueryClient, QueryClientProvider </b></div>
 <br>
![image](https://user-images.githubusercontent.com/74180525/181301157-fe5da02a-19ea-4b49-b9e0-1ca4921e4caf.png)

<div>Hệ thống báo lỗi:</div>
![image](https://user-images.githubusercontent.com/74180525/181301282-476f9ac1-1450-40e6-98a4-9d735b73a0bf.png)


<div>=> Tìm hiểu hướng giải quyết và sửa lỗi bằng cách thay đổi thư viện từ <b>react-query</b> sang <b>@tanstack/react-query</b> </div>

# 2. Hosted UI Authentication với AWS

<div> 
- Chưa Verify được tài khoản trên hệ thống AWS
 </div>
 <div> 
- Mượn tài khoản của người khác thì Amplify Push bị fail 
 </div>

![image](https://user-images.githubusercontent.com/74180525/180655847-461aea0f-f2ba-4a80-95b8-46bec34353e1.png)

<div>* Đã đăng ký được tài khoản AWS Education nhưng mỗi lần amplify configure em chưa biết cách để redirect đến bên kia, nó tự redirect đến trang  aws.amazon.com </div>

# 3. React Dropzone: ok
