import Card from '../card/card.component'
import './card-list.styles.css';

const CardList = (props) => {

    const {monsters} = props;
    return (
        <div className="card-list">
            {
                monsters.map((monster) => {
                    return (
                        <Card monster={monster} />
                    );
                })
            }
        </div>
        );
}

// class CardList extends Component{

//     render(){
//         const { monsters } = this.props;
//         console.log('render from card list');
//         return (
//         <div className="card-list">
//             {
//                 monsters.map((monster) => {
//                     return (
//                         <Card monster={monster} />
//                     );
//                 })
//             }
//         </div>
//         );
//     }

// }

export default CardList;