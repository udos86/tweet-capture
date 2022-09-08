<launching> /root/.cache/ms-playwright/firefox-1335/firefox/firefox -no-remote -headless -profile /tmp/playwright_firefoxdev_profile-MYU9Ml -juggler-pipe -silent
<launched> pid=214
[pid=214][err] *** You are running in headless mode.
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) [GFX1-]: glxtest: libpci missing
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) |[1][GFX1-]: glxtest: Unable to open a connection to the X server (t=1.28314) [GFX1-]: glxtest: Unable to open a connection to the X server
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) |[1][GFX1-]: glxtest: Unable to open a connection to the X server (t=1.28314) |[2][GFX1-]: glxtest: libEGL missing (t=1.28316) [GFX1-]: glxtest: libEGL missing
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) |[1][GFX1-]: glxtest: Unable to open a connection to the X server (t=1.28314) |[2][GFX1-]: glxtest: libEGL missing (t=1.28316) |[3][GFX1-]: No GPUs detected via PCI (t=1.28376) [GFX1-]: No GPUs detected via PCI
[pid=214][out] 
[pid=214][out] Juggler listening to the pipe
[pid=214][out] console.error: Region.jsm: "Error fetching region" (new Error("TIMEOUT", "resource://gre/modules/Region.jsm", 767))
[pid=214][out] console.error: Region.jsm: "Failed to fetch region" (new Error("TIMEOUT", "resource://gre/modules/Region.jsm", 419))
browser.newPage: Protocol error (Browser.newPage): Browser closed.
==================== Browser output: ====================
<launching> /root/.cache/ms-playwright/firefox-1335/firefox/firefox -no-remote -headless -profile /tmp/playwright_firefoxdev_profile-MYU9Ml -juggler-pipe -silent
<launched> pid=214
[pid=214][err] *** You are running in headless mode.
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) [GFX1-]: glxtest: libpci missing
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) |[1][GFX1-]: glxtest: Unable to open a connection to the X server (t=1.28314) [GFX1-]: glxtest: Unable to open a connection to the X server
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) |[1][GFX1-]: glxtest: Unable to open a connection to the X server (t=1.28314) |[2][GFX1-]: glxtest: libEGL missing (t=1.28316) [GFX1-]: glxtest: libEGL missing
[pid=214][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: glxtest: libpci missing (t=1.27465) |[1][GFX1-]: glxtest: Unable to open a connection to the X server (t=1.28314) |[2][GFX1-]: glxtest: libEGL missing (t=1.28316) |[3][GFX1-]: No GPUs detected via PCI (t=1.28376) [GFX1-]: No GPUs detected via PCI
[pid=214][out] 
[pid=214][out] Juggler listening to the pipe
[pid=214][out] console.error: Region.jsm: "Error fetching region" (new Error("TIMEOUT", "resource://gre/modules/Region.jsm", 767))
[pid=214][out] console.error: Region.jsm: "Failed to fetch region" (new Error("TIMEOUT", "resource://gre/modules/Region.jsm", 419))
    at async CaptureService.captureTweet (/app/dist/capture.service.js:22:34)
    at async AppController.getTweetCapture (/app/dist/app.controller.js:24:24)
    at async /app/node_modules/@nestjs/core/router/router-execution-context.js:46:28
    at async /app/node_modules/@nestjs/core/router/router-proxy.js:9:17


[Nest] 1  - 08/10/2022, 9:24:52 AM   ERROR [ExceptionsHandler] page.goto: Navigation failed because page crashed!
=========================== logs ===========================
navigating to "https://twitter.com/user/status/1338546514646487045", waiting until "load"
============================================================
page.goto: Navigation failed because page crashed!
=========================== logs ===========================
navigating to "https://twitter.com/user/status/1338546514646487045", waiting until "load"
============================================================
    at CaptureService.captureTweet (/app/dist/capture.service.js:30:20)
    at async AppController.getTweetCapture (/app/dist/app.controller.js:24:24)
    at async /app/node_modules/@nestjs/core/router/router-execution-context.js:46:28
    at async /app/node_modules/@nestjs/core/router/router-proxy.js:9:17
