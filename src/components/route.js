import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { FamilyForm } from './familyForm';
import { FamilyList } from './familyList';

export class Route extends React.Component {
    render() {
        <div>
            <ul>
                <li><Link to="/list">Family List</Link></li>
                <li><Link to="/form">Family Form</Link></li>
            </ul>
            <Switch>
                <Route path="/form" component={FamilyForm}></Route>
                <Route path="/list" component={FamilyList}></Route>
            </Switch>
        </div>
    }
}
