function Deposit(){
  const [show, setShow]       = React.useState(true);
  const [status, setStatus]   = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);
  

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
  
  function handleDeposit() {

    balance = balance + Number(deposit);
    console.log(`Deposit amount: ${deposit}`);
    console.log(`New balance: ${balance}`);
    if (!validateAmount(deposit, 'Deposit Amount Must Be More Than 0')) return;
    if (!validateNumber(deposit, 'Must a Valid Number')) return;
    if (username === users[currentUser].name) {
    let balance = users[currentUser].balance += Number(deposit);
  //  ctx.users.push({name: users.name, deposit: users.deposit});
    setShow(false);
    alert('Deposit Successful');
    }
}
  function clearForm(){
    setDeposit(''); 
    setShow(true);
  }
  
return (
  <Card
    bgcolor="warning"
    header="Make a Deposit"
    txtcolor="black"
    status={status}
    balance={balance}
    deposit={deposit}
    body={show ? (
      <>
          <h5>Welcome, {username}!</h5>
          <div>&nbsp;&nbsp;&nbsp;Balance: ${balance}</div>
          <hr/>
          <div className="form-label">Deposit Amount</div>
          <input type="number" className="form-control" id="deposit" placeholder="$" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
          <button type="submit" disabled={!deposit} className="btn btn-dark" onClick={handleDeposit}>Make Deposit</button>
          </>
      ):(
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
        </>
      )}
    />
  )
}
      