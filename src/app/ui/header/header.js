(function( $, app, i18n ) {

	var ui = app.ns("ui");

	ui.Header = ui.AbstractWidget.extend({
		defaults: {
			cluster: null,
			clusterState: null
		},
		_baseCls: "uiHeader",
		init: function() {
			this._clusterConnect = new ui.ClusterConnect({
				cluster: this.config.cluster
			});
			this.el = $.joey( this._main_template() );
			this._clusterState = this.config.clusterState;

			this._clusterState.refresh();
		},
		_main_template: function() { return (
			{ tag: "DIV", cls: this._baseCls, children: [
				this._clusterConnect,
				{ tag: "SPAN", cls: "uiHeader-name" },
				{ tag: "SPAN", cls: "uiHeader-status" },
				{ tag: "H1", text: i18n.text("General.Elasticsearch") },
				{ tag: "SPAN", cls: "pull-right", children: [
					this._quickMenu
				] }
			] }
		); }
	} );

})( this.jQuery, this.app, this.i18n );
