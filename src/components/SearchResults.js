
import {useParams} from 'react-router-dom';
import SearchResultsRow from './SearchResultsRow';


const SearchResults = (props) => {

            console.log(props);
     
            const paramsObj = useParams();
            console.log(paramsObj);
           
            let filteredHousesArray = props.houses.filter( (elem) => elem.county === paramsObj.county );
            console.log(filteredHousesArray);


    return (
        <div className="row">
            <h4>Search results for houses in : {paramsObj.county} </h4>
            <div className="table-responsive">
                <table className="table table-primary table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { filteredHousesArray.map( (elem) =>{
                               return <SearchResultsRow house={elem}/>
                        }
                        )}
                     
                       
                    </tbody>
                </table>
            </div>
           
        </div>
     );
}
 
export default SearchResults;