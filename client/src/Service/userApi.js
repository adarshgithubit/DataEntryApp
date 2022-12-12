import axios from 'axios'

const URL ='http://localhost:8080';
export  const addUser = async (data) =>{
    try{
    return await axios.post(`${URL}/add`, data)
    }catch(error)
    {
        console.log('Error while sending data', error);
    }
}
export const getUser = async()=>{
  try{
    return await axios.get(`${URL}/all`)
  }catch(error)
  {
    console.log('Error while sending data', error)
  }
}

export const takeUser = async(id)=>{
  try{
    return await axios.get(`${URL}/${id}`)
  }catch(err)
  {
    console.log("Error while calling api");
  }
}

export const editUser = async(user, id)=>{
  try{
    return await axios.post(`${URL}/${id}`,user)
  }catch(error)
  {
    console.log("Error while calling api",error);
  }
}

export const deleteUser = async(id)=>{
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log("Error while calling api",error);
  }
}