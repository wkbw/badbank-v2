function CreateAccount() {
  const [show, setShow]          = React.useState(true);
  const [status, setStatus]      = React.useState('');
  const [name, setName]          = React.useState('');
  const [email, setEmail]        = React.useState('');
  const [password, setPassword]  = React.useState('');
  const ctx                      = React.useContext(UserContext);
  let users = [...ctx.users];


  function validate(field, label){
    if (!field) { // this means if the field is empty 
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
      }
    return true;
    }
    function validatePassword(field, label){
      if (field.trim().length < 8) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    return true;
    }

  function handleCreate(users){
    console.log(name,email,password);
    if (!validate(name,     'Name cannot be blank'))     return;
    if (!validate(email,    'Email cannot be blank'))    return;
    if (!validate(password, 'Password is required')) return;
    if (!validatePassword(password, 'Password must be least 8 characters')) return;
    
    ctx.users.push({id: users.length+1, name: name, email: email, password: password, balance:100});
    setShow(false);
    alert('Successfully Created Account');

 }

 function clearForm(){  
  setName('');
  setEmail('');
  setPassword('');
  setStatus(''); 
  setShow(true);
}

return (
  <Card
    bgcolor="primary"
    header="Create an Account"
    status={status}
    body={show ? (
      <>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
          <button type="submit" disabled={!name || !email || !password} className="btn btn-dark" onClick={handleCreate}>Create Account</button>
          </>
      ):(
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>

          {/* <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button> */}

          </>
      )}
    />
  )
}
