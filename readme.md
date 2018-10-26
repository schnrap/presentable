# Presentable - presentations built on web components

Presentable is a small collection of web components to create web-based presentations.

## Getting started

```bash
npm install -S @schnrap/presentable
```

```html
<html>
  <head>
    <script src="dis/presentable.js"></script>
  </head>
  <body>
  
  <presentable-presentation>
    <presentable-slide >
      <div style="margin:auto; width: 600px">
        <h1>Simple Slide</h1>
      </div>
    </presentable-slide>
  
    <presentable-slide style="margin:auto; width: 600px"disable-pager="true">
      <h2>Slide without Header</h2>
    </presentable-slide>
  </presentable-presentation>
  </body>
</html>
```

## presentable-slide

The *presentable-slide*  is

```html
<presentable-slide disable-pager="true">
  <h2>Slide without Header</h2>
</presentable-slide>
```

## presentable-header

```html
<presentable-header>
    <template type="style">
      .pager { color: grey;}
    </template>
    <template>
      <div class="pager">{{page}}</div>
    </template>
</presentable-header>
```

## presentable-footer

```html
<presentable-footer>
    <template type="style">
      .pager { color: grey;}
    </template>
    <template>
      <div class="pager">{{page}}</div>
    </template>
</presentable-footer>
```
