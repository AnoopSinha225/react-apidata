import React, { Component } from 'react';

class Dev extends Component{
 constructor(props){
    super(props);
      this.state = {
        items: [],
        isLoaded: false,
        editable:false,
        editableData:{},
        create: false,
        createdata: {} 
      }
    }


    setEditable = (item) => {
            this.setState({
            editable:true,
            editableData:{...item}  
        });
    }


        Create_Data = (item)=>{
          this.setState ({
          create:true,
          createdata: {...item}  
      });
    }

      handleChange_edit = (event)=>{
        event.preventDefault()
        let changeData = {...this.state.editableData};
        changeData[event.target.name]=event.target.value;
        console.log(changeData);
        this.setState({editableData:changeData });
      }

      handleChange_add = (event) => {
        event.preventDefault()
        let changeData = {...this.state.createdata};
        changeData[event.target.name]=event.target.value;
        console.log(changeData);
        this.setState({createdata:changeData });
      }




      Save = ()=> {
          
          let index = this.state.items.findIndex(item => item.id == this.state.editableData.id);
          this.state.items[index] =  this.state.editableData ;
       
      
          this.setState({
              items:this.state.items,
              editableData:{},
              editable:false,
              
          })
      }


      CreateSave = () => {
        
           if(!this.state.createdata.name || this.state.createdata.name.length==0){
            return;
         }


         this.state.items.push(this.state.createdata);

        //  if(this.state.createdata.name.length==0){
        //        return;
        //     }

       //  this.state.items[index] =  this.state.createdata ;

         
         this.setState({
          items:this.state.items,
          createdata:{},
          create:false,
        })

      }



    delEvent= (item)=> {
      const newItem=this.state.items.filter(obj => obj.id!==item.id);
     this.setState({
        items:newItem
      });
    }
   
 

   render() {

    var { isLoaded,items,editable,create } = this.state;

    if (! isLoaded) {
      return <div> Loading...</div>;
    }

    else if(editable){
      return ( <div>
          <input className="form-control form-control-lg" name="name" onChange={this.handleChange_edit} value={this.state.editableData.name} type="text" placeholder="name"/><br/>
          <input className="form-control form-control-lg" name="username" onChange={this.handleChange_edit} value={this.state.editableData.username} type="text" placeholder="userid"/><br/>
          <button onClick={this.Save}>Save</button>
       </div>);
      
     }

     else if(create){
      return ( <div>

     <input  name="name" onChange={this.handleChange_add} value={this.state.createdata.name} type="text" placeholder="name"/><br/>
     <button onClick={this.CreateSave}>Create_Save</button>
       </div>);
      
     }
   
    else{
     

    return(
  <div>
        <table display={{style:"width:100%"}}>
  <tbody>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Username</th>
    </tr>
    </tbody>
    <tbody>
     {items.map((item,index) => (  
    
        <tr key={item.id}>
          <th>{index + 1}</th>
          <td><a href="javascript:void(0)" onClick={this.setEditable.bind(this,item)}>{item.name}</a></td>
          <td>{item.email}</td>
          <td><a href="javascript:void(0)" onClick={this.setEditable.bind(this,item)}>{item.username}</a></td>
          <button onClick={this.delEvent.bind(this,item)}>Delete</button>
        </tr>

       ))}
       </tbody>
    </table>

          <button onClick={this.Create_Data}>Create_Data</button>
   </div>

            
    );
    }
}

      componentDidMount () {
        console.log("called again componentDidMountdev");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json
          })
        });
      }


}



export default Dev;
