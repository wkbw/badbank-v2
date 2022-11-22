function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const [errors, setError]      = React.useState('');
  const ctx = React.useContext(UserContext);
  let balance = ctx.users[index].balance;
  console.log(balance);

  function validate(field, label){
      setError('');
      if (!field) {
        setStatus('Error: ' + label);
        alert('Please enter withdrawal amount');
        setTimeout(() => setStatus(''),2000);
        return false;
      }
      console.log(field);
     if (Number.isNaN(Number(field))) {
      alert('Not a number. Please enter a valid number');
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    else if (balance < field) {
      alert('Insufficient funds');
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
      return true;
  }
    function handleWithdraw(){
    if (!validate(withdraw, 'withdraw'))    return;
    ctx.users[index].balance = balance - withdraw;
    setStatus('Withdrawal was processed');
    setTimeout(() => setStatus(''),3000);
    console.log(balance);
    setShow(false);
  }    

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Balance<br/>
              ${balance}<br/>
              Withdraw Amount<br/>
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              <input type="text" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/>
              </div>
              <div style={{color:'red'}}>{errors}</div><br/>
              <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={!withdraw}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}
