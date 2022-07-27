import './App.css';
 
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50
  const siteLink = 'http://www.google.com';
  
  return (
    <div className="App">
      <div className="content">
        <h1> {title} </h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"Geen is the real deal tbh"}</p>
        <p>{title}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()}</p>
        <p>{"Hello This is geen"}</p>
        <a href={siteLink}> Google Link</a>
        

      </div>
    </div>
  );
}

export default App;
