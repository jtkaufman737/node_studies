## LESSON 1
- Node is ultimately a runtime written in C++ that deals with I/O, file handling, etc
- This was built with Chrome using the V8 JavaScript engine of Chromium
- Node translates code to V8 (also written in C++ like Chrome and Node)
- both .querySelector and .getItem are actually features of the Chrome runtime and are executed in C++
- Some similar ones are .readFile and .platform both which are executed in the runtime with C++ functionality

- `global` refers to most things the node environment has access to (better way of phrasing that but I can't think of it)
- process refers to the current node process, and you can do process.exit()

## LESSON 2
- Non blocking I/O is a browser-ism that has grown farther than the browser 
