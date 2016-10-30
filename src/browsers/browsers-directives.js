"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var config_1 = require('../config');
/*
* BROWSERS DIRECTIVES
* @CHROME @FIREFOX @IE @OPERA
*
*/
/*======== CHROME =========*/
var IsChrome = (function (_super) {
    __extends(IsChrome, _super);
    function IsChrome(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'chrome';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsChrome.prototype, "isChrome", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    IsChrome.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isChrome]'
                },] },
    ];
    /** @nocollapse */
    IsChrome.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsChrome.propDecorators = {
        'isChrome': [{ type: core_1.Input },],
    };
    return IsChrome;
}(config_1.RESPONSIVE_BASE));
exports.IsChrome = IsChrome;
/*======== FIREFOX =========*/
var IsFirefox = (function (_super) {
    __extends(IsFirefox, _super);
    function IsFirefox(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'firefox';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsFirefox.prototype, "isFirefox", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    IsFirefox.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isFirefox]'
                },] },
    ];
    /** @nocollapse */
    IsFirefox.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsFirefox.propDecorators = {
        'isFirefox': [{ type: core_1.Input },],
    };
    return IsFirefox;
}(config_1.RESPONSIVE_BASE));
exports.IsFirefox = IsFirefox;
/*======== SAFARI =========*/
var IsSafari = (function (_super) {
    __extends(IsSafari, _super);
    function IsSafari(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'safari';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsSafari.prototype, "isSafari", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    IsSafari.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isSafari]'
                },] },
    ];
    /** @nocollapse */
    IsSafari.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsSafari.propDecorators = {
        'isSafari': [{ type: core_1.Input },],
    };
    return IsSafari;
}(config_1.RESPONSIVE_BASE));
exports.IsSafari = IsSafari;
/*======== OPERA =========*/
var IsOpera = (function (_super) {
    __extends(IsOpera, _super);
    function IsOpera(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'opera';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsOpera.prototype, "isOpera", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    IsOpera.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isOpera]'
                },] },
    ];
    /** @nocollapse */
    IsOpera.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsOpera.propDecorators = {
        'isOpera': [{ type: core_1.Input },],
    };
    return IsOpera;
}(config_1.RESPONSIVE_BASE));
exports.IsOpera = IsOpera;
/*======== IE =========*/
var IsIE = (function (_super) {
    __extends(IsIE, _super);
    function IsIE(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE.prototype, "isIE", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    IsIE.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isIE]'
                },] },
    ];
    /** @nocollapse */
    IsIE.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsIE.propDecorators = {
        'isIE': [{ type: core_1.Input },],
    };
    return IsIE;
}(config_1.RESPONSIVE_BASE));
exports.IsIE = IsIE;
var ShowItBrowser = (function (_super) {
    __extends(ShowItBrowser, _super);
    function ShowItBrowser(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowItBrowser.prototype, "showItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    ShowItBrowser.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[showItBrowser]'
                },] },
    ];
    /** @nocollapse */
    ShowItBrowser.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    ShowItBrowser.propDecorators = {
        'showItBrowser': [{ type: core_1.Input },],
    };
    return ShowItBrowser;
}(config_1.RESPONSIVE_BASE));
exports.ShowItBrowser = ShowItBrowser;
var HideItBrowser = (function (_super) {
    __extends(HideItBrowser, _super);
    function HideItBrowser(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideItBrowser.prototype, "hideItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    HideItBrowser.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[hideItBrowser]',
                    providers: [config_1.ResponsiveState]
                },] },
    ];
    /** @nocollapse */
    HideItBrowser.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    HideItBrowser.propDecorators = {
        'hideItBrowser': [{ type: core_1.Input },],
    };
    return HideItBrowser;
}(config_1.RESPONSIVE_BASE));
exports.HideItBrowser = HideItBrowser;
/*
* IE VERSIONS DIRECTIVES
* @IE9 @IE10 @IE11 @IE12
*
*/
var IsIE9 = (function (_super) {
    __extends(IsIE9, _super);
    function IsIE9(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 9';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE9.prototype, "isIE9", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    IsIE9.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isIE9]'
                },] },
    ];
    /** @nocollapse */
    IsIE9.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsIE9.propDecorators = {
        'isIE9': [{ type: core_1.Input },],
    };
    return IsIE9;
}(config_1.RESPONSIVE_BASE));
exports.IsIE9 = IsIE9;
var IsIE10 = (function (_super) {
    __extends(IsIE10, _super);
    function IsIE10(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 10';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE10.prototype, "isIE10", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    IsIE10.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isIE10]'
                },] },
    ];
    /** @nocollapse */
    IsIE10.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsIE10.propDecorators = {
        'isIE10': [{ type: core_1.Input },],
    };
    return IsIE10;
}(config_1.RESPONSIVE_BASE));
exports.IsIE10 = IsIE10;
var IsIE11 = (function (_super) {
    __extends(IsIE11, _super);
    function IsIE11(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 11';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE11.prototype, "isIE11", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    IsIE11.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isIE11]'
                },] },
    ];
    /** @nocollapse */
    IsIE11.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsIE11.propDecorators = {
        'isIE11': [{ type: core_1.Input },],
    };
    return IsIE11;
}(config_1.RESPONSIVE_BASE));
exports.IsIE11 = IsIE11;
var IsIE12 = (function (_super) {
    __extends(IsIE12, _super);
    function IsIE12(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._state = 'ie 12';
        this._showWhenTrue = true;
    }
    Object.defineProperty(IsIE12.prototype, "isIE12", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    IsIE12.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[isIE12]'
                },] },
    ];
    /** @nocollapse */
    IsIE12.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    IsIE12.propDecorators = {
        'isIE12': [{ type: core_1.Input },],
    };
    return IsIE12;
}(config_1.RESPONSIVE_BASE));
exports.IsIE12 = IsIE12;
var ShowIEVersion = (function (_super) {
    __extends(ShowIEVersion, _super);
    function ShowIEVersion(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = true;
    }
    Object.defineProperty(ShowIEVersion.prototype, "showIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    ShowIEVersion.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[showIEVersion]'
                },] },
    ];
    /** @nocollapse */
    ShowIEVersion.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    ShowIEVersion.propDecorators = {
        'showIEVersion': [{ type: core_1.Input },],
    };
    return ShowIEVersion;
}(config_1.RESPONSIVE_BASE));
exports.ShowIEVersion = ShowIEVersion;
var HideIEVersion = (function (_super) {
    __extends(HideIEVersion, _super);
    function HideIEVersion(templateRef, viewContainer, _responsiveState) {
        _super.call(this, templateRef, viewContainer, _responsiveState);
        this._showWhenTrue = false;
    }
    Object.defineProperty(HideIEVersion.prototype, "hideIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    HideIEVersion.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[hideIEVersion]'
                },] },
    ];
    /** @nocollapse */
    HideIEVersion.ctorParameters = [
        { type: core_1.TemplateRef, },
        { type: core_1.ViewContainerRef, },
        { type: config_1.ResponsiveState, },
    ];
    HideIEVersion.propDecorators = {
        'hideIEVersion': [{ type: core_1.Input },],
    };
    return HideIEVersion;
}(config_1.RESPONSIVE_BASE));
exports.HideIEVersion = HideIEVersion;
/*======== BrowserInfo =========*/
var BrowserInfo = (function () {
    function BrowserInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.browser = new core_1.EventEmitter();
    }
    Object.defineProperty(BrowserInfo.prototype, "browserInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    BrowserInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    BrowserInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BrowserInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.browser.emit(value);
        }
    };
    BrowserInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    BrowserInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "browserInfo", inputs: ['browserInfo'], outputs: ['browser']
                },] },
    ];
    /** @nocollapse */
    BrowserInfo.ctorParameters = [
        { type: config_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
    ];
    return BrowserInfo;
}());
exports.BrowserInfo = BrowserInfo;
/*======== ieInfo =========*/
var IeInfo = (function () {
    function IeInfo(_responsiveState, viewContainer) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.ieVersion = new core_1.EventEmitter();
    }
    Object.defineProperty(IeInfo.prototype, "ieInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    IeInfo.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this), function (value) {
            _this.currentstate = value;
        });
    };
    IeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    IeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.ieVersion.emit(value);
        }
    };
    IeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue) {
            return false;
        }
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    IeInfo.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "ieInfo", inputs: ['ieInfo'], outputs: ['ieVersion']
                },] },
    ];
    /** @nocollapse */
    IeInfo.ctorParameters = [
        { type: config_1.ResponsiveState, },
        { type: core_1.ViewContainerRef, },
    ];
    return IeInfo;
}());
exports.IeInfo = IeInfo;
//# sourceMappingURL=browsers-directives.js.map