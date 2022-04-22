import data from "./data.json"
import './App.css';
console.log(data)
function App() {
  return (
    <div className="App">
      {data.map((job,index)=>{
        return (
          <div key={index}>
            <div>
              <img src={job.logo} alt="" />
            </div>
            <div>
              <p>
                {job.company}
                {job.new ? <button>NEW</button> : ""}
                {job.featured ? <button>FEATURED</button> : ""}
              </p>
              {job.position}
              <p>
                {job.postedAt}. {job.location}. {job.contract}
              </p>
            </div>
            <div>
              <button>{job.role} </button>
              <button>{job.level}</button>

              {job.languages.map((language, index) => (
                <button key={index}>{language}</button>
              ))}
            </div>
          </div>
        );})}
   
        
    </div>
  );
}

export default App;
