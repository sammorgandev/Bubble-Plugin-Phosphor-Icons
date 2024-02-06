This is a repository based on the [Bubble](https://bubble.io) plugin 'Phosphor Icons'.

**Documentation**

```
initialize function

instance = {
     canvas: div wrapped in a jQuery object
     publishState: function(name: String, value) - changes the value of a state
     triggerEvent: function(name: String, callback: function(err)) - triggers an event
     data: Object containing custom data - read and write by doing instance.data.your_variable
}
context = {
     currentUser: {
         get: function(fieldName: String) - returns the value of a field for the object
         listProperties: function() - returns an array of the different fields you can access. These fields will include email, logged_in, Slug, Created Date, Modified Date, and _id.
     }
     jQuery: main jQuery object
     uploadContent: function(fileName: String, contents: Base64 String, callback: function(err, url), [attachTo])
                    attachTo: optional parameter to attach the file to. It has to be a thing in Bubble
     async: call context.async with a function that kicks off an asynchronous operation,
         taking a callback taking (err, res). Returns res or else throws error.
     keys: Object with Keys defined in the Plugins Tab
     onCookieOptIn: function(callback: function - runs callback once cookies are allowed (immediately if already accepted)
     reportDebugger: function(message: String) - reports an error to the debugger
}

properties = {
     icon_id: String
     color: String (color code)
     type: String (one of the options)
     clickable: Boolean
     bubble: Object containing the element bubble properties (see below)
}
properties.bubble = {
     width: function() - returns a Number
     height: function() - returns a Number
     min_width_css: function() - returns a String
     max_width_css: function() - returns a String
     fit_width: function() - returns a Boolean
     min_height_css: function() - returns a String
     max_height_css: function() - returns a String
     fit_height: function() - returns a Boolean
     margin_top: function() - returns a Number
     margin_bottom: function() - returns a Number
     margin_left: function() - returns a Number
     margin_right: function() - returns a Number
     collapse_when_hidden: function() - returns a Boolean
     background_style: function() - returns a String
     bgcolor: function() - returns a String
     background_gradient_style: function() - returns a String
     background_gradient_direction: function() - returns a String
     background_gradient_custom_angle: function() - returns a Number
     background_radial_gradient_shape: function() - returns a String
     background_radial_gradient_size: function() - returns a String
     background_radial_gradient_xpos: function() - returns a Number
     background_radial_gradient_ypos: function() - returns a Number
     background_gradient_from: function() - returns a String
     background_gradient_to: function() - returns a String
     background_gradient_mid: function() - returns a String
     background_image: function() - returns a String
     center_background: function() - returns a Boolean
     background_size_cover: function() - returns a Boolean
     crop_responsive: function() - returns a Boolean
     repeat_background_vertical: function() - returns a Boolean
     repeat_background_horizontal: function() - returns a Boolean
     background_color_if_empty_image: function() - returns a String
     four_border_style: function() - returns a Boolean
     border_style: function() - returns a String
     border_roundness: function() - returns a Number
     border_width: function() - returns a Number
     border_color: function() - returns a String
     border_style_top: function() - returns a String
     border_roundness_top: function() - returns a Number
     border_width_top: function() - returns a Number
     border_color_top: function() - returns a String
     border_style_right: function() - returns a String
     border_roundness_right: function() - returns a Number
     border_width_right: function() - returns a Number
     border_color_right: function() - returns a String
     border_style_bottom: function() - returns a String
     border_roundness_bottom: function() - returns a Number
     border_width_bottom: function() - returns a Number
     border_color_bottom: function() - returns a String
     border_style_left: function() - returns a String
     border_roundness_left: function() - returns a Number
     border_width_left: function() - returns a Number
     border_color_left: function() - returns a String
     padding_vertical: function() - returns a Number
     padding_horizontal: function() - returns a Number
     boxshadow_style: function() - returns a String
     boxshadow_horizontal: function() - returns a Number
     boxshadow_vertical: function() - returns a Number
     boxshadow_blur: function() - returns a Number
     boxshadow_spread: function() - returns a Number
     boxshadow_color: function() - returns a String
     is_visible: function() - returns a Boolean
}
 This plugin can be used in [Bubble applications](https://bubble.io).
```
