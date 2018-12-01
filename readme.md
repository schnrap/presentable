# Presentable - presentations built on web components

Presentable is a small collection of web components built to create web-based presentations. It structures a presentation in sections which contain the slide shown in the presenation. 

## Getting started

Install the components using npm

```bash
npm install -S @schnrap/presentable
```



Include `presentable.js` in your document. If you want to start immediatelly, include the `presentable.css` to get a basic stylesheet for your presenation. Otherwise, you can style the content of your slides using a custom stylesheet.

```html
<script src="dist/presentable.js"></script>

<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
<link rel="stylesheet" href="build/presentable.css">
```

The root component of a presenation is the `pr-presentation` component, which manages the sections and slides. The `pr-section` component can be used in order to structure the presenation. The `pr-slide`component contains the visible HTML. Note, that this structure needs to be maintained.



```html
<pr-presentation>
  <pr-section>
    <pr-slide>
      <template>
        <h1>Presentable</h1>
        <h2>a <u>web component library</u> for creating awesome presenations</h2>
        <img src="https://picsum.photos/800/400?random" alt="">
      </template>
    </pr-slide>
  </pr-section>
</pr-presentation>
```



## The Components

### pr-presentation

The `pr-presentation` component manages the sections  and resonds to user input. In the following, the available properties for configuration are listed.

| property           | description                                                  |
| ------------------ | ------------------------------------------------------------ |
| disable-navigation | hides the navigation arrows to trigger slide transitions (default: false) |
| animated           | adds slide-in animations to slide transitions (default: false) |

### pr-section

The `pr-section` component manages the ancillary slides.

### pr-slide

The `pr-slide` contains the HTML visible within one presentation slide. The content of a section can either be set directly through a `template` element within the component or using an external file. The external file needs to contain the `template` element, which is inserted within the slide

```html
<pr-slide>
    <template>
    	<h1>Presentable</h1>
    </template>
</pr-slide>
<pr-slide url='mySlide.html'></pr-slide>
```

In the following, the available properties for configuration are listed

| property | description                                |
| -------- | ------------------------------------------ |
| url      | url to HTML document containing `template` |
| flowIn   | adds slide-in animation (default: false)   |