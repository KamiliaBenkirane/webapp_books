<template>

  <router-view ></router-view>

</template>



<style>

@font-face {
  font-family: 'Proxima Soft';
  src: url('./assets/fonts/proxima_soft/ProximaSoft-SemiBold.eot');
  src: local('Proxima Soft SemiBold'), local('ProximaSoft-SemiBold'),
  url('./assets/fonts/proxima_soft/ProximaSoft-SemiBold.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/proxima_soft/ProximaSoft-SemiBold.woff2') format('woff2'),
  url('./assets/fonts/proxima_soft/ProximaSoft-SemiBold.woff') format('woff'),
  url('./assets/fonts/proxima_soft/ProximaSoft-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Soft';
  src: url('./assets/fonts/proxima_soft/ProximaSoft-Bold.eot');
  src: local('Proxima Soft Bold'), local('ProximaSoft-Bold'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Bold.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Bold.woff2') format('woff2'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Bold.woff') format('woff'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Soft';
  src: url('./assets/fonts/proxima_soft/ProximaSoft-Medium.eot');
  src: local('Proxima Soft Medium'), local('ProximaSoft-Medium'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Medium.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Medium.woff2') format('woff2'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Medium.woff') format('woff'),
  url('./assets/fonts/proxima_soft/ProximaSoft-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

html,
body {
  margin: 0;
  padding: 0;
}

#app {
  margin : 0;
  height: 100vh;
  width: 100vw;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
