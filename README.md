# E-Learning-SPRING-BOOT-Application

This is an e-learning application in which teachers can upload courses with activities and students can create accounts and check the courses uploaded by every teacher.
The courses could be with pdf format or videos. 

Lien Demo sur Youtube: https://youtu.be/ZYaBd7tzrRk


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

![image](https://user-images.githubusercontent.com/96866076/235671206-e47b7c66-40ca-4b33-b172-22cc48843fdb.png)

### To install the dependencies in the BackEnd: 
* You can open the BackEnd with intellIJ IDE and click on maven the reload all projet.
* Run start the current file 'Backend Application'

![image](https://user-images.githubusercontent.com/96866076/235671034-ece74ecb-24a9-45e4-af65-c75a6a65c24a.png)



