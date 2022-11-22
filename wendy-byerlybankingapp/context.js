const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

let currentUser = 0;

function getCurrentUser(userId) {
  currentUser = userId-1;
  return currentUser;
};
  

function Card(props){
  function classes(){
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card' + bg + txt;
  }

  
     return (
        <div className={classes()} style={{width: "18rem"}}>
           <div className="card-header" style={{color:'darkgray', backgroundColor:'black', height: '45px'}}><h5>{props.header}</h5></div>
              <div className="card-body">
                 {props.title && (<h6 className="card-title">{props.title}</h6>)}
                 {props.text && (<p className="card-text">{props.text}</p>)}
                 {props.body}
                 {props.status && (<div id="createStatus" style={{color:'yellow', backgroundColor:'red'}}>{props.status}</div>)}
  
              </div>
        </div>
     );
  }

