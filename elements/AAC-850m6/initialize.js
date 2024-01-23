function(instance, context) {
// Create an <i> tag for the icon
    var iconElement = instance.canvas.find('i')[0] || document.createElement("i");
	instance.data.click = (event) => {
    instance.triggerEvent("icon_is_clicked");
    event.stopPropagation();
  	};
    // Assign a default class
    iconElement.className = "ph-plus-circle"; 
    
	
	
    // Append the icon to the instance's DOM element if not already appended
    if (!instance.canvas.find('i').length) {
        instance.canvas.append(iconElement);
    }

    // Save the icon element in the instance for later use
    instance.data.iconElement = iconElement;

  
}