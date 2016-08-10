# InputRadioOrCheckToImage

Little jquery plugin to change an input radio or an input checkbox to an image

## Demo

You can found a demo [here](http://github.dhoweb.be/InputRadioOrCheckToImage/test/)

## Instructions

You need to include [`jquery.js`](https://jquery.com/) first

Create input checkbox or radiobox:

```
<div class="row">
    <div class="col-md-4">
        <label for="check_01">
            <input type="checkbox" name="check_1" id="check_01" style="display: none;"/> Input check 1
        </label>
    </div>
    <div class="col-md-4">
        <label for="check_02">
            <input type="checkbox" name="check_1" id="check_02" checked="checked" style="display: none;"/> Input check 2
        </label>
    </div>
    <div class="col-md-4">
        <label for="check_03">
            <input type="checkbox" name="check_1" id="check_03" style="display: none;"/> Input check 3
        </label>
    </div>
</div>

```

> Tricks

If you don't want to see the "normal" input during the loading of the image, set it with `style="display: none;"` like this exemple

Now, you have to call `ircti()` with the name that link the input together

```
$(function()
{
    $('[name="check_1"]').ircti();
});

```

## Options

You can configure 4 options:

```
$('[name="radio_2"]').ircti({
    height: "20px",
    width: "20px",
    url_img_check: "../img/checkbox_check_2.png",
    url_img_no_check: "../img/checkbox_no_check_2.png"
});

```

- height
- width

Configure the height and with of the image. 
Default value is `auto`.

- url_img_check
- url_img_no_check

The url or the image for the check and not check input
Default value is the image that is in the folder /img.
