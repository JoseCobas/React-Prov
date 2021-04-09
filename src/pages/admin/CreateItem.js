import React, { Component } from 'react'
import '../../originals-components/styles/NewItem.css'
import  NewForm from '../../originals-components/NewForm'


export class CreateItem extends Component {

    state = {
        form: {
            title:'',
            description:'', 
            year:'', 
            genre:'' 
        },
        error: null
    }
    handleChange = e => {      
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        
        e.preventDefault()
        try{
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:5000/movies', config)
            let json = await res.json()
            console.log(json);

            this.props.history.push('/allmovies')

        } catch (error){
            this.setState({error})

        }
                
    }
    
  render() {
    return (
        <div className="form-container">
                       
            <div>
                <NewForm 
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                form={this.state.form}
                />
            </div>
            
        </div>
        
            
    )
  }
}

export default CreateItem
