cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-custom-config": "4.0.2",
  "cordova-plugin-add-swift-support": "1.7.2",
  "cordova-plugin-device": "1.1.7"
};
// BOTTOM OF METADATA
});