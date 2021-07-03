import axios from 'axios'

export const registration = async (email, pass) =>{
  try{
    const response = axios.post('http://localhost:8000/users', {
      email,
      pass
    })
    alert(response.data.messenge)
  } catch(e){
    alert(e)
  }

}