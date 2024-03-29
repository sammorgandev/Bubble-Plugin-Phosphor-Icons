function(instance, properties, context) {
      let root = instance.canvas.get(0);

 // Retrieve the icon element created in the initialize function
    var iconElement = instance.data.iconElement;
    
 // Check to see if an existing stylesheet is already in the header since the update function runs often and this may not be the first time
    var existingLink = document.querySelector(`link[href*="@phosphor-icons"][href*="${properties.type}"]`);

 // append the correct stylesheet to the header if it doesn't already exist
  	if (!existingLink) {
      var dynamicStyle = properties.type;
      const linkEl = $('<link rel="stylesheet" type="text/css" />')
      linkEl.attr('href', `https://unpkg.com/@phosphor-icons/web@2.0.3/src/${dynamicStyle}/style.css` )
      $('head').append(linkEl)    
    }
    
    if (properties.clickable) {
    root.style.cursor = "pointer";
    root.addEventListener("click", instance.data.click);
  	} else {
    root.style.cursor = "inherit";
  	}
   
     const typeClass = properties.type === 'regular' ? 'ph' : `ph-${properties.type}`
     $(iconElement).removeClass().addClass([`ph-${properties.icon_id}`, typeClass]) 
 
 // Apply additional styles like color and size
    iconElement.style.color = properties.color;
    iconElement.style.fontSize = properties.bubble.width() + "px"; // Assuming the size is in pixels
    
    
 // Publish element states
    instance.publishState('color', properties.color)
    instance.publishState('type', properties.type)
    instance.publishState('icon_id', properties.icon_id)
    
}