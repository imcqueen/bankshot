const axios = require('axios');

const API_URL = 'https://api.bankshot.ai/v1/';


export default function Bankshot(api_key){

    const bankshot = function(api_key){
        this.BANKSHOT_API_KEY = api_key
    }
    bankshot.prototype = {

        createApproval: async function(data){
            const endpoint = "/"+data.orgId+"/approval/"+ data.workflowId+"/create";
            this.callApiEndpoint(endpoint, {
                context: data.context,
                request_text: data.request_text
            };
        },


        callApiEndpoint: async function(endpoint, data){
            try {
                const response = await axios.post(API_URL + endpoint, data, {
                    headers: {
                        'x-bankshot-key': this.BANKSHOT_API_KEY
                    }
                });
            }
            catch (error) {
                console.error(error);
            }
        }
    }

}