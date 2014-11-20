# examples

  > 项目基础结构样板


## hello

- Nginx

    ```conf
    server {
      listen       80;
      server_name  hello.local;
    
      charset utf-8;
    
      location / {
        root        E:/codes/examples/hello;
        index       index.html index.htm;
      }
    
      # 反向代理 cmd-wrap 服务
      location ~ /static/(?<dir>app|mod)/(?<url>.*)$ {
        proxy_pass    http://127.0.0.1:8000/static/$dir/$url;
      }
    }
    ```

- Build

    ```bash
    $ grunt
    ```

- Proxy

    ```bash
    $ grunt proxy
    ```

- `sea.js`

    ```html
    <script src="static/lib/seajs/sea.js"></script>
    ```

- `config.js`

    ```html
    <script src="static/lib/config.js"></script>
    ```

- `app/**/*.js`

    > 直接引入构建后的地址

    ```javascript
    seajs.use('dist/app/index/index');
    seajs.use('dist/app/about/index');
    ```