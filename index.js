// Electron
const { app, Menu } = require("electron");
const remoteMain = require("@electron/remote/main");
remoteMain.initialize();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on("ready", () => {
    // Main window
    const window = require("./src/window");
    mainWindow = window.createBrowserWindow(app);
    remoteMain.enable(mainWindow.webContents);

    // Option 2: Load directly an URL if you don't need interface customization
    mainWindow.loadURL("https://mail.google.com/chat/u/0/#chat/welcome");
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.setTitle('Gtron view');
    })
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    app.quit();
});
