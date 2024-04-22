const axios = require('axios');

const API_URL = 'http://api.bankshot.ai/v1/';


module.exports = function Bankshot(api_key){

    var bankshot = function(api_key){
        this.BANKSHOT_API_KEY = api_key
    }
    bankshot.prototype = {

        BANKSHOT_API_KEY: null,

        createApproval: async function(data){
            const endpoint = ""+data.orgId+"/approval/"+ data.workflowId+"/create";
            const resp = await this.callApiEndpoint(endpoint, {
                context: data.context,
                request_text: data.request_text
            });

            return resp;
        },


        callApiEndpoint: async function(endpoint, data){
            try {
                const response = await axios.post(API_URL + endpoint, data, {
                    headers: {
                        'x-bankshot-key': this.BANKSHOT_API_KEY
                    }
                });
                return response.data;
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    return new bankshot(api_key);

}