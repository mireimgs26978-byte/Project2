ap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.m.sample.DatePickerValueState.DatePicker", {

		onInit: function () {
			var oModel,
				sText = "DatePicker with valueState ",
				aData = [
					{ label: sText + "None", valueState: "None"},
				];
			oModel = new JSONModel({
				modelData: aData
			});
			this.getView().setModel(oModel);
		}
	});

});
