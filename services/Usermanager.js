const processContact = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
  })
  
  export const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50&nat=us')
    const {results} = await response.json()
    return results.map(processContact)
  }
  
  export const login = async (email, password) => {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({email, password}),
    })
  
    console.log(response);

    if (response.ok) {
      return true
    }

    const errMessage = response.status
    throw new Error(errMessage)
  }
  