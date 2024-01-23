This is a repository based on the [Bubble](https://bubble.io) plugin 'Phosphor Icons'. 

##Documentation
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
 This plugin can be used in [Bubble applications](https://bubble.io).