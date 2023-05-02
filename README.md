# E-Learning-SPRING-BOOT-Application

This is an e-learning application in which teachers can upload courses with activities and students can create accounts and check the courses uploaded by every teacher.
The courses could be with pdf format or videos. 

## Technologies used:
* BackEnd: SpringBoot version 3.0.5
* FrontEnd: ReactJS 13.4.0
* DataBase: Mysql database

### To configure the database of the project: 
* Create the application.properties file and this code:

spring.datasource.url=jdbc:mysql://localhost:3306/java

spring.datasource.username=root

spring.datasource.password=***** (write your own password)

spring.jpa.hibernate.ddl-auto=update

spring.sql.init.mode=always

spring.jpa.defer-datasource-initialization=true

cpc.app.jwtSecret=IUzI1NiJ9eyJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MDU5NDI1MiwiaWF0IjoxNjgwNTk0MjUyfQ

cpc.app.jwtExpirationMs=3000000

### To install the dependencies in the FrontEnd: 
* run cd front
* run npm install 

![image](https://user-images.githubusercontent.com/96866076/235670940-87a3feb0-a434-4a74-bd88-3ec33eb9a83d.png)
### To install the dependencies in the BackEnd: 
* You can open the BackEnd with intellIJ IDE and click on maven the reload all projet.
* Run start the current file 'Backend Application'

![Uploading image.png…]()




