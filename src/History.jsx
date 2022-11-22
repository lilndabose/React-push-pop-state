import React,{useEffect,useState} from 'react'
import './history.css'

const History = () => {

    const [data,setData] = useState([
        {
            data: 1,
            id: 'box-1',
            active: false,
            color:'red'
        },
        {
            data: 2,
            id: 'box-2',
            active: false,
            color: 'green'
        },
        {
            data: 3,
            id: 'box-3',
            active: false,
            color: 'yellow'
        },
        {
            data: 4,
            id: 'box-4',
            active: false,
            color: 'blue'
        }
    ])

    const onPop=(e)=>{
        let arr = [...data]
        arr.forEach(item=>{
            if(item.id === e.state)
                item.active = true
            else
                item.active = false
        })

        setData(arr)
    }

    useEffect(()=>{
        window.addEventListener('popstate',onPop);
        return () => window.removeEventListener("popstate", onPop);
    },[onPop])

    const handlePushState=(item)=>{
        window.history.pushState(`${item.id}`,"Select bnt-"+item.data,`selected=${item.id}`)
    }

  return (
    <div className='history-text'>
        {
            data.map((item,index)=>{
                return(
                <div onClick={()=>handlePushState(item)} className={item.active ? 'active' : 'square' } 
                id={item.id} key={index} style={{backgroundColor: item?.color}}>
                    {item.data}
                </div>
                )
            })
        }
    </div>
  )
}

export default History;