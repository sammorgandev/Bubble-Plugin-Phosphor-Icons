function(instance, properties) {
     let root = instance.canvas.get(0);
 // Retrieve the icon element created in the initialize function
  var iconElement = document.createElement("i");
  var existingLink = document.querySelector(`link[href*="@phosphor-icons"][href*="${properties.type}"]`);

 // append the correct stylesheet to the header
   	if (!existingLink) {
      var dynamicStyle = properties.type;
      var linkEl = $('<link rel="stylesheet" type="text/css" />')
      linkEl.attr('href', `https://unpkg.com/@phosphor-icons/web@2.0.3/src/${dynamicStyle}/style.css` )
      $('head').append(linkEl)    
    }
    
    const typeClass = properties.type === 'regular' ? 'ph' : `ph-${properties.type}`
    $(iconElement).removeClass().addClass([`ph-${properties.icon_id}`, typeClass]) 

 // Apply additional styles like color and size

    iconElement.style.color = properties.color;
    iconElement.style.fontSize = properties.bubble.width() + "px";

   
   // Append the icon to the instance's DOM element if not already appended
    if (!instance.canvas.find('i').length) {
        instance.canvas.append(iconElement);
    }

}