"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[418],{"./src/stories/pages/UCSBDates/UCSBDatesIndexPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,ThreeItemsAdminUser:()=>ThreeItemsAdminUser,ThreeItemsOrdinaryUser:()=>ThreeItemsOrdinaryUser,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UCSBDatesIndexPage_stories});__webpack_require__("./node_modules/react/index.js");var currentUserFixtures=__webpack_require__("./src/fixtures/currentUserFixtures.js"),systemInfoFixtures=__webpack_require__("./src/fixtures/systemInfoFixtures.js"),ucsbDatesFixtures=__webpack_require__("./src/fixtures/ucsbDatesFixtures.js"),lib=__webpack_require__("./node_modules/msw/lib/index.js"),useBackend=__webpack_require__("./src/main/utils/useBackend.js"),BasicLayout=__webpack_require__("./src/main/layouts/BasicLayout/BasicLayout.js"),UCSBDatesTable=__webpack_require__("./src/main/components/UCSBDates/UCSBDatesTable.js"),Button=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),utils_currentUser=__webpack_require__("./src/main/utils/currentUser.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UCSBDatesIndexPage(){const currentUser=(0,utils_currentUser.iZ)(),{data:dates,error:_error,status:_status}=(0,useBackend.O)(["/api/ucsbdates/all"],{method:"GET",url:"/api/ucsbdates/all"},[]);return(0,jsx_runtime.jsx)(BasicLayout.A,{children:(0,jsx_runtime.jsxs)("div",{className:"pt-2",children:[(()=>{if((0,utils_currentUser.hf)(currentUser,"ROLE_ADMIN"))return(0,jsx_runtime.jsx)(Button.A,{variant:"primary",href:"/ucsbdates/create",style:{float:"right"},children:"Create UCSBDate"})})(),(0,jsx_runtime.jsx)("h1",{children:"UCSBDates"}),(0,jsx_runtime.jsx)(UCSBDatesTable.A,{dates,currentUser})]})})}UCSBDatesIndexPage.__docgenInfo={description:"",methods:[],displayName:"UCSBDatesIndexPage"};const UCSBDatesIndexPage_stories={title:"pages/UCSBDates/UCSBDatesIndexPage",component:UCSBDatesIndexPage},Template=()=>(0,jsx_runtime.jsx)(UCSBDatesIndexPage,{storybook:!0}),Empty=Template.bind({});Empty.parameters={msw:[lib.rest.get("/api/currentUser",((_req,res,ctx)=>res(ctx.json(currentUserFixtures.x.userOnly)))),lib.rest.get("/api/systemInfo",((_req,res,ctx)=>res(ctx.json(systemInfoFixtures.c.showingNeither)))),lib.rest.get("/api/ucsbdates/all",((_req,res,ctx)=>res(ctx.json([]))))]};const ThreeItemsOrdinaryUser=Template.bind({});ThreeItemsOrdinaryUser.parameters={msw:[lib.rest.get("/api/currentUser",((_req,res,ctx)=>res(ctx.json(currentUserFixtures.x.userOnly)))),lib.rest.get("/api/systemInfo",((_req,res,ctx)=>res(ctx.json(systemInfoFixtures.c.showingNeither)))),lib.rest.get("/api/ucsbdates/all",((_req,res,ctx)=>res(ctx.json(ucsbDatesFixtures.X.threeDates))))]};const ThreeItemsAdminUser=Template.bind({});ThreeItemsAdminUser.parameters={msw:[lib.rest.get("/api/currentUser",((_req,res,ctx)=>res(ctx.json(currentUserFixtures.x.adminUser)))),lib.rest.get("/api/systemInfo",((_req,res,ctx)=>res(ctx.json(systemInfoFixtures.c.showingNeither)))),lib.rest.get("/api/ucsbdates/all",((_req,res,ctx)=>res(ctx.json(ucsbDatesFixtures.X.threeDates)))),lib.rest.delete("/api/ucsbdates",((req,res,ctx)=>(window.alert("DELETE: "+JSON.stringify(req.url)),res(ctx.status(200),ctx.json({})))))]},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"() => <UCSBDatesIndexPage storybook={true} />",...Empty.parameters?.docs?.source}}},ThreeItemsOrdinaryUser.parameters={...ThreeItemsOrdinaryUser.parameters,docs:{...ThreeItemsOrdinaryUser.parameters?.docs,source:{originalSource:"() => <UCSBDatesIndexPage storybook={true} />",...ThreeItemsOrdinaryUser.parameters?.docs?.source}}},ThreeItemsAdminUser.parameters={...ThreeItemsAdminUser.parameters,docs:{...ThreeItemsAdminUser.parameters?.docs,source:{originalSource:"() => <UCSBDatesIndexPage storybook={true} />",...ThreeItemsAdminUser.parameters?.docs?.source}}};const __namedExportsOrder=["Empty","ThreeItemsOrdinaryUser","ThreeItemsAdminUser"]},"./src/fixtures/currentUserFixtures.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>currentUserFixtures,x:()=>apiCurrentUserFixtures});const apiCurrentUserFixtures={adminUser:{user:{id:1,email:"phtcon@ucsb.edu",googleSub:"115856948234298493496",pictureUrl:"https://lh3.googleusercontent.com/-bQynVrzVIrU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmkGuVsELD1ZeV5iDUAUfe6_K-p8w/s96-c/photo.jpg",fullName:"Phill Conrad",givenName:"Phill",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:"ucsb.edu",admin:!0},roles:[{authority:"ROLE_MEMBER"},{authority:"SCOPE_openid"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.profile"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.email"},{authority:"ROLE_USER",attributes:{sub:"115856948234298493496",name:"Phill Conrad",given_name:"Phill",family_name:"Conrad",picture:"https://lh3.googleusercontent.com/a/AATXAJyxrU2gDahCiNe4ampVZlv5176Jo0F0PG3KyYgk=s96-c",email:"phtcon@ucsb.edu",email_verified:!0,locale:"en",hd:"ucsb.edu"}},{authority:"ROLE_ADMIN"}]},userOnly:{user:{id:2,email:"pconrad.cis@gmail.com",googleSub:"102656447703889917227",pictureUrl:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",fullName:"Phillip Conrad",givenName:"Phillip",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:null,admin:!1},roles:[{authority:"SCOPE_openid"},{authority:"ROLE_USER",attributes:{sub:"102656447703889917227",name:"Phillip Conrad",given_name:"Phillip",family_name:"Conrad",picture:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",email:"pconrad.cis@gmail.com",email_verified:!0,locale:"en"}},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.profile"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.email"}]},missingRolesToTestErrorHandling:{user:{id:2,email:"pconrad.cis@gmail.com",googleSub:"102656447703889917227",pictureUrl:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",fullName:"Phillip Conrad",givenName:"Phillip",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:null,admin:!1}}},currentUserFixtures={adminUser:{loggedIn:!0,root:{...apiCurrentUserFixtures.adminUser,rolesList:["ROLE_MEMBER","SCOPE_openid","SCOPE_https://www.googleapis.com/auth/userinfo.profile","SCOPE_https://www.googleapis.com/auth/userinfo.email","ROLE_USER","ROLE_ADMIN"]}},userOnly:{loggedIn:!0,root:{...apiCurrentUserFixtures.userOnly,rolesList:["SCOPE_openid","ROLE_USER","SCOPE_https://www.googleapis.com/auth/userinfo.profile","SCOPE_https://www.googleapis.com/auth/userinfo.email"]}},notLoggedIn:{loggedIn:!1,root:{}}}},"./src/fixtures/systemInfoFixtures.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>systemInfoFixtures});const systemInfoFixtures={showingBoth:{springH2ConsoleEnabled:!0,showSwaggerUILink:!0,oauthLogin:"/oauth2/authorization/google"},showingNeither:{springH2ConsoleEnabled:!1,showSwaggerUILink:!1,oauthLogin:"/oauth2/authorization/google"},oauthLoginUndefined:{springH2ConsoleEnabled:!1,showSwaggerUILink:!1}}},"./src/fixtures/ucsbDatesFixtures.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>ucsbDatesFixtures});const ucsbDatesFixtures={oneDate:{id:1,quarterYYYYQ:"20221",name:"Noon on January 2nd",localDateTime:"2022-01-02T12:00:00"},threeDates:[{id:1,quarterYYYYQ:"20221",name:"Noon on January 2nd",localDateTime:"2022-01-02T12:00:00"},{id:2,quarterYYYYQ:"20222",name:"Noon on April 3rd",localDateTime:"2022-04-03T12:00:00"},{id:3,quarterYYYYQ:"20223",name:"Noon on July 4th",localDateTime:"2022-07-04T12:00:00"}]}},"./src/main/components/Nav/AppNavbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppNavbar});var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-bootstrap/esm/Navbar.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-bootstrap/esm/Nav.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-bootstrap/esm/NavDropdown.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),main_utils_currentUser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/main/utils/currentUser.js"),main_components_Nav_AppNavbarLocalhost__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/main/components/Nav/AppNavbarLocalhost.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AppNavbar(_ref){let{currentUser,systemInfo,doLogout,currentUrl=window.location.href}=_ref;var oauthLogin=(null==systemInfo?void 0:systemInfo.oauthLogin)||"/oauth2/authorization/google";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(currentUrl.startsWith("http://localhost:3000")||currentUrl.startsWith("http://127.0.0.1:3000"))&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(main_components_Nav_AppNavbarLocalhost__WEBPACK_IMPORTED_MODULE_1__.A,{url:currentUrl}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A,{expand:"xl",variant:"dark",bg:"dark",sticky:"top","data-testid":"AppNavbar",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A.Brand,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.N_,to:"/",children:"Example"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A.Toggle,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A,{className:"me-auto",children:[(null==systemInfo?void 0:systemInfo.springH2ConsoleEnabled)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A.Link,{href:"/h2-console",children:"H2Console"})}),(null==systemInfo?void 0:systemInfo.showSwaggerUILink)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A.Link,{href:"/swagger-ui/index.html",children:"Swagger"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A.Collapse,{className:"justify-content-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A,{className:"mr-auto",children:(0,main_utils_currentUser__WEBPACK_IMPORTED_MODULE_0__.hf)(currentUser,"ROLE_ADMIN")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.A,{title:"Admin",id:"appnavbar-admin-dropdown","data-testid":"appnavbar-admin-dropdown",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.A.Item,{href:"/admin/users",children:"Users"})})}),currentUser&&currentUser.loggedIn&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A.Link,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.N_,to:"/restaurants",children:"Restaurants"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A.Link,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.N_,to:"/ucsbdates",children:"UCSB Dates"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A.Link,{as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.N_,to:"/placeholder",children:"Placeholder"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.A,{className:"ml-auto",children:currentUser&&currentUser.loggedIn?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A.Text,{className:"me-3",as:react_router_dom__WEBPACK_IMPORTED_MODULE_5__.N_,to:"/profile",children:["Welcome, ",currentUser.root.user.email]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.A,{onClick:doLogout,children:"Log Out"})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.A,{href:oauthLogin,children:"Log In"})})]})]})})]})}AppNavbar.__docgenInfo={description:"",methods:[],displayName:"AppNavbar",props:{currentUrl:{defaultValue:{value:"window.location.href",computed:!0},required:!1}}}},"./src/main/components/Nav/AppNavbarLocalhost.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppNavbarLocalhost});var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-bootstrap/esm/Navbar.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-bootstrap/esm/Nav.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AppNavbarLocalhost(_ref){let{url}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.A,{expand:"sm",bg:"warning",sticky:"top","data-testid":"AppNavbarLocalhost",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.A,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.A.Brand,{href:"http://localhost:8080",children:"Warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.A.Toggle,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.A.Collapse,{className:"justify-content-between",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A,{className:"mr-auto text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A.Item,{className:"text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Running on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code",{children:url})," with no backend.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"You probably want ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"http://localhost:8080",children:"http://localhost:8080"})," instead."]})})})})]})})})}AppNavbarLocalhost.__docgenInfo={description:"",methods:[],displayName:"AppNavbarLocalhost"}},"./src/main/components/Nav/Footer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Footer});var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Footer(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer",{className:"bg-light pt-3 pt-md-4 pb-4 pb-md-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"This is a sample webapp using React with a Spring Boot backend."})})})}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"}},"./src/main/components/OurTable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OurTable,n:()=>ButtonColumn});__webpack_require__("./node_modules/react/index.js");var react_table__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-table/index.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-bootstrap/esm/Table.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function OurTable(_ref){let{columns,data,testid="testid"}=_ref;const{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=(0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({columns,data},react_table__WEBPACK_IMPORTED_MODULE_1__.useSortBy);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A,{...getTableProps(),striped:!0,bordered:!0,hover:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{children:headerGroups.map((headerGroup=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr",{...headerGroup.getHeaderGroupProps(),children:headerGroup.headers.map((column=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("th",{...column.getHeaderProps(column.getSortByToggleProps()),"data-testid":"".concat(testid,"-header-").concat(column.id),children:[column.render("Header"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{"data-testid":"".concat(testid,"-header-").concat(column.id,"-sort-carets"),children:column.isSorted?column.isSortedDesc?" 🔽":" 🔼":""})]})))})))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody",{...getTableBodyProps(),children:rows.map((row=>(prepareRow(row),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr",{...row.getRowProps(),children:row.cells.map(((cell,_index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{...cell.getCellProps(),"data-testid":"".concat(testid,"-cell-row-").concat(cell.row.index,"-col-").concat(cell.column.id),children:cell.render("Cell")})))}))))})]})}function ButtonColumn(label,variant,callback,testid){return{Header:label,id:label,Cell:_ref2=>{let{cell}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A,{variant,onClick:()=>callback(cell),"data-testid":"".concat(testid,"-cell-row-").concat(cell.row.index,"-col-").concat(cell.column.id,"-button"),children:label})}}}OurTable.__docgenInfo={description:"",methods:[],displayName:"OurTable",props:{testid:{defaultValue:{value:'"testid"',computed:!1},required:!1}}}},"./src/main/components/UCSBDates/UCSBDatesTable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>UCSBDatesTable});__webpack_require__("./node_modules/react/index.js");var OurTable=__webpack_require__("./src/main/components/OurTable.js"),useBackend=__webpack_require__("./src/main/utils/useBackend.js"),react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.js");function onDeleteSuccess(message){console.log(message),(0,react_toastify_esm.oR)(message)}function cellToAxiosParamsDelete(cell){return{url:"/api/ucsbdates",method:"DELETE",params:{id:cell.row.values.id}}}var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),utils_currentUser=__webpack_require__("./src/main/utils/currentUser.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UCSBDatesTable(_ref){let{dates,currentUser}=_ref;const navigate=(0,dist.Zp)(),editCallback=cell=>{navigate("/ucsbdates/edit/".concat(cell.row.values.id))},deleteMutation=(0,useBackend.p)(cellToAxiosParamsDelete,{onSuccess:onDeleteSuccess},["/api/ucsbdates/all"]),deleteCallback=async cell=>{deleteMutation.mutate(cell)},columns=[{Header:"id",accessor:"id"},{Header:"QuarterYYYYQ",accessor:"quarterYYYYQ"},{Header:"Name",accessor:"name"},{Header:"Date",accessor:"localDateTime"}];return(0,utils_currentUser.hf)(currentUser,"ROLE_ADMIN")&&(columns.push((0,OurTable.n)("Edit","primary",editCallback,"UCSBDatesTable")),columns.push((0,OurTable.n)("Delete","danger",deleteCallback,"UCSBDatesTable"))),(0,jsx_runtime.jsx)(OurTable.A,{data:dates,columns,testid:"UCSBDatesTable"})}UCSBDatesTable.__docgenInfo={description:"",methods:[],displayName:"UCSBDatesTable"}},"./src/main/layouts/BasicLayout/BasicLayout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BasicLayout});var Container=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),Footer=__webpack_require__("./src/main/components/Nav/Footer.js"),AppNavbar=__webpack_require__("./src/main/components/Nav/AppNavbar.js"),utils_currentUser=__webpack_require__("./src/main/utils/currentUser.js"),es=__webpack_require__("./node_modules/react-query/es/index.js"),axios=__webpack_require__("./node_modules/axios/index.js"),axios_default=__webpack_require__.n(axios);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function BasicLayout(_ref){let{children}=_ref;const{data:currentUser}=(0,utils_currentUser.iZ)(),{data:systemInfo}=function useSystemInfo(){return(0,es.useQuery)("systemInfo",(async()=>{try{return(await axios_default().get("/api/systemInfo")).data}catch(e){return console.error("Error invoking axios.get: ",e),{springH2ConsoleEnabled:!1,showSwaggerUILink:!1}}}),{initialData:{initialData:!0,springH2ConsoleEnabled:!1,showSwaggerUILink:!1}})}(),doLogout=(0,utils_currentUser.Wn)().mutate;return(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[(0,jsx_runtime.jsx)(AppNavbar.A,{currentUser,systemInfo,doLogout}),(0,jsx_runtime.jsx)(Container.A,{expand:"xl",className:"pt-4 flex-grow-1",children}),(0,jsx_runtime.jsx)(Footer.A,{})]})}BasicLayout.__docgenInfo={description:"",methods:[],displayName:"BasicLayout"}},"./src/main/utils/currentUser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wn:()=>useLogout,hf:()=>hasRole,iZ:()=>useCurrentUser});var react_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-query/es/index.js"),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/axios/index.js"),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js");function useCurrentUser(){let rolesList=["ERROR_GETTING_ROLES"];return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("current user",(async()=>{try{const response=await axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/currentUser");try{rolesList=response.data.roles.map((r=>r.authority))}catch(e){console.error("Error getting roles: ",e)}return response.data={...response.data,rolesList},{loggedIn:!0,root:response.data}}catch(e){return console.error("Error invoking axios.get: ",e),{loggedIn:!1,root:null}}}),{initialData:{loggedIn:!1,root:null,initialData:!0}})}function useLogout(){const queryClient=(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)(),navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Zp)();return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)((async()=>{await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/logout"),await queryClient.resetQueries("current user",{exact:!0}),navigate("/")}))}function hasRole(currentUser,role){var _currentUser$root,_currentUser$root$rol;return null!=currentUser&&("data"in currentUser&&"root"in currentUser.data&&null!=currentUser.data.root&&"rolesList"in currentUser.data.root?currentUser.data.root.rolesList.includes(role):null===(_currentUser$root=currentUser.root)||void 0===_currentUser$root||null===(_currentUser$root$rol=_currentUser$root.rolesList)||void 0===_currentUser$root$rol?void 0:_currentUser$root$rol.includes(role))}},"./src/main/utils/useBackend.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useBackend,p:()=>useBackendMutation});var react_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-query/es/index.js"),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/axios/index.js"),axios__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__),react_toastify__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.js");function useBackend(queryKey,axiosParameters,initialData){return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(queryKey,(async()=>{try{return(await axios__WEBPACK_IMPORTED_MODULE_1___default()(axiosParameters)).data}catch(e){const errorMessage="Error communicating with backend via ".concat(axiosParameters.method," on ").concat(axiosParameters.url);throw(0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.oR)(errorMessage),console.error(errorMessage,e),e}}),{initialData})}const wrappedParams=async params=>{try{return await(await axios__WEBPACK_IMPORTED_MODULE_1___default()(params)).data}catch(rejectedValue){throw error=rejectedValue,console.error("Axios Error:",error),(0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.oR)("Axios Error: ".concat(error)),rejectedValue}var error};function useBackendMutation(objectToAxiosParams,useMutationParams){let queryKey=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const queryClient=(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)((object=>wrappedParams(objectToAxiosParams(object))),{onError:data=>{(0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.oR)("".concat(data))},onSettled:()=>{null!==queryKey&&queryClient.invalidateQueries(queryKey)},retry:!1,...useMutationParams})}}}]);