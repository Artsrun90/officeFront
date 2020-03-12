import React from "react";
import './pagination.css'

class Pagination extends React.Component {
    state = { 
        pageNumbers: []
     }

     shouldComponentUpdate() {
         if(this.state.pageNumbers.length === 0){
             return true;
         } else{
             return false;
         }
      }

foo(){    
    for(let i=1; i<= Math.ceil(this.props.totalTasks/this.props.tasksPerpage); i++){
this.state.pageNumbers.push(i);
    }
    console.log("pageNumbers:", this.state.pageNumbers)
}


    render() {
        this.foo();
        return (
            <nav style={{marginLeft:"600px"}}>
                <ul className='pagination'>
                    {this.state.pageNumbers.map((number, index)=>(
                        <li key={index}>
                            <a onClick={()=> this.props.paginate(number)} href={`#${number}`} className='page-link'>
                                 {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Pagination;