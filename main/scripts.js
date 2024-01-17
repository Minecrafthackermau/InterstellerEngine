 const batteryLevelThreshold = 20;
    const batteryElement = document.getElementById('battery-level');
    const popupContainer = document.getElementById('popup-container');
    const closeButton = document.getElementById('close-button');
    const batteryPercentageElement = document.getElementById('battery-percentage');
    
    // Update battery level and check if it's below the threshold
    function updateBatteryLevel(level) {
      const batteryHeight = (level / 100) * 70; // Adjust the battery height based on the level
      batteryElement.style.height = `${batteryHeight}px`;
      
      if (level <= batteryLevelThreshold) {
        popupContainer.style.display = 'block';
      } else {
        popupContainer.style.display = 'none';
      }
    }
    
    // Close the pop-up when the close button is clicked
    closeButton.addEventListener('click', () => {
      popupContainer.style.display = 'none';
    });
    
    // Retrieve battery information from the device
    navigator.getBattery().then(function(battery) {
      function updateBatteryStatus() {
        const batteryLevel = Math.floor(battery.level * 100);
        batteryPercentageElement.textContent = batteryLevel;
        updateBatteryLevel(batteryLevel);
      }
      
      updateBatteryStatus();
      
      battery.addEventListener('levelchange', updateBatteryStatus);
    });