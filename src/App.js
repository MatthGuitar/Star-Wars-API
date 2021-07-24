import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {Container, Dimmer, Loader } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters';
import Planets from './components/Planets';

function App() {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people');
      let data = await res.json();
      setPeople(data.results)
      setLoading(false)
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets');
      let data = await res.json();
      setPlanets(data.results)
      setLoading(false)
    }

    fetchPeople();
    fetchPlanets();
  }, [])
  return (
    <>
      <Router>
      <Navbar />

        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/characters'>
            <Characters data={people}/>
          </Route>
          <Route exact path='/planets'>
            <Planets data={planets}/>
          </Route>
        </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
