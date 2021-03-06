const electron = require('electron')
const path = require("path")
const url = require('url')
 
const { app,BrowserWindow,globalShortcut} = require('electron')
 
let mainWindow
 
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1600, height: 900, webPreferences: {webSecurity: false}})
 
  // and load the index.html of the app.
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, 'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))
  mainWindow.setMenu(null);
  mainWindow.loadURL('http://localhost:1551/demo');


 
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
 
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
 
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
 
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})