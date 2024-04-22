# Bankshot API Client

The official API client for integrating Bankshot.AI requests into a generative AI workflow.

## Installation

The easiest way to get started is to install via npm.

``npm install bankshot``

## Example Usage

``const Bankshot = require('bankshot')

    const BS_API_KEY = 'YOUR_KEY_HERE' //generated from the Bankshot dashboard
    const BS_ORG_ID = '';
    const BS_WORKFLOW_ID = '';

    const bankshot = Bankshot(BS_API_KEY)

    bankshot.createApproval({
        orgId: BS_ORG_ID,
        workflowId: BS_WORKFLOW_ID,
        context: {
            background: "..."
        },
        request_text: "text to be reviewed and approved..."
    }).then((response)=>{
        console.log(response);
    })``