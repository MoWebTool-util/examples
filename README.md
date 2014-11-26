# examples

  > 项目基础结构样板


1. [hello](#hello)
2. [module](#hello)


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
      location ~ ^/static/(?<dir>app|mod|spm_modules)/(?<url>.*)$ {
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

    ```javascript
    seajs.use('static/app/index/index');
    seajs.use('static/app/about/index');
    ```


## module

- Develop

    ```bash
    $ grunt
    ```

- Publish

    ```bash
    $ grunt publish
    ```
