import {react,Component} from 'react';
import axios from 'axios';
import Select from 'react-select';

class ChangeStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            del_guys:[],
            chefs:[],
            emp:'',
            options:[],
            status:this.props.status,


          }
          this.updateOrder=this.updateOrder.bind(this);
    }

    updateOrder(){
        let newOrder={};
       if(this.state.status=='ready'){
       newOrder={
          status:'ontheway',
          assign_to:this.state.emp
      }
       }
       else if(this.state.status=='ontheway'){
        newOrder={
            status:'delivered',
        }
       }

     axios.patch(`http://localhost:8070/orders/edit/${this.props.order}`,newOrder).then(res=>{
         alert('Stage completed');
         window.location='/admin/delivery'
     })
    .catch(err=>{
        console.log(err);
    })
    }

    componentDidMount() {
        axios.get(`http://localhost:8070/employee-management/employee/d_guys/${this.props.city}`).then(res=>{
            this.setState({del_guys:res.data});
            console.log(res.data)
            let data=[];
            this.state.del_guys.map(guy=>{
            let item={  
                value:guy._id,
                label:guy.FirstName+' '+guy.LastName
            }
            console.log(item)
            data.push(item);
            })
            console.log(data)
          this.setState({options:data});
                }).catch(err=>{
                    console.log(err);
                })

   }
    render() { 
        if(this.state.status=='ready'){
            return(
               <div>
               <h1>Status:Ready</h1>
         
               <Select
               maxMenuHeight={125}
               options={this.state.options}
               onChange={(e)=>{
                   this.setState({emp:e.value});
               }}
             />
               <button onClick={this.updateOrder}>Assign a delivery guy</button>
            
               </div>
                );
        }
    
        else if(this.state.status=='ontheway'){
            return(
                <div>
                <h1>Status:On the way</h1>
                <button onClick={this.updateOrder}>Mark as delivered</button>
                </div>
                
                );
        }
        else{
return(
    <div>
    <h2>Order Completed</h2>
    </div>
);
        }
    

    
    }
}
 
export default ChangeStatus ;