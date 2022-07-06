import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ContextComponent from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /* Componente propio Greeting.jsx */ }
        { /* <Greeting name="Augusto"> </Greeting> */ }
        { /* Componente de ejemplo funcional */}
        { /* <GreetingF name='Augusto'></GreetingF> */ }

        { /* Componente de listado de tareas */ }
        <TaskListComponent></TaskListComponent>
        { /* Ejemplos Hooks */ }
        <Ejemplo1></Ejemplo1>
        <Ejemplo2></Ejemplo2>
        <ContextComponent></ContextComponent>
        <Ejemplo4 nombre='Augusto'>
        { /* Todo lo que hay aqui dentro será tratado como props.children */ }
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
