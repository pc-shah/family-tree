import React from 'react';

export class FamilyForm extends React.Component {
    constructor() {
        super();
    }

    submit() {
        
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label>Family Name</label>
                    <input type="text" required className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Family Head Person</label>
                    <input type="text" required className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    Male: <input type="radio" name="gender" value="male" required></input>
                    Female: <input type="radio" name="gender" value="female" required></input>
                </div>
                <button type="submit">Submit Form</button>
            </form>
        )
    }
}
