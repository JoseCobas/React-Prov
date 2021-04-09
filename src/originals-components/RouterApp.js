import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ManageItems from '../pages/admin/ManageItems'
import NotFound from '../pages/NotFound'
import CreateItem from '../pages/admin/CreateItem'
import Item from '../pages/Item'
import ClientPage from '../pages/Items'

function RouterApp (){
    return (
        <BrowserRouter>
          <Switch>
             <Route exact path="/" component={ClientPage} />
             <Route exact path="/allmovies" component={ManageItems} />
             <Route exact path="/clientPage" component={ClientPage} />
             <Route exact path="/allmovies/newmovie" component={CreateItem} />
             <Route exact path="/movie/:id" component={Item} />
             <Route  component={NotFound} />
          </Switch>                           
        </BrowserRouter>
    )    
}

export default RouterApp