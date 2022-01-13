import axios from 'axios'

const cms = axios.create({
    baseURL: `http://api.stackexchange.com`,
    timeout: 25000
})


function getSearch() {
    return cms({
        method: 'GET',
        url: `/2.3/answers`, 
        params:{
            order:'desc',
            sort:'activity',
            site:'stackoverflow'
        }
    })
  }

  export default getSearch