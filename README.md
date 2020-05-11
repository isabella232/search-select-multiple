# Search select multiple

![Default appearance for the 'search-select-multiple' field plug-in](extras/default-search.jpg)

## Description

This builds on the [baseline-select_multiple fieldplugin](https://github.com/surveycto/baseline-select_multiple), by adding the ability to ***filter*** the options by searching when using the default

[![Download now](extras/download-button.png)](https://github.com/surveycto/search-select-multiple/raw/master/search-select-multiple.fieldplugin.zip)

## Default SurveyCTO feature support

| Feature / Property | Support |
| --- | --- |
| Supported field type(s) | `select_multiple`|
| Default values | Yes |
| Custom constraint message | Yes |
| Custom required message | Yes |
| Read only | Yes |
| media:image | Yes |
| media:audio | Yes |
| media:video | Yes |
| `minimal` appearance | No |
| `compact` appearance | No |
| `compact-#` appearance | No |

## Expanded feature support

In addition to supporting the default SurveyCTO features listed above, this field plug-in offers the following expanded functionality:

1. Support for RTL languages  
    If your *label*, *hint*, or choice labels are in a language that uses a right-to-left alphabet (like Arabic), they will be right-justified, and the checkboxes will be to the right of the choice labels. If your form contains both right-to-left and left-to-right choice labels, the formatting will respond to the currently-selected form language.
1. Support for HTML in choice labels  
    This plug-in will allow HTML in choice labels to be rendered as HTML, even in Collect on Android and iOS.
1. Support for HTML in field references  
    If you reference another field's value in either the field *label* or field *hint*, and that referenced value contains HTML, the HTML will be correctly rendered.

## How to use

1. Download the test form [extras/sample-form](https://github.com/surveycto/search-select-multiple/raw/master/extras/sample-form/plugin_test_form_search_select_multiple.xlsx) from this repo and upload it to your SurveyCTO server.
1. Download the [search-select-multiple.fieldplugin.zip](https://github.com/surveycto/search-select-multiple/raw/master/search-select-multiple.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.

## More resources

* **Test form**  
You can find a sample form definition here: 
[Download sample form](https://github.com/surveycto/search-select-multiple/raw/master/extras/sample-form/plugin_test_form_search_select_multiple.xlsx)

* **Developer documentation**  
Instructions and resources for developing your own field plug-ins.  
[https://github.com/surveycto/Field-plug-in-resources](https://github.com/surveycto/Field-plug-in-resources)

* **User documentation**  
How to get started using field plug-ins in your SurveyCTO form.  
[https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html](https://docs.surveycto.com/02-designing-forms/03-advanced-topics/06.using-field-plug-ins.html)
