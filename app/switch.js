function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

  if (currentThemeSetting === 'dark')    {
    document.documentElement.setAttribute('data-theme','dark');
  }

  else if (currentThemeSetting === 'light') {
    document.documentElement.setAttribute('data-theme','light');
  }

 
 function changeTheme()    {

    var elm = document.getElementById('toggle-switch');

    if (elm.checked === false)  {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    else if (elm.checked === true) {
        document.documentElement.setAttribute('data-theme', 'light');
    }



 }   
    

