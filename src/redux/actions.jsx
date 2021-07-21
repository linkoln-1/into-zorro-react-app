import axios from 'axios'

export const registration = async (email, pass) => {
 let user_data = { email, pass }

 try { const request = axios.post('http://localhost:8000/users', user_data) }
 catch(e) { alert(e) }

}

export const login = async (email, pass) => {
 let user_data = { email, pass }

 try { const request = axios.post('http://localhost:8000/user-login') }
 catch (e) { alert(e) }
}
