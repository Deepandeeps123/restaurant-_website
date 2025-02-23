

let List=()=>{
    let data=['Html','Css','Javascript','Python','Django','React']
    return(
        <div>
            {
                data.map((ele,index)=>{
                    return(
                        <li key={index}>{ele}</li>
                    )

                })
            }

        </div>
    )
}
export default List