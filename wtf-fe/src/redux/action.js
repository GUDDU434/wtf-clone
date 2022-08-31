import axios from 'axios'


export const GET_DATA = "GET_DATA"
export const GET_DATA_LOADING = "GET_DATA_LOADING"
export const GET_DATA_ERR = "GET_DATA_ERR"

export const baseUrl = "https://devapi.wtfup.me" 

export const getData=(dispatch,Data)=>{
    dispatch({
        type:GET_DATA_LOADING
    })
    console.log(`${baseUrl}/gym/nearestgym?lat=${Data.lat}&long=${Data.long}`)
    axios.get(`${baseUrl}/gym/nearestgym?lat=${Data.lat}&long=${Data.long}`).then(({data})=>{
        console.log(data)
        if(data.status){
            dispatch({
                type:GET_DATA,
                payload:data.data
            })
        }else{
            dispatch({
                type:GET_DATA_ERR,
            })    
        }
    }).catch((err)=>{
        console.log(err)
        dispatch({
            type:GET_DATA_ERR,
        })
    })
}

export const getBycity=(dispatch)=>{
    dispatch({
        type:GET_DATA_LOADING
    })

    axios.get(`${baseUrl}/gym/places`,{places:"mumbai"}).then(({data})=>{
        console.log(data)
        if(data.status){
            dispatch({
                type:GET_DATA,
                payload:data.data
            })
        }else{
            dispatch({
                type:GET_DATA_ERR,
            })    
        }
        
    }).catch((err)=>{
        console.log(err)
        dispatch({
            type:GET_DATA_ERR,
        })
    })

}
