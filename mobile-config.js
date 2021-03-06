App.info({
  name: 'Bandersnatch',
  description: 'The Bandersnatch App offers customers the opportunity to place orders remotely at the Bandersnatch Cafe at Denison University.',
  id: 'com.denisonenterprises.bandersnatch',
  version: '1.1.0',
  author: 'Denison Enterprises',
  email: 'denisonenterprises@gmail.com',
  website: 'http://denisonenterprises.com'	
});

App.accessRule('http://denisonbandersnatch.com/*');

App.icons({
  
	// iOS
  'iphone': 'public/icons/icon-60x60.png',
  'iphone_2x': 'public/icons/icon-60x60@2x.png',
  'iphone_3x': 'public/icons/icon-60x60@3x.png',
  'ipad': 'public/icons/icon-76x76.png',
  'ipad_2x': 'public/icons/icon-76x76@2x.png',

  // Android
  'android_ldpi': 'public/icons/icon-36x36.png',
  'android_mdpi': 'public/icons/icon-48x48.png',
  'android_hdpi': 'public/icons/icon-72x72.png',
  'android_xhdpi': 'public/icons/icon-96x96.png'
  
});



App.launchScreens({
  
  // iOS
  'iphone': 'public/splash/splash-320x480.png',
  'iphone_2x': 'public/splash/splash-320x480@2x.png',
  'iphone5': 'public/splash/splash-320x568@2x.png',
  'iphone6': 'public/splash/splash-375x667@2x.png',
  'iphone6p_portrait': 'public/splash/splash-414x736@3x.png',
  'iphone6p_landscape': 'public/splash/splash-736x414@3x.png',

  'ipad_portrait': 'public/splash/splash-768x1024.png',
  'ipad_portrait_2x': 'public/splash/splash-768x1024@2x.png',
  'ipad_landscape': 'public/splash/splash-1024x768.png',
  'ipad_landscape_2x': 'public/splash/splash-1024x768@2x.png',

  // Android
  'android_ldpi_portrait': 'public/splash/splash-200x320.png',
  'android_ldpi_landscape': 'public/splash/splash-320x200.png',
  'android_mdpi_portrait': 'public/splash/splash-320x480.png',
  'android_mdpi_landscape': 'public/splash/splash-480x320.png',
  'android_hdpi_portrait': 'public/splash/splash-480x800.png',
  'android_hdpi_landscape': 'public/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'public/splash/splash-720x1280.png',
  'android_xhdpi_landscape': 'public/splash/splash-1280x720.png'

});

