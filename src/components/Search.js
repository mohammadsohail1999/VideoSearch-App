import React from 'react';





class Search extends React.Component{

  
state = {term: ''};


onInputChange = (e)=>{

 
    this.setState({term: e.target.value});

   


}


onFormSubmit = (e)=>{

  e.preventDefault();


   this.props.onTermSubmit(this.state.term);



};



    render(){

    return(
      <div className="search-bar ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field">
                  <label>Video Search</label>
        <input type="text" value={this.state.term}  placeholder="Search..." onChange={this.onInputChange}/>
        </div>
        </form>
      </div>
      )


    }





}


export default Search;