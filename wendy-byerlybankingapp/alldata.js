function AllData(){
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];
  console.log(JSON.stringify(users));
  
  function userId(i) {
    return (`Account Number: BB-${i+1}`);
  }

  function handleUser(user) {
  
    return [user.name, user.email, user.password, user.balance];
  }
  
  return (
  <>
    {users.map((user, i) => (
      <Card
      index = {i}
      key = {i} 
      user={handleUser}
      bgcolor="info"
      txtcolor="black"
      header={
        <>
          <div>User: {user.name}</div>
        </>
      }

      body={
        <>
        <table>
          <tr style={{height: '30px'}}>
            <td>Email:</td>
            <td>&nbsp;{user.email}</td>
          </tr>
          <tr style={{height: '30px'}}>
            <td className="form-label">Password:</td>
            <td>&nbsp;{user.password}</td>
          </tr>
          <tr style={{height: '30px'}}>
            <td className="form-label">Balance:</td>
            <td>&nbsp;${user.balance}</td>
          </tr>
          <tr style={{height: '30px'}}>
            <td className="form-label">Account:</td>
            <td>&nbsp;{userId(i)}</td>
          </tr>
        </table>
        </>
        }
      />))}
    </>
  )
}

