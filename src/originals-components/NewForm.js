import React, { Component } from 'react'


class NewForm extends Component {
   
    
  render() {
      const { onChange, form, onSubmit } = this.props
    return (
                  
        <div className="form-container">
    
            <form onSubmit={onSubmit} >
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    onChange={onChange}
                    value={form.title}/>
                </div>
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    onChange={onChange}
                    value={form.description}/>
                    
                </div>
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    placeholder="Year"
                    name="year"
                    onChange={onChange}
                    value={form.year}/>
                </div>
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    placeholder="Genre"
                    name="genre"
                    onChange={onChange}
                    value={form.genre}/>
                </div>
                <button 
                    type="submit"
                    className="btn"
                >
                Submit
                </button>
            </form>
        </div>
    )
  }
}

export default NewForm
