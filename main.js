const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var debug = true;
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.maximize();
  mainWindow.loadURL(`file://${__dirname}/dist/angular-desktop/index.html`);
  mainWindow.on("ready-to-show", () => {
    console.log(`Window opened at: ${new Date().toString()}`);
  });
  
  mainWindow.on("closed", () => {
    console.log(`Window closed at: ${new Date().toString()}`);
  });
}

app.on("ready", createWindow);
 app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// app.once('ready',()=>{
//   const my= new Date.now
//   console.log(`my`, my);
// })

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

