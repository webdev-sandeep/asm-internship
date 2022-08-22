import { useEffect, useState } from "react";
function App() {
  const [Ids, setIds] = useState(JSON.parse(localStorage.getItem("Ids")) || []);
  useEffect(() => {
    localStorage.setItem("Ids", JSON.stringify(Ids));
  }, [Ids]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [added, setAdded] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Ids.length) {
      setIds([input]);
      setAdded("ID added Successfully!");
      setTimeout(() => {
        setAdded(null);
      }, 2000);
    } else {
      console.log(Ids);
      if (Ids.includes(input)) {
        setError("ID Already Exist!");
        setTimeout(() => {
          setError(null);
        }, 2000);
      } else {
        setIds([...Ids, input]);
        setAdded("ID added Successfully!");
        setTimeout(() => {
          setAdded(null);
        }, 2000);
      }
    }
    setInput("");
  };
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            ASM Internship Assignment
          </span>
        </div>
      </nav>
      <section className="container-fluid">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {added && (
          <div className="alert alert-success" role="alert">
            {added}
          </div>
        )}

        <form className="container m-5">
          <div className="mb-3 col-3">
            <label htmlFor="exampleId" className="form-label">
              Enter your ID
            </label>
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="form-text">The ID must be Unique.</div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add ID
          </button>
        </form>
        <section className="container m-5">
          <h3 className="display-5">List Of Unique IDs</h3>
          <ol className="list-group list-group-numbered">
            {Ids &&
              Ids.map((id) => {
                return (
                  <li className="list-group-item" key={id}>
                    {id}
                  </li>
                );
              })}
          </ol>
        </section>
      </section>
    </div>
  );
}

export default App;
