import Movie from "./Movie"
import MovieDetails from "./MovieDetails"
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/detail/:id" component={MovieDetails} exact/>
                <Route path="/" component={Movie}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App;

