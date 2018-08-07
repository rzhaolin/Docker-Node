# Hello

1. 编写 Dockerfile (注意：开头必须大写，位置放在：项目的根目录下）

   FROM node:latest   // 安装最新的node版本
   RUN mkdir -p /home/node
   WORKDIR /home/node
   COPY . /home/node
   run npm config set registry https://registry.npm.taobao.org
   RUN npm install
   ENTRYPOINT ["npm", "run"]
   CMD ["start"]

2. 将代码打包成镜像：运行docker build . 

3.为了方便管理，给镜像打tag:  docker tag b86282a8ba4c node-demo:v1.0.1

4. 安装并镜像

   docker run --name hello -p 1301:1301 -d node-demo:v1.0.1

   说明：
   1）给容器取名：--name hello，容器名字为：hello
   2）端口映射：-p 1301:1301：-p 本机端口：容器端口，1301是node.js代码中取的访问端口
   3）后台运行：-d

   在终端输入：docker ps , 查看我们创建的容器运行情况。

5. 验证应用
   在浏览器地址栏输入：http://localhost:1301/getname?name=哈利波特
   浏览器显示：  Your name is: 哈利波特
   OK，说明我们的应用已经部署好了。


