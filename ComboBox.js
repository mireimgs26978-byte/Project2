sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.m.sample.ComboBox.controller.ComboBox", {

		onInit: function () {

            var oModel = this.getOwnerComponent().getModel("Z_CDS_List");
            var oView = this.getView();
        
            oModel.read("/ClassSet", {
                success: function(oData) {
        
                    // Set OData response into a class variable
                    this._aClassValues = oData.results;
        
                    // Set a JSONModel as a model for ComboBox
                    var oJson = new sap.ui.model.json.JSONModel(this._aClassValues);
                    oView.setModel(oJson, "combo");
        
                }.bind(this)
            });
		}
	});
});
