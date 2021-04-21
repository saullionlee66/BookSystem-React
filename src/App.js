// import './App.css';
import Books from './Components/Books'
import {BookProvider} from './Components/BookContext'
import AddBook from './Components/AddBook';
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateBook from './Components/UpdateBook'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import DeleteBook from './Components/DeleteBook'
function App() {
  return (
    <Router>
        <BookProvider>
          <NavBar />
          <Books />
          <Container>
            <div className="App">
              <Switch>
                <Route path='/' exact>
                  <AddBook />
                </Route>
                <Route path="/update">
                  <UpdateBook />
                </Route>
                <Route path="/delete">
                  <DeleteBook />
                </Route>
              </Switch>
            </div>
          </Container>
        </BookProvider>
    </Router>


  );
}

export default App;
