# examples

  > 项目样例


1. [项目样例 - hello](#hello)
2. [组件样例 - module](#module)
3. [项目样例 - slider](#slider)


1. hello

> `<package.name>` 为 package.json 中的 name，亦即 package.json 所在的目录名。

- 项目构建

    ```bash
    $ grunt build
    ```

    构建后的 app 文件存放于 dist 目录，css 文件存放于 themes/default/css 目录

- 调试服务器

    ```bash
    $ grunt server
    ```

    浏览器中访问 http://127.0.0.1:8080

- `sea.js`

    ```html
    <script src="<package.name>/lib/seajs/sea.js"></script>
    ```

- `config.js`

    ```html
    <script src="<package.name>/lib/config.js"></script>
    ```

- `app/**/*.js`

    ```javascript
    seajs.use('<package.name>/app/index/index');
    seajs.use('<package.name>/app/about/index');
    ```


## module

- 调试服务器

    ```bash
    $ grunt server
    ```

- 发布组件

    ```bash
    $ grunt publish
    ```


## slider

参见 [hello](#hello)
