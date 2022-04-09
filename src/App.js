import { useState, useEffect } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
////////////////////////
// FUNCTION COMPONENT //
////////////////////////
const App = ()=>{

  const [searchField, setSearchField] = useState('');//[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render');

  useEffect(()=>{
    console.log('useeffect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> setMonsters(users));
  }, []);

  useEffect(()=>{
    console.log('useeffect');
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField);
     });
     setFilteredMonsters(newFilteredMonsters)
  },[searchField, monsters]);



  const onSearchChange = (event)=>{
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
        
        };

  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
            onChangeHandler={onSearchChange} 
            placeHolder='Search Monsters'
            className='search-box'/>
        <CardList monsters={filteredMonsters} />
      </div>
  );

}
/////////////////////
// CLASS COMPONENT //
/////////////////////
// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
      
//     }
//     console.log('constructor');
//   }

/*   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=> this.setState(()=>{
        return {monsters: users}
      }
      ))
      console.log('didMount');
  } */

//   onSearchChange = (event)=>{
//     console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();
    
//     this.setState(()=>{
//       return {searchField};
//     });
//     };
//   render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLowerCase().includes(searchField);
//      });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//             onChangeHandler={onSearchChange} 
//             placeHolder='Search Monsters'
//             className='search-box'/>
//         {/*
//           filteredMonsters.map((monster)=>{
//             return <div key={monster.id}>
//                 <h1>{monster.name}</h1>
//               </div>
//           })
//         */
//         <CardList monsters={filteredMonsters} />}
//       </div>
      
//     );
    
//   }
  
// }

export default App;
