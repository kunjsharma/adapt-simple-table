define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Table = ComponentView.extend({


        preRender: function() {
            this.$el.addClass("no-state");
            // Checks to see if the blank should be reset on revisit
            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.setReadyStatus();
            this.$('.component-inner').on('inview', _.bind(this.inview, this));
        },

        // Used to check if the blank should reset on revisit
        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {
                    this.$('.component-inner').off('inview');
                    this.setCompletionStatus();
                }

            }
        }

    });

    Adapt.register('blank', Table);

    return Table;

});
