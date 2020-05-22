// 通过 require electron 来控制程序
const { app, BrowserWindow } = require('electron')

// app加载完毕
app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    frame: false,
    hasShadow: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载 html 页面
  mainWindow.loadURL(`http://localhost:8080`)
  // mainWindow.loadFile('./dist/index.html')

  // 打开控制台
  mainWindow.webContents.openDevTools()
})

// macOS 的一些设置
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
