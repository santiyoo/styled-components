import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories/Categories';

const data = [
  {
    category: 'Subcontractors',
    color: 'purple',
    amount: null
  },
  {
    category: 'Training',
    color: 'lightblue',
    amount: 0  
  },
  {
    category: 'Pending Status',
    color: 'red',
    amount: 6
  },
  {
    category: 'Overassigned',
    color: 'yellow',
    amount: null
  },
  {
    category: 'Low Allocation',
    color: 'pink',
    amount: null
  },
]

function App() {
  return (
    <div className="App">
      <Categories data={data}/>
    </div>
  );
}

export default App;
