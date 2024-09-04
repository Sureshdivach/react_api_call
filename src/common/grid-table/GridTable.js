const GridTable =({tHeader=[],taData=[], displaycb})=>{
    return(
<div className="table_container">
            <table > 
                <thead>
                    <tr> 
                        {tHeader.map(el=> <th key={el?.id}> {el?.label} </th>)}
                    </tr>
                     </thead>
                     <tbody> 
                        {taData.map(tr=> <tr key={tr.id}>
                            {tHeader.map(th=><td key={`${tr.id}-${th.id}`}>{displaycb(th,tr)}</td>)}
                        </tr>)

                        }
                     </tbody>
            </table>
        </div> 
    )
}
export default GridTable;