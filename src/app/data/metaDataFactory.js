(function( app ) {

	var data = app.ns("data");
	var ux = app.ns("ux");

	data.MetaDataFactory = ux.Observable.extend({
		defaults: {
			cluster: null // (required) an app.services.Cluster
		},
		init: function() {
			this._super();
			var appName = window.getCurrentApp().appName;
			var url = '/_mapping';
			this.config.cluster.get(url, function(data) {
				data[appName].aliases = [];
				var originalData = {
						state: {
						metadata : {
							indices : data
						}
					}
				};
				this.metaData = new app.data.MetaData(originalData);
				this.fire("ready", this.metaData,  { originalData: originalData.state }); // TODO originalData needed for legacy ui.FilterBrowser
			}.bind(this));
		}
	});

})( this.app );
