import React from 'react';

export class FamilyList extends React.Component {
    constructor() {
        super();
        this.state = {
            familyList: [{ id: 1, name: 'ABC DEF', totalMembers: 8 }, { id: 2, name: 'ZZZ BBB', totalMembers: 5 }, { id: 3, name: 'DDD CCC', totalMembers: 10 }, { id: 4, name: 'PQR STU', totalMembers: 15 }]
        }
    }
    deleteFamily() {

    }
    render() {
        return (
            <div>
                <table border="2">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Total number of members</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.familyList.map(f => (
                            <tr>
                                <td>{f.id}</td>
                                <td>{f.name}</td>
                                <td>{f.totalMembers}</td>
                                <td><button onClick={this.deleteFamily}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}