(this["webpackJsonpstudy-buddy"]=this["webpackJsonpstudy-buddy"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0),r=n.n(o),u=n(11),s=n.n(u),a=(n(26),n.p+"static/media/logo.6ce24c58.svg"),c=(n(27),n(20)),d=n(12),g=n(9),l=n(3),p=n(13),b=n.n(p),f=n(2),h=n(8),j=n.n(h),y=n(17),m=function(){var e=Object(y.a)(j.a.mark((function e(t){var n,i,o,r,u,s,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.subjectId,i=t.examSpecId,o=t.topicIds,(r=new Headers).append("x-api-key","ia3NrJsgwehrf4WaYFJk62pWA8wUL0w5AlS2RRob"),r.append("Accept","application/json"),r.append("Content-Type","application/json"),u={subjectId:n,examSpecId:i,topicIds:o,returnResults:!0,questions:[]},console.log("inputBody:",u),s={method:"POST",headers:r,redirect:"follow",body:JSON.stringify(u)},e.next=10,fetch("https://cors-anywhere.herokuapp.com/https://bitesize.test.api.bbci.co.uk/quizzes",s);case 10:return a=e.sent,e.next=13,a.json();case 13:return c=e.sent,e.abrupt("return",c.nextQuestion);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=new AudioContext,n=new Headers;n.append("x-api-key","iS1m7L8tLU6ch6Bv42jta2UrPhmmzUl835Cnj5YU"),n.append("Accept","audio/mpeg"),n.append("Content-Type","application/json"),fetch("https://cors-anywhere.herokuapp.com/https://7xbnbo3f67.execute-api.eu-west-1.amazonaws.com/test/text",{method:"POST",headers:n,redirect:"follow",body:'{"text":"'+e+'"}'}).then((function(e){return e.arrayBuffer()})).then((function(e){return t.decodeAudioData(e)})).then((function(e){!function(e){var n=t.createBufferSource();n.buffer=e,n.connect(t.destination),n.start()}(e)})).catch((function(e){return console.log("error",e)}))},v=n(19),O=n.n(v),Q=n(18),z=n.n(Q);function w(){var e=Object(l.a)(["\n  animation: gZmgDU 0.3s ease forwards;\n  cursor: pointer;\n  display: inline-block;\n  margin: 2px;\n  transform: scale(0);\n"]);return w=function(){return e},e}function A(){var e=Object(l.a)(["\n  margin: 2px 0 12px 0;\n  padding: 0 6px;\n  text-align: center;\n"]);return A=function(){return e},e}function C(){var e=Object(l.a)(["\n  background: #DD6713;  \n  border: 0;\n  border-radius: 22px;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);\n  color: #fff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 12px;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(l.a)(["\n  color: #DD6713;\n  text-align: center;\n  display: block;\n  padding: 12px;\n  padding-top: 0;\n  text-decoration: underline;\n"]);return S=function(){return e},e}function G(){var e=Object(l.a)(["\n  color: #DD6713;\n  text-align: center;\n  padding: 12px;\n  padding-bottom: 0;\n"]);return G=function(){return e},e}function k(){var e=Object(l.a)(["\n  color: #bbb;\n  text-align: center;\n  padding: 12px;\n  padding-bottom: 0;\n"]);return k=function(){return e},e}function I(){var e=Object(l.a)(['\n  width: 100%;\n  height: 400px;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: #f00;\n  background-image: url("https://media2.giphy.com/media/3oz8xPJ7Uwbbee7E9a/giphy.gif");\n']);return I=function(){return e},e}function D(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  display: ",";\n"]);return D=function(){return e},e}var T,E="",N="",R="",F="",W=0,q=0,Y=0,H=[],L="",B=!1,M=!1,P=f.default.iframe(D(),(function(e){return e.hidden?"none":"block"})),U=f.default.div(I()),J=f.default.h2(k()),V=f.default.h3(G()),Z=f.default.a(S()),_=f.default.button(C()),K=f.default.ul(A()),X=f.default.li(w()),$=function(e){var t=e.triggerNextStep,n=e.previousStep,i=["z9ddmp3","zs6hvcw","zpm6fg8"][n.value-1],r=["z2synbk","z8xtmnb","zyvnxfr"][n.value-1],u=["z22btv4","z34kgdm","zcp6qhv"][n.value-1];return Object(o.useEffect)((function(){m({subjectId:i,examSpecId:r,topicIds:[u]}).then((function(e){console.log(e.studyGuideId),M="https://www.bbc.co.uk/bitesize/guides/".concat(e.studyGuideId,"/revision/1"),T(),t({trigger:"GuideDoQuiz"})}))}),[]),null},ee=function(e){var t=e.triggerNextStep;return Object(o.useEffect)((function(){m({subjectId:N,examSpecId:R,topicIds:[F]}).then((function(e){console.log(e.studyGuideId),M="https://www.bbc.co.uk/bitesize/guides/".concat(e.studyGuideId,"/revision/1"),T(),t({trigger:"QuizReady"})}))}),[]),null},te=function(e){var t=e.previousStep;return E=t.label,N=["z9ddmp3","zs6hvcw","zpm6fg8"][t.value-1],R=["z2synbk","z8xtmnb","zyvnxfr"][t.value-1],F=["z22btv4","z34kgdm","zcp6qhv"][t.value-1],null},ne=function(e){var t=e.previousStep;return Object(o.useEffect)((function(){W=t.value,q=0,Y=0,0,H=[]}),[]),null},ie=function(){return"Alright, ".concat(W," questions on ").concat(E,", got it. I've put the study guide for this quiz on your screen. Ready?")},oe=function(){return Object(o.useEffect)((function(){q=0,Y=0,0,H=[]}),[]),"Alright, ".concat(W," questions on ").concat(E,", got it. I've put the study guide for this quiz on your screen. Ready?")},re=function(e){var t,n=e.triggerNextStep,r=Object(o.useState)(),u=Object(g.a)(r,2),s=u[0],a=u[1];return Object(o.useEffect)((function(){W!==q&&m({subjectId:N,examSpecId:R,topicIds:[F]}).then((function(e){a(e)})),q>=W&&n({trigger:"QuizEnd"})}),[]),Object(o.useEffect)((function(){if(s&&W!==q){L=s.options.find((function(e){return e.isCorrect})).text;var e=["A","B","C"];t="".concat(s.text,". ").concat(s.options.reduce((function(t,n,i){return t+". ".concat(0===i?"Is it":""," ").concat(i===s.options.length-1?"Or":""," ").concat(e[i],". ").concat(n.text)}),""))}}),[s]),console.log("Progress: ",W,q),q>=W?null:s?Object(i.jsxs)("div",{children:[Object(i.jsx)(V,{children:s.text}),Object(i.jsx)(Z,{onClick:function(){return x(t)},children:"Read this question to me"}),Object(i.jsx)(K,{children:s.options.map((function(e){return Object(i.jsx)(X,{children:Object(i.jsx)(_,{onClick:function(){return n({value:{studyGuideId:s.studyGuideId,topicId:s.topicId,id:s.id,isCorrect:e.isCorrect,timeSpent:4e3},trigger:e.isCorrect?"QuizQuestionCorrect":"QuizQuestionIncorrect"})},children:e.text})})}))})]}):Object(i.jsx)(J,{children:"..."})},ue=function(e){var t=e.triggerNextStep,n=e.previousStep;return Object(o.useEffect)((function(){console.log("CORRECT EFFECT CALLED",q),q+=1,Y+=1,console.log("CORRECT EFFECT CALLED",q),H.push(n.value),t({trigger:"QuizQuestion"})}),[]),"Spot on!"},se=function(e){var t=e.triggerNextStep,n=e.previousStep;return Object(o.useEffect)((function(){console.log("INCORRECT EFFECT CALLED",q),q+=1,1,console.log("INCORRECT EFFECT CALLED",q),H.push(n.value),t({trigger:"QuizQuestion"})}),[]),"Not quite, the correct answer is ".concat(L)},ae=function(){return"And we're done! You got ".concat(Y," out of ").concat(q," answers right!")},ce=function(){return Object(o.useEffect)((function(){B=!0,T(),setTimeout((function(){B=!1,T()}),5e3)}),[]),Object(i.jsx)(U,{})},de={width:"400px",height:"600px",floating:!0,headerTitle:"Study Buddy"},ge={background:"white",fontFamily:"Arial, Helvetica, sans-serif",headerBgColor:"#DD6713",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#DD6713",botFontColor:"#fff",userBubbleColor:"#f8f8f8",userFontColor:"#000"},le=[{id:"GreetingNameQuestion",message:"Welcome to the Bitesize chat bot! What is your name?",trigger:"GreetingNameResponse"},{id:"GreetingNameResponse",user:!0,trigger:"WhatToDoQuestion"},{id:"WhatToDoQuestion",message:"Hi {previousValue}, nice to meet you! What d'you want to do today?",trigger:"WhatToDoQuestionOptions"},{id:"WhatToDoNowQuestion",message:"What d'you want to do now?",trigger:"WhatToDoQuestionOptions"},{id:"WhatToDoQuestionOptions",options:[{value:1,label:"Find a study guide",trigger:"GuideWhatAreYouStudying"},{value:2,label:"Do a quiz",trigger:"QuizWhatAreYouStudying"}]}].concat([{id:"GuideWhatAreYouStudying",message:"Got it, what are you studying?",trigger:"GuideWhatAreYouStudyingOptions"},{id:"GuideWhatAreYouStudyingOptions",options:[{value:1,label:"Biology",trigger:"GuideFound"},{value:2,label:"Chemistry",trigger:"GuideFound"},{value:3,label:"Physics",trigger:"GuideFound"}]},{id:"GuideFound",component:Object(i.jsx)($,{}),waitAction:!0},{id:"GuideDoQuiz",message:"Great, here's your study guide, d'you want to do a couple of practice questions to help you revise?",trigger:"GuideDoQuizOptions"},{id:"GuideDoQuizOptions",options:[{value:1,label:"Yes",trigger:"GuideQuestionsYesAnswer"},{value:2,label:"No",trigger:"GuideQuestionsNoAnswer"}]},{id:"GuideQuestionsNoAnswer",message:"No worries, let me know if you need anything else!",delay:3e3,trigger:"WhatToDoNowQuestion"},{id:"GuideQuestionsYesAnswer",message:"Alright, well do 5 quick questions to get you warmed up, ready?",trigger:"GuideQuestionsYesAnswerOptions"},{id:"GuideQuestionsYesAnswerOptions",options:[{value:1,label:"Lets go!",trigger:"QuizQuestion"}]}],[{id:"QuizWhatAreYouStudying",message:"Got it, what are you studying?",trigger:"QuizWhatAreYouStudyingOptions"},{id:"QuizWhatAreYouStudyingOptions",options:[{value:1,label:"Biology",trigger:"QuizStoreTopic"},{value:2,label:"Chemistry",trigger:"QuizStoreTopic"},{value:3,label:"Physics",trigger:"QuizStoreTopic"}]},{id:"QuizStoreTopic",component:Object(i.jsx)(te,{}),trigger:"QuizHowManyQuestions"},{id:"QuizHowManyQuestions",message:"Perfect, how many questions should we do? (Hint: type your answer below)",trigger:"QuizHowManyQuestionsResponse"},{id:"QuizHowManyQuestionsResponse",user:!0,trigger:"QuizStoreQuestions",validator:function(e){return!isNaN(e)||"Answer should be a number"}},{id:"QuizStoreQuestions",component:Object(i.jsx)(ne,{}),trigger:"GuideFoundQuiz"},{id:"GuideFoundQuiz",component:Object(i.jsx)(ee,{}),waitAction:!0},{id:"QuizReady",component:Object(i.jsx)(ie,{}),asMessage:!0,trigger:"QuizReadyOptions"},{id:"QuizReadyAgain",component:Object(i.jsx)(oe,{}),asMessage:!0,trigger:"QuizReadyOptions"},{id:"QuizReadyOptions",options:[{value:1,label:"As I'll ever be!",trigger:"QuizQuestion"}]},{id:"QuizQuestion",component:Object(i.jsx)(re,{}),waitAction:!0},{id:"NextQuestion",message:"Next question:",delay:5e3,trigger:"QuizQuestion"},{id:"QuizQuestionCorrect",component:Object(i.jsx)(ue,{}),waitAction:!0,asMessage:!0,trigger:"NextQuestion"},{id:"QuizQuestionIncorrect",component:Object(i.jsx)(se,{}),waitAction:!0,asMessage:!0,trigger:"NextQuestion"},{id:"QuizEnd",component:Object(i.jsx)(ae,{}),asMessage:!0,trigger:"QuizCelebrate"},{id:"QuizCelebrate",options:[{value:1,label:"Celebrate",trigger:"QuizCelebratePlay"}]},{id:"QuizCelebratePlay",component:Object(i.jsx)(ce,{}),trigger:"HowDidItGo"},{id:"HowDidItGo",message:"How d'you feel that quiz went?",trigger:"HowDidItGoOptions"},{id:"HowDidItGoOptions",options:[{value:1,label:"Great",trigger:"Why"},{value:2,label:"Meh",trigger:"Why"},{value:3,label:"Terribly",trigger:"Why"}]},{id:"Why",message:"Mind telling us a bit more?",trigger:"WhyResponse"},{id:"WhyResponse",user:!0,trigger:"FeedbackThanks"},{id:"FeedbackThanks",message:"Thanks for sharing!",trigger:"QuizGoAgain"},{id:"QuizGoAgain",message:"Ready to to again?",trigger:"QuizGoAgainOptions"},{id:"QuizGoAgainOptions",options:[{value:1,label:"Hit me with some questions",trigger:"QuizReadyAgain"},{value:2,label:"Take me home",trigger:"WhatToDoNowQuestion"}]}]),pe=function(e){Object(d.a)(e);var t=O()(),n=t.width,o=t.height;console.log("RERENDER MAIN");var u=r.a.useState(),s=Object(g.a)(u,2)[1];return T=r.a.useCallback((function(){return s({})}),[]),Object(i.jsx)(f.ThemeProvider,{theme:ge,children:Object(i.jsxs)(i.Fragment,{children:[M&&Object(i.jsx)(P,{src:M}),B&&Object(i.jsx)(z.a,{width:n,height:o}),Object(i.jsx)(b.a,Object(c.a)({steps:le},de))]})})};var be=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:["Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(i.jsx)(pe,{})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),i(e),o(e),r(e),u(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(be,{})}),document.getElementById("root")),fe()}},[[38,1,2]]]);
//# sourceMappingURL=main.c2bc8e83.chunk.js.map