# SDM
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


-------------------------------SDM-------------------------------------

1) make a folder + open cmd first command -> "npm init"(package.json is created)
    i) make public folder --> images folder(put your images)
2) open this folder in vs code 
      npm install express
3) make server.js outside public folder
      check by running node server.js
      test it in your browser
4) make docker file 
      write FROM node:18
	    WORKDIR /app
	    COPY package.json /app
	    RUN npm install
	    COPY . /app
	    CMD node server.js 

5) Now upload this project on github
         i) make new repositary (gitignore--node)
         ii) clone it in your system
         iii) if error oocurs clear proxy and set credential 
              "8 Commands"

         iv) copy our project folder and paste it in repositary cloned folder
         v)  push it on github
6)go on aws login with your credentials
7)lauch instance 
   1)configure the setting
       i) write instance name
       ii) select os as ubuntu
       iii) create key value pair select .ppk file
       iv) launch instance.

8)security --> security group --> edit inbound rules --> add rule --> type=all traffic --> source=anywhere ipv4--> save rule 
9)select particular instance and connect
10) sudo apt update 
11) make folder mkdir folder_name --> go into particular folder --> git clone our project
12) ls --->  go inside our project
13) sudo apt install docker.io
14) sudo systemctl --type=service --state=running
15) sudo docker build -t image_name(lowercase) .
16) to check image --> sudo docker images
17) sudo docker run -d -p port_number:port_number image_name
18) copy ip address
19) go into the browser type copiedIpAdddress:port_number
20) done!!!!!!
