function(instance, properties) {
 // Retrieve the icon element created in the initialize function
  var iconElement = document.createElement("i");
  var existingLink = document.querySelector(`link[href*="@phosphor-icons"][href*="${properties.type}"]`);

 // append the correct stylesheet to the header
   	if (!existingLink) {
      var dynamicStyle = properties.type;
      var linkEl = $('<link rel="stylesheet" type="text/css" />')
      linkEl.href = `https://unpkg.com/@phosphor-icons/web@2.0.3/src/${dynamicStyle}/style.css`
      $('head').append(linkEl)    
    }
    
 // Update the class based on the selected icon type and style
    //regular type has a unique class ".ph" instead of ."ph-regular" hence the if statement
    if (properties.type == 'regular') { iconElement.className = "ph-" + properties.icon_id + " " + "ph" }
    else { iconElement.className = "ph-" + properties.icon_id + " " + "ph-" + properties.type; }

 // Apply additional styles like color and size
    var iconWidth = properties.bubble.width()
    iconElement.style.color = properties.color;
    iconElement.style.fontSize = iconWidth + "px";
    
   
 // Append the element to the canvas for display   
    instance.canvas.append(iconElement);

}