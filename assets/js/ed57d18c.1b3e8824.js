"use strict";(self.webpackChunkjini_venishjoe_net=self.webpackChunkjini_venishjoe_net||[]).push([[60],{3905:function(t,n,l){l.d(n,{Zo:function(){return c},kt:function(){return b}});var e=l(7294);function r(t,n,l){return n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function o(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),l.push.apply(l,e)}return l}function u(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){r(t,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))}))}return t}function d(t,n){if(null==t)return{};var l,e,r=function(t,n){if(null==t)return{};var l,e,r={},o=Object.keys(t);for(e=0;e<o.length;e++)l=o[e],n.indexOf(l)>=0||(r[l]=t[l]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)l=o[e],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=e.createContext({}),k=function(t){var n=e.useContext(i),l=n;return t&&(l="function"==typeof t?t(n):u(u({},n),t)),l},c=function(t){var n=k(t.components);return e.createElement(i.Provider,{value:n},t.children)},a={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},p=e.forwardRef((function(t,n){var l=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),p=k(l),b=r,s=p["".concat(i,".").concat(b)]||p[b]||a[b]||o;return l?e.createElement(s,u(u({ref:n},c),{},{components:l})):e.createElement(s,u({ref:n},c))}));function b(t,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=l.length,u=new Array(o);u[0]=p;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,u[1]=d;for(var k=2;k<o;k++)u[k]=l[k];return e.createElement.apply(null,u)}return e.createElement.apply(null,l)}p.displayName="MDXCreateElement"},5413:function(t,n,l){l.r(n),l.d(n,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return k},toc:function(){return c},default:function(){return p}});var e=l(7462),r=l(3366),o=(l(7294),l(3905)),u=["components"],d={sidebar_position:10,slug:"solution-08"},i="Project Euler Solution 8",k={unversionedId:"project-euler/project-euler-08",id:"project-euler/project-euler-08",isDocsHomePage:!1,title:"Project Euler Solution 8",description:"Problem Statement",source:"@site/docs/project-euler/project-euler-08.md",sourceDirName:"project-euler",slug:"/project-euler/solution-08",permalink:"/project-euler/solution-08",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"solution-08"},sidebar:"tutorialSidebar",previous:{title:"Project Euler Solution 7",permalink:"/project-euler/solution-07"},next:{title:"Project Euler Solution 9",permalink:"/project-euler/solution-09"}},c=[{value:"Problem Statement",id:"problem-statement",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Sample Output",id:"sample-output",children:[]}],a={toc:c};function p(t){var n=t.components,d=(0,r.Z)(t,u);return(0,o.kt)("wrapper",(0,e.Z)({},a,d,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-euler-solution-8"},"Project Euler Solution 8"),(0,o.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Largest product in a series."))),(0,o.kt)("p",null,"Find the greatest product of five consecutive digits in the 1000-digit number."),(0,o.kt)("p",null,"73167176531330624919225119674426574742355349194934",(0,o.kt)("br",null),"\n96983520312774506326239578318016984801869478851843",(0,o.kt)("br",null),"\n85861560789112949495459501737958331952853208805511",(0,o.kt)("br",null),"\n12540698747158523863050715693290963295227443043557",(0,o.kt)("br",null),"\n66896648950445244523161731856403098711121722383113",(0,o.kt)("br",null),"\n62229893423380308135336276614282806444486645238749",(0,o.kt)("br",null),"\n30358907296290491560440772390713810515859307960866",(0,o.kt)("br",null),"\n70172427121883998797908792274921901699720888093776",(0,o.kt)("br",null),"\n65727333001053367881220235421809751254540594752243",(0,o.kt)("br",null),"\n52584907711670556013604839586446706324415722155397",(0,o.kt)("br",null),"\n53697817977846174064955149290862569321978468622482",(0,o.kt)("br",null),"\n83972241375657056057490261407972968652414535100474",(0,o.kt)("br",null),"\n82166370484403199890008895243450658541227588666881",(0,o.kt)("br",null),"\n16427171479924442928230863465674813919123162824586",(0,o.kt)("br",null),"\n17866458359124566529476545682848912883142607690042",(0,o.kt)("br",null),"\n24219022671055626321111109370544217506941658960408",(0,o.kt)("br",null),"\n07198403850962455444362981230987879927244284909188",(0,o.kt)("br",null),"\n84580156166097919133875499200524063689912560717606",(0,o.kt)("br",null),"\n05886116467109405077541002256983155200055935729725",(0,o.kt)("br",null),"\n71636269561882670428252483600823257530420752963450",(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"In this problem the input is a 1000 digit number, so what I did was copied this 1000 digit number to a notepad. Then read the file string by string converting it into integer. Actually what happened was it converted each number into an ASCII number, so I subtracted 48 from each ASCII number to get the decimal number and stored it in an array."),(0,o.kt)("p",null,"Now the array with 1000 numbers is ready for finding the greatest product of five consecutive digits. For this let us consider a 10 digit number"),(0,o.kt)("p",null,"73167176531"),(0,o.kt)("p",null,"The following shows the array representation of this number"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"2"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"4"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,"9")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"3")))),(0,o.kt)("p",null,"Let  us see how to find the greatest product of 5 consecutive numbers"),(0,o.kt)("p",null,"Initialize Product = 0, whenever  New_product is calculated and is greater than Product, update the Product."),(0,o.kt)("p",null,"First iteration, i = 0"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#92d050"},"0"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"2"),(0,o.kt)("td",{bgcolor:"#92d050"},"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"4"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,"9")),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"3")))),(0,o.kt)("p",null,"New_Product =7 x 3 x 1 x 6 x 7=882;"),(0,o.kt)("p",null,"Here the New_Product > Product,  so Product=882;"),(0,o.kt)("p",null,"Second Iteration, i = 2"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"2"),(0,o.kt)("td",{bgcolor:"#92d050"},"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"4"),(0,o.kt)("td",{bgcolor:"#92d050"},"5"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,"9")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"3")))),(0,o.kt)("p",null,"New_Product = 3 x 1 x 6 x 7 x 1 = 126;"),(0,o.kt)("p",null,"Here New_Product < Product, So product remains the same."),(0,o.kt)("p",null,"Third Iteration,"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"2"),(0,o.kt)("td",{bgcolor:"#92d050"},"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"4"),(0,o.kt)("td",{bgcolor:"#92d050"},"5"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,"9")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"3")))),(0,o.kt)("p",null,"New_Product = 1 x 6 x 7 x 1 x 7 = 294"),(0,o.kt)("p",null,"Fourth  Iteration, i = 3"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"2"),(0,o.kt)("td",{bgcolor:"#92d050"},"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"4"),(0,o.kt)("td",{bgcolor:"#92d050"},"5"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,"9")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"3")))),(0,o.kt)("p",null,"New_Product = 6 x 7 x 1 x 7 x 6 = 1764"),(0,o.kt)("p",null,"Update Product = 1764"),(0,o.kt)("p",null,"Fifth Iteration, i = 4"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"2"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"4"),(0,o.kt)("td",{bgcolor:"#92d050"},"5"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"8"),(0,o.kt)("td",null,"9")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"5"),(0,o.kt)("td",null,"3")))),(0,o.kt)("p",null,"New_Product = 7 x 1 x 7 x 6 x 5 = 1479;"),(0,o.kt)("p",null,"Sixth Iteration, i = 5"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"2"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"4"),(0,o.kt)("td",{bgcolor:"#92d050"},"5"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"8"),(0,o.kt)("td",{bgcolor:"#92d050"},"9")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"1"),(0,o.kt)("td",{bgcolor:"#92d050"},"7"),(0,o.kt)("td",{bgcolor:"#92d050"},"6"),(0,o.kt)("td",{bgcolor:"#92d050"},"5"),(0,o.kt)("td",{bgcolor:"#92d050"},"3")))),(0,o.kt)("p",null,"New_Product = 1 x 7 x 6 x 5 x 3 = 630"),(0,o.kt)("p",null,"When the product is updated for the last time in 3rd iteration, the value is 1764. So the greatedt product of five consecutive numbers in the above 10 digit number is 1764."),(0,o.kt)("p",null,"Always try to solve the smaller version of the bigger problem, which makes solving bigger problems easier."),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nusing namespace std;\n\nint index, k, string_length, Product, New_product, i, j;\nint number[1000] = { 0 };\nchar string_digit[50];\nFILE * f_read;\n\nint main()\n{\n    Product = 1;\n    index = 0;\n    f_read = fopen("inputpe08.txt", "r");\n    while (fscanf(f_read, "%s", string_digit) == 1)\n    {\n        string_length = strlen(string_digit);\n        for (k = 0; k < string_length; k++)\n        {\n            number[index] = string_digit[k] - 48;\n            index++;\n        }\n    }\n    fclose(f_read);\n    for (i = 0; i <= 995; i++)\n    {\n        New_product = 1;\n        for (j = i; j <= i + 4; j++) New_product = New_product *number[j];\n        if (New_product >= Product) Product = New_product;\n    }\n    printf("%d", Product);\n    return 0;\n}\n')),(0,o.kt)("h3",{id:"sample-output"},"Sample Output"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Output",src:l(5912).Z})))}p.isMDXComponent=!0},5912:function(t,n){n.Z="data:image/png;base64,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"}}]);