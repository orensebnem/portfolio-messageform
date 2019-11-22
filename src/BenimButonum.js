import React from 'react'

const BenimButonum = (props) => {

    const list = ["bir","iki","uc"]

    return(
        list.map((deger)=>
            <button 
                style={{color: props.color, 
                    backgroundColor: props.isMan? "blue" : "red"
                }}
                onClick={()=> props.boraOnClick(deger)}>
                {deger}
            </button>
            )
        
    )
}

export default BenimButonum