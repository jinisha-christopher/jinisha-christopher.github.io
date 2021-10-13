"use strict";(self.webpackChunkjini_venishjoe_net=self.webpackChunkjini_venishjoe_net||[]).push([[979],{849:function(t,l,n){n.r(l),n.d(l,{frontMatter:function(){return i},contentTitle:function(){return A},metadata:function(){return a},toc:function(){return d},default:function(){return m}});var e=n(7462),u=n(3366),o=(n(7294),n(3905)),r=["components"],i={sidebar_position:3,slug:"solution-01"},A="Project Euler Solution 1",a={unversionedId:"project-euler/project-euler-01",id:"project-euler/project-euler-01",isDocsHomePage:!1,title:"Project Euler Solution 1",description:"Problem Statement",source:"@site/docs/project-euler/project-euler-01.md",sourceDirName:"project-euler",slug:"/project-euler/solution-01",permalink:"/project-euler/solution-01",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"solution-01"},sidebar:"tutorialSidebar",previous:{title:"Jini's Solutions to Project Euler",permalink:"/"},next:{title:"Project Euler Solution 2",permalink:"/project-euler/solution-02"}},d=[{value:"Problem Statement",id:"problem-statement",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Sample Output",id:"sample-output",children:[]}],s={toc:d};function m(t){var l=t.components,i=(0,u.Z)(t,r);return(0,o.kt)("wrapper",(0,e.Z)({},s,i,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-euler-solution-1"},"Project Euler Solution 1"),(0,o.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Multiples of 3 or 5"))),(0,o.kt)("p",null,"If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23."),(0,o.kt)("p",null,"Find the sum of all the multiples of 3 or 5 below 1000."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"This problem calls for the sum of all natural numbers that are multiples of 3 or 5 below 1000. The smallest number which is a multiple of 3 or 5 is 3. So my starting number is 3. The terminating condition is also given in the problem as below 1000. Consider the following things while programming"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check whether the number is a multiple of 3.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check if the number is multiple of 5 and not a multiple of 3.(This step is to avoid adding duplicate numbers)."))),(0,o.kt)("p",null,"Finding the sum of all multiples of 3 or 5 below 20."),(0,o.kt)("p",null,"Initially sum = 0"),(0,o.kt)("p",null,"3 is the smallest number that is a multiple of 3 or 5."),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Number"),(0,o.kt)("td",null,"3"),(0,o.kt)("td",null,"4"),(0,o.kt)("td",null,"4"),(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"6"),(0,o.kt)("td",null,"7"),(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,"9"),(0,o.kt)("td",null,"10"),(0,o.kt)("td",null,"11"),(0,o.kt)("td",null,"12"),(0,o.kt)("td",null,"13"),(0,o.kt)("td",null,"14"),(0,o.kt)("td",null,"15"),(0,o.kt)("td",null,"16"),(0,o.kt)("td",null,"17"),(0,o.kt)("td",null,"18")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"3"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"5"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",{bgcolor:"#92d050"},"Y"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0"),(0,o.kt)("td",null,"\xa0")))),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Shaded box represents that the number is divisible by either 3 or 5 or both."))),(0,o.kt)("p",null,"15 is divisible by 3 and 5, so it is sufficient to check and add only once."),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n\nint main()\n{\n    int sum, number;\n    sum = 0;\n    for (number = 3; number < 1000; number++)\n    {\n        if ((number % 3) == 0)\n            sum = sum + number;\n        else if ((number % 5) == 0)\n            sum = sum + number;\n    }\n    printf("sum :%d", sum);\n    return 0;\n\n}\n')),(0,o.kt)("h3",{id:"sample-output"},"Sample Output"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Output",src:n(1708).Z})))}m.isMDXComponent=!0},1708:function(t,l){l.Z="data:image/png;base64,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"}}]);