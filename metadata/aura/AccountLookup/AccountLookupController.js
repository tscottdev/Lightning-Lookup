/**
 * (c) Tony Scott. This code is provided as is and without warranty of any kind.
 *
 * This work by Tony Scott is licensed under a Creative Commons Attribution 3.0 Unported License.
 * http://creativecommons.org/licenses/by/3.0/deed.en_US
 */
 ({
    /**
     * Handler for receiving the updateLookupIdEvent event
     */
	handleAccountIdUpdate : function(cmp, event, helper) {
        // Get the Id from the Event
        var accountId = event.getParam("sObjectId");

        // Set the Id bound to the View
        cmp.set('v.recordId', accountId);
	},

    /**
     * Handler for receiving the clearLookupIdEvent event
     */
	handleAccountIdClear : function(cmp, event, helper) {
        // Clear the Id bound to the View
        cmp.set('v.recordId', null);
	}
})