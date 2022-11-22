function Home(){
   return (
      <Card 
         bgcolor = "success"
         txtcolor = "white"
         header = "Bad Bank"
         title = "Welcome to the Piggy Bank"
         text = "Feed the pig and save some bucks"
         body = {(<img src="bank.png" className="img-fluid" alt="Responsive Image" />)}
      />
   );
}
