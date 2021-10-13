"use strict";(self.webpackChunkjini_venishjoe_net=self.webpackChunkjini_venishjoe_net||[]).push([[810],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},A=Object.keys(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,A=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=a(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||A;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var A=n.length,i=new Array(A);i[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<A;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return c}});var r=n(7462),o=n(3366),A=(n(7294),n(3905)),i=["components"],u={sidebar_position:17,slug:"solution-15"},l="Project Euler Solution 15",a={unversionedId:"project-euler/project-euler-15",id:"project-euler/project-euler-15",isDocsHomePage:!1,title:"Project Euler Solution 15",description:"Problem Statement",source:"@site/docs/project-euler/project-euler-15.md",sourceDirName:"project-euler",slug:"/project-euler/solution-15",permalink:"/project-euler/solution-15",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,slug:"solution-15"},sidebar:"tutorialSidebar",previous:{title:"Project Euler Solution 14",permalink:"/project-euler/solution-14"}},s=[{value:"Problem Statement",id:"problem-statement",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Sample Output",id:"sample-output",children:[]}],p={toc:s};function c(e){var t=e.components,u=(0,o.Z)(e,i);return(0,A.kt)("wrapper",(0,r.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"project-euler-solution-15"},"Project Euler Solution 15"),(0,A.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},(0,A.kt)("em",{parentName:"strong"},"Starting in the top left corner in a 20 by 20 grid, how many routes are there to the bottom right corner?"))),(0,A.kt)("p",null,"Starting in the top left corner of a 2\xd72 grid, there are 6 routes (without backtracking) to the bottom right corner."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Project Euler 15",src:n(4870).Z})),(0,A.kt)("p",null,"How many routes are there through a 20\xd720 grid?"),(0,A.kt)("h3",{id:"solution"},"Solution"),(0,A.kt)("p",null,"In a 2\xd72 grid, there are 3 rows and 3 columns"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Project Euler 15",src:n(9814).Z})),(0,A.kt)("p",null,"So our problem is to find the number of routes from top left corner a\u2080\u2080 to bottom right corner a\u2082\u2082. Let me show you what are the different routes that can be reached from a\u2080\u2080 to a\u2082\u2082 using a tree representation."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Project Euler 15",src:n(3169).Z})),(0,A.kt)("p",null,"Let us denote each node in this tree as aij and number of routes from aij to the destination node as routes","[i][j]",". The value at the top of each node represents the total number of routes from that node to the destination. "),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},"Number of routes from a node aij is the sum of the routes from its left and right child.\nroutes","[i][j]"," = routes","[i + 1][j]"," + routes","[i][j + 1]"),(0,A.kt)("li",{parentName:"ol"},"But when i=j, the number of routes from either of its child is always same. So it\u2019s enough to find the routes from one of its child and then double it.\nroutes","[i][j]"," = 2 ",(0,A.kt)("em",{parentName:"li"}," routes","[i + 1][j]"," or routes","[i][j]"," = 2 ")," routes","[i][j + 1]"),(0,A.kt)("li",{parentName:"ol"},"When i = 2 or j = 2 (Note: 2 is the grid size), the number of routes from that node to destination is 1. So this is the terminating condition.\nroutes","[GRID_SIZE][j]"," = 1\nroutes","[i][GRID_SIZE]"," = 1")),(0,A.kt)("p",null,"To speed up the program I have used an array to store the routes of the node that are already found. So whenever a node for which the route is already known is encountered, just take it from the array."),(0,A.kt)("h3",{id:"implementation"},"Implementation"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n\nint GRID_SIZE = 20;\nlong long int tree_routes[21][21] = { 0 };\nlong long int Routes(int, int);\n\nint main()\n{\n    long long int no_of_routes;\n    no_of_routes = Routes(0, 0);\n    printf("%lld", no_of_routes);\n    return 0;\n}\n\nlong long int Routes(int i, int j)\n{\n    long long int route, route1, route2;\n    route = 0;\n    route1 = 0;\n    route2 = 0;\n    if (tree_routes[i][j] != 0)\n    {\n        route = tree_routes[i][j];\n        return route;\n    }\n    while (i < (GRID_SIZE + 1) && j < (GRID_SIZE + 1))\n    {\n        if (i == GRID_SIZE || j == GRID_SIZE)\n        {\n            route = 1;\n            tree_routes[i][j] = 1;\n            return route;\n        }\n        if (i == j && i != GRID_SIZE && j != GRID_SIZE)\n        {\n            if (tree_routes[i + 1][j] != 0)\n            {\n                route = 2 *tree_routes[i + 1][j];\n                return route;\n            }\n            else\n            {\n                route = 2* Routes(i + 1, j);\n                tree_routes[i][j] = route;\n                return route;\n            }\n        }\n        if (tree_routes[i + 1][j] != 0) route1 = tree_routes[i + 1][j];\n        else route1 = Routes(i + 1, j);\n        if (tree_routes[i][j + 1] != 0) route2 = tree_routes[i][j + 1];\n        else route2 = Routes(i, j + 1);\n        route = route1 + route2;\n        tree_routes[i][j] = route;\n        return route;\n    }\n}\n')),(0,A.kt)("h3",{id:"sample-output"},"Sample Output"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Sample Output",src:n(6552).Z})))}c.isMDXComponent=!0},6552:function(e,t,n){t.Z=n.p+"assets/images/15-output-da26e964ce2985c78ea85fab8cd476d8.jpg"},4870:function(e,t){t.Z="data:image/jpeg;base64,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"},9814:function(e,t,n){t.Z=n.p+"assets/images/15-solution-1-00aaff944f77fd2916aeb1b56195a565.jpg"},3169:function(e,t,n){t.Z=n.p+"assets/images/15-solution-2-077b0f4bb5b3f957883ae485f7ff9e10.jpg"}}]);