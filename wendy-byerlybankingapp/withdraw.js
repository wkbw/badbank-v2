function Withdraw(){
  const [show, setShow]       = React.useState(true);
  const [status, setStatus]   = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const ctx                   = React.useContext(UserContext);
  

let currentUser = 0;
function currentUserId(userId) {
    currentUser = userId;
    return currentUser;
};

  let users = [...ctx.users];
 
  let balance = users[currentUser].balance;
  let username = users[currentUser].name;
  console.log(`Balance for ${username} is ${balance}`);

  function validateAmount(field, label){
    if (field <= 0)  {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }
  function validateNumber(field, label){
    if (Number.isNaN(field)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function validateBalance(field, label){
    if (balance < field)  {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }
  
  
  function handleWithdraw(){

    balance = balance - Number(withdraw);
    console.log(`Withdraw amount: ${withdraw}`);
    console.log(`New balance: ${balance}`);

    if (!validateAmount(withdraw, 'Withdraw Amount Must Be More Than 0')) return;
    if (!validateNumber(withdraw, 'Must a Valid Number')) return;
    if (!validateBalance(withdraw, 'Insufficient Funds')) return;
    if (username === users[currentUser].name) {
    let balance = users[currentUser].balance -= Number(withdraw);
    setShow(false);
    alert('Withdrawal Successful');
    }
 }
  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

return (
  <Card
    bgcolor="danger"
    header="Make a Withdrawal"
    status={status}
    balance={balance}
    withdraw={withdraw}
    body={show ? (
      <>
        <h5>Welcome, {username}!</h5>
        <div>&nbsp;&nbsp;&nbsp;Balance: ${balance}</div>
          <hr/>
          <div className="form-label">Withdraw Amount</div>
          <input type="number" className="form-control" id="withdraw" placeholder="$" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>

          <button type="submit" disabled={!withdraw} className="btn btn-dark" onClick={handleWithdraw}>Make a Withdrawal</button>
          </>
      ):(
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Back to Withdraw</button>
        </>
      )}
    />
  )
}
