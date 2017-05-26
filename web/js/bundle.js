(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Searchable Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Jean-Pierre Sierens
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SearchableTable = function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component
		var _this = _possibleConstructorReturn(this, (SearchableTable.__proto__ || Object.getPrototypeOf(SearchableTable)).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its 
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2.default.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
}(_react2.default.Component);

exports.default = SearchableTable;

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

var Table = function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2.default.createElement(Section, { key: product.name, data: product }));
			}.bind(this));
			return _react2.default.createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
}(_react2.default.Component);

var Section = function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Author: Jean-Pierre Sierens
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	===========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// Filterable CheatSheet Component

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Testing jignesh123 '
            );
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('searchableTable'));

},{"./SearchableTable":1,"./data":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXFNlYXJjaGFibGVUYWJsZS5qcyIsImFwcFxcYXBwLmpzIiwiYXBwXFxkYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNNQTs7Ozs7Ozs7OzsrZUFOQTs7Ozs7O0lBUXFCLGU7OztBQUNwQiw0QkFBYztBQUFBOztBQUViO0FBRmE7O0FBR2IsUUFBSyxLQUFMLEdBQWEsRUFBQyxZQUFZLEVBQWIsRUFBYjtBQUhhO0FBSWI7Ozs7a0NBQ2UsVSxFQUFZO0FBQzNCO0FBQ0E7QUFDQSxRQUFLLFFBQUwsQ0FBYyxFQUFDLFlBQVksVUFBYixFQUFkO0FBQ0E7OzsyQkFDUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0Msa0NBQUMsU0FBRDtBQUNDLGlCQUFZLEtBQUssS0FBTCxDQUFXLFVBRHhCO0FBRUMsa0JBQWEsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCO0FBRmQsTUFERDtBQUtDLGtDQUFDLEtBQUQ7QUFDQyxXQUFNLEtBQUssS0FBTCxDQUFXLElBRGxCO0FBRUMsaUJBQVksS0FBSyxLQUFMLENBQVc7QUFGeEI7QUFMRCxJQUREO0FBWUE7Ozs7RUF4QjJDLGdCQUFNLFM7O2tCQUE5QixlOztJQTJCZixTOzs7Ozs7Ozs7OztpQ0FDVTtBQUNkO0FBQ0EsUUFBSyxLQUFMLENBQVcsV0FBWDtBQUNDO0FBQ0EsUUFBSyxJQUFMLENBQVUsZUFBVixDQUEwQixLQUYzQjtBQUlBOzs7MkJBQ1E7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQ0MsV0FBSyxNQUROO0FBRUMsa0JBQVksMkJBRmI7QUFHQyxVQUFJLGlCQUhMO0FBSUMsWUFBUSxLQUFLLEtBQUwsQ0FBVyxVQUpwQjtBQUtDLGVBQVcsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCO0FBTFo7QUFERCxJQUREO0FBV0E7Ozs7RUFwQnNCLGdCQUFNLFM7O0lBdUJ4QixLOzs7Ozs7Ozs7OzsyQkFDSTtBQUNSLE9BQUksV0FBVyxFQUFmO0FBQ0EsT0FBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQXRCO0FBQ0EsUUFBSyxPQUFMLENBQWEsVUFBUyxPQUFULEVBQWtCO0FBQzlCLFFBQUksUUFBUSxJQUFSLENBQWEsT0FBYixDQUFxQixLQUFLLEtBQUwsQ0FBVyxVQUFoQyxNQUFnRCxDQUFDLENBQXJELEVBQXdEO0FBQ3ZEO0FBQ0E7QUFDRCxhQUFTLElBQVQsQ0FBYyw4QkFBQyxPQUFELElBQVMsS0FBSyxRQUFRLElBQXRCLEVBQTRCLE1BQU0sT0FBbEMsR0FBZDtBQUNBLElBTFksQ0FLWCxJQUxXLENBS04sSUFMTSxDQUFiO0FBTUEsVUFDQztBQUFBO0FBQUE7QUFBTTtBQUFOLElBREQ7QUFHQTs7OztFQWJrQixnQkFBTSxTOztJQWdCcEIsTzs7Ozs7Ozs7Ozs7MkJBQ0k7QUFDUixVQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFJLFVBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBcEI7QUFBQTtBQUE2QixVQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEtBQTdDO0FBQUE7QUFBQTtBQURELElBREQ7QUFLQTs7OztFQVBvQixnQkFBTSxTOzs7Ozs7O0FDckU1Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7K2VBUkE7Ozs7O0FBVUE7O0lBRU0sRzs7O0FBQ0YsbUJBQWE7QUFBQTs7QUFBQTtBQUVaOzs7O2lDQUVPO0FBQ0osbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0g7Ozs7RUFUYSxnQkFBTSxTOztBQVl4QixtQkFBUyxNQUFULENBQWlCLDhCQUFDLEdBQUQsT0FBakIsRUFBeUIsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUF6Qjs7Ozs7Ozs7QUN4Qk8sSUFBTSxzQkFBTyxDQUNsQixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxRQUFwQyxFQUE4QyxTQUFTLElBQXZELEVBQTZELE1BQU0sVUFBbkUsRUFEa0IsRUFFbEIsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sT0FBcEMsRUFBNkMsU0FBUyxJQUF0RCxFQUE0RCxNQUFNLFVBQWxFLEVBRmtCLEVBR2xCLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLFFBQXBDLEVBQThDLFNBQVMsS0FBdkQsRUFBOEQsTUFBTSxZQUFwRSxFQUhrQixFQUlsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFFBQWpDLEVBQTJDLFNBQVMsSUFBcEQsRUFBMEQsTUFBTSxZQUFoRSxFQUprQixFQUtsQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsS0FBckQsRUFBNEQsTUFBTSxVQUFsRSxFQUxrQixFQU1sQixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsSUFBckQsRUFBMkQsTUFBTSxTQUFqRSxFQU5rQixDQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4qXHRTZWFyY2hhYmxlIFRhYmxlXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoYWJsZVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyBJbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcblx0XHR0aGlzLnN0YXRlID0ge2ZpbHRlclRleHQ6ICcnfTtcblx0fVxuXHRoYW5kbGVVc2VySW5wdXQoZmlsdGVyVGV4dCkge1xuXHRcdC8vIFdoZW4gdGhlcmUncyBhIGNoYW5nZSBpbiB0aGUgc3RhdGUsIHRoZSBjb21wb25lbnQgYW5kIGFsbCBpdHMgXG5cdFx0Ly8gc3ViLWNvbXBvbmVudHMgZ2V0IHVwZGF0ZWQuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyVGV4dDogZmlsdGVyVGV4dH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFNlYXJjaEJhciBcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG5cdFx0XHRcdFx0b25Vc2VySW5wdXQ9e3RoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUYWJsZSBcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9IFxuXHRcdFx0XHRcdGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0aGFuZGxlQ2hhbmdlKCkge1xuXHRcdC8vIHBhc3NpbmcgZmlsdGVyIGRhdGEgdXAgYnkgdXNpbmcgYSBjYWxsYmFja1xuXHRcdHRoaXMucHJvcHMub25Vc2VySW5wdXQoXG5cdFx0XHQvLyByZWYgaXMgbGlrZSB0aGUgaWRcblx0XHRcdHRoaXMucmVmcy5maWx0ZXJUZXh0SW5wdXQudmFsdWVcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBvbmUga2V5d29yZC4uLlwiIFxuXHRcdFx0XHRcdHJlZj1cImZpbHRlclRleHRJbnB1dFwiXG5cdFx0XHRcdFx0dmFsdWU9IHt0aGlzLnByb3BzLmZpbHRlclRleHR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBcblx0XHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCBzZWN0aW9ucyA9IFtdO1xuXHRcdGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0KSB7XG5cdFx0XHRpZiAocHJvZHVjdC5uYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXJUZXh0KSA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbnMucHVzaCg8U2VjdGlvbiBrZXk9e3Byb2R1Y3QubmFtZX0gZGF0YT17cHJvZHVjdH0gLz4pO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+e3NlY3Rpb25zfTwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHA+e3RoaXMucHJvcHMuZGF0YS5uYW1lfSA9IHt0aGlzLnByb3BzLmRhdGEucHJpY2V9IDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiIsIi8qXG4qXHRBdXRob3I6IEplYW4tUGllcnJlIFNpZXJlbnNcbipcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNlYXJjaGFibGVUYWJsZSBmcm9tICcuL1NlYXJjaGFibGVUYWJsZSc7XG5pbXBvcnQge2RhdGF9IGZyb20gJy4vZGF0YSc7XG5cbi8vIEZpbHRlcmFibGUgQ2hlYXRTaGVldCBDb21wb25lbnRcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+VGVzdGluZyBqaWduZXNoMTIzIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoIDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGFibGVUYWJsZScpICk7IiwiZXhwb3J0IGNvbnN0IGRhdGEgPSBbXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkNDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJGb290YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiQmFzZWJhbGxcIn0sXG4gIHtjYXRlZ29yeTogXCJTcG9ydGluZyBHb29kc1wiLCBwcmljZTogXCIkMjkuOTlcIiwgc3RvY2tlZDogZmFsc2UsIG5hbWU6IFwiQmFza2V0YmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCIsIHByaWNlOiBcIiQ5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcImlQb2QgVG91Y2hcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkMzk5Ljk5XCIsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiBcImlQaG9uZSA1XCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDE5OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIk5leHVzIDdcIn1cbl07Il19
