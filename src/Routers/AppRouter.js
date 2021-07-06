import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cocina from "../views/Cocina";
import Home from "../views/Home"
import Mesero from "../views/Mesero";
import NotFound from "../views/NotFound";



export default function AppRouter(){
    return(
        <Router>
           
            <Switch>            
            <Route exact path="/Home" component={Home}/>             
            <Route path="/mesero" component={Mesero}/>
            <Route path="/cocina" component={Cocina}/>
            <Route path="*" component={NotFound}/>      
            </Switch>
        </Router> 
    )
}