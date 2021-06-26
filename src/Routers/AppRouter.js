import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cocina from "../views/Cocina/Cocina";
import { Inicio } from "../views/Inicio/Inicio";
import Mesero from "../views/Mesero/Mesero";
import NotFound from "../views/NotFount/NotFound";


export default function AppRouter(){
    return(
        <Router>
            <Switch>            
            <Route exact path="/inicio" component={Inicio}/>             
            <Route path="/mesero" component={Mesero}/>
            <Route path="/cocina" component={Cocina}/>
            <Route path="*" component={NotFound}/>      
            </Switch>
        </Router> 
    )
}