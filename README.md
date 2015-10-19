# VCountdown
> Show how many characters remaining in a HTML with pure JavaScript

## Demo
View demo [here](http://www.pinceladasdaweb.com.br/blog/uploads/vcountdown/).

## Getting Started

```bash
# Get the latest snapshot
$ git clone git@github.com:pinceladasdaweb/VCountdown.git
```

Add the following javascript before your ```</body>``` tag:

```html
<script src="path/to/vcountdown.min.js"></script>
<script>
    VCountdown({
        target: '.countdown',
        maxChars: 160
    });
</script>
```

The script expect the following values:

| Value                              | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **target**                         | Id or class of textarea.                                    |
| **maxChars**                       | Maximum of characters. Default is 140.                      |

## Browser support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/VCountdown/releases) for detailed changelog.

## License

[MIT](LICENSE)
