import React from 'react';
import { MyFirstComponent } from './components/myfirstcomponent/MyFirstComponent'
import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
function App() {
  return (
    <Routing>
      <h1>React Tutorial!</h1>
      < MyFirstComponent name="Andreas" age=" 37" />
    </Routing>

  );
}

export default App;
