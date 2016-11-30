# rnWebviewPostMessage

> In which we show that `postMessage` from React Native WebView in Android has problems.

# Problem

On Android, the WebView does not seem to overwrite the `window.postMessage` function. This repository provides a minimal example to reproduce the problem.

Steps to reproduce:

- `react-native start`
- `adb logcat | egrep -w -i "ReactNativeJS|chromium"`
- `react-native run-android`

Look for the line saying something like this:

```
I chromium: [INFO:CONSOLE(10)] "Uncaught TypeError: Failed to execute 'postMessage' on 'Window': 2 arguments required, but only 1 present.", source: http://localhost:8081/assets/index.html?platform=android&hash=e7c831b1866f166513ca99c25df1412e (10)
```

I.e. `window.postMessage` was never taken over by the custom `postMessage` implemented in ReactNative's WebView.
