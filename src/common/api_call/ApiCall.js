import {useEffect , useState} from "react";
import GridTable from "../grid-table/GridTable";
import "./api.css"
 const tableHeader =[
{
   id:"name" ,
   label:"Name",
   name:"name"
},
{
    id:"username",
    label:"Username",
    name:"username",
},
{
    id:"phone",
    label:"Phone",
    name:"phone",
},
{
    id:"email",
    label:"Email",
    name:"email",
},
{
    id:"address",
    label:"Address",
    name:"address",
},
{
    id:"company",
    label:"Company",
    name:"company",
},
{
    id:"website",
    label:"Website",
    name:"website",
},

 ]

const ApiCall =()=>{
    const [showData,setShowData]=useState(false);
    const [tData,setTData]=useState([])
    const [laoding,setLoading]=useState(false);

    const getPost =()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp=> resp.json())
        .then(json=> {
            console.log(json)
            setTData(json)}
        )
        .catch(( error)=>console.log(error))
         .finally(()=>{
            setLoading(false);
        })
    }
    const displayData=(th,tr)=>{
        if(th.name === "company"){
            return`${tr?.company?.name}`;
        }else if(th.name==="address"){
            return`${tr?.address?.suite},${tr?.address?.street},${tr?.address?.zipcode},${tr?.address?.city}, `;
        }
        return tr?.[th.name]
    }
   
      useEffect(() => {
        if(showData){
            getPost()
        } 
      },[showData])

      return (
        <div className="button_container"><button onClick={ ()=> setShowData(true)} > show</button>
      {!!tData?.length ?
      <GridTable tHeader={tableHeader} taData={tData} displaycb={displayData}/>
       : showData 
       ? laoding
       ? <div> <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' alt='loading'/></div>
       : <div>no data to display</div>
       :null}


        {/* <div className="table_container">
            <table > 
                <thead>
                    <tr> 
                        {tableHeader.map(el=> <th key={el?.id}> {el?.label} </th>)}
                    </tr>
                     </thead>
                     <tbody> 
                        {tData.map(tr=> <tr key={tr.id}>
                            {tableHeader.map(th=><td key={`${tr.id}-${th.id}`}>{displayData(th,tr)}</td>)}
                        </tr>)

                        }
                     </tbody>
            </table>
        </div> */}
        </div>
        
        )
    }
export default ApiCall;