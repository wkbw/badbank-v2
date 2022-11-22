function Spa(){
   return(
      <HashRouter>
         <NavBar/>
         <UserContext.Provider value={{users:[{name: 'Oliver Zeke', email: 'ollie@cheewy.com', password: 'iluvfood', balance: 100}]}}>
            <Route path="/" exact         component={Home}           />
            <Route path="/createaccount/" component={CreateAccount}  />
            <Route path="/deposit/"       component={Deposit}        />
            <Route path="/withdraw/"     component={Withdraw}      />
            <Route path="/alldata/"       component={AllData}        />
            {/* <Route path="/login/"         component={Login}         /> 
            <Route path="/balance/"       component={Balance}        />*/}
         </UserContext.Provider>
      </HashRouter>
   );
}
ReactDOM.render(
   <Spa/>,
   document.getElementById('root')
)
