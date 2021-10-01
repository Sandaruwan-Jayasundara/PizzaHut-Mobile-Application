import axios from "axios";

const ChangeStatus=(props)=>{
const status=props.status;

const updateStatus=()=>{
axios.patch(``,status).then(

).catch(err=>{
    
})

}
    if(status=='new'){
        return(
           <div>
           <h1>Status:New</h1>
           <button>Assign a chef</button>
           </div>
            );
    }

    if(status=='processing'){
        return(
            <div>
            <h1>Status:Processing</h1>
            <button>Mark as ready</button>
            </div>
            
            );
    }

    if(status=='ready'){
        return(
        <div>
        <h1>Status:Ready</h1>
        <button>Assign a delivery man</button>
        </div>
            
            );
    }

    if(status=='delivered'){
        return(
            <h1>Status:Delivered</h1>
            
            ); 
    }



}

export  default ChangeStatus;