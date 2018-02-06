"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WinType = require("./WinType");

var _WinType2 = _interopRequireDefault(_WinType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RollNumberModel = function () {
    function RollNumberModel(num) {
        _classCallCheck(this, RollNumberModel);

        this.RollNumbers = this.GetRollNumbers(num);
        this.HasBonus = false;
    }

    _createClass(RollNumberModel, [{
        key: "RandomNumer",
        value: function RandomNumer() {
            var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

            return Math.floor(Math.random() * max);
        }
    }, {
        key: "GetRollNumbers",
        value: function GetRollNumbers() {
            var _this = this;

            var N = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

            return Array.from(new Array(N), function () {
                return _this.RandomNumer(6);
            });
        }
    }, {
        key: "GetBonusWin",
        value: function GetBonusWin() {
            var winChance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

            return Math.random() < winChance / 100;
        }
    }, {
        key: "toJson",
        value: function toJson() {
            return {
                RollNumbers: this.RollNumbers,
                WinType: this.WinType,
                HasBonus: this.HasBonus
            };
        }
    }, {
        key: "WinType",
        get: function get() {
            var set = new Set(this.RollNumbers);
            this.HasBonus = this.GetBonusWin();
            var WinTypeText = this.HasBonus ? _WinType2.default.bounsWin + " " : "";
            switch (set.size) {
                case 1:
                    WinTypeText += _WinType2.default.bigWin;
                    break;
                case 2:
                    WinTypeText += _WinType2.default.smallWin;
                    break;
                case 3:
                    WinTypeText += _WinType2.default.noWin;
                    break;
                default:
                    WinTypeText += _WinType2.default.noWin;
                    break;
            }

            return WinTypeText;
        }
    }]);

    return RollNumberModel;
}();

exports.default = RollNumberModel;