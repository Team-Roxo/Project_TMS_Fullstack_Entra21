const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;
function createWindow() {

  const { screen } = require('electron')
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  win = new BrowserWindow({ width, height, autoHideMenuBar: true, icon: __dirname + "/src/assets/logo.png" });
  // load the dist folder from Angular
  win.loadURL(
    url.format({

      // compiled verion of our app
      pathname: path.join(__dirname, '/dist/main/index.html'),
      protocol: "file:",
      slashes: true
    })
  );
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
// If you are using MACOS, we have to quit the app manully
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
