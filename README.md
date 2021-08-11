## folder angular
contains a minimal angular 12.2 app that uses a stencil component
## folder stencil
contains a hello world stencil component that uses async + await
## folder angular-dist
contains the compilation output when building the angular app with configuration production (with tsconfig target es2015 and target es2017)

The bug can be seen in the 893.*.js files. When using target es2015, a global async-polyfill is generated. This is not the case when target es2017 is used. Also no global polyfill when using angular 12.1.5 and es2015.


