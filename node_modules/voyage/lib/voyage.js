/*
 * TODO:
 * -Add (better) comments
 * -Add "params" (*) to parse_url
 */
var Voyage, special, configs,
	routes	= {},
	url		= require('url'),
	qs		= require('querystring');

configs = {
	qs: qs,
	env: process.NODE_ENV || 'development',
	log: function (log) { configs.env !== 'production' && console.log(log); }
};

special = {
	id: '[0-9]+',
	format: '\\.[A-Za-z0-9]{3,4}',
	day: '[0-2][0-9]|3[0-1]',
	month: '0[1-9]|1[0-2]',
	year: '[1-2][0-9]{3}',
	params: '.*'
};

Voyage = module.exports = {
	url: parse_url,
	map: map,
	drop: drop,
	config: config,
	resolve: resolve,
	resolveServer: resolveServer,
	resource: resource,
	get: _mapHelper('get'),
	post: _mapHelper('post'),
	head: _mapHelper('head'),
	put: _mapHelper('put'),
	patch: _mapHelper('patch'),
	delete: _mapHelper('delete'),
	options: _mapHelper('options'),
	get routes() { return _clone(routes); }
};

/**
 * Configure Voyage to behave certain ways
 * Usage: Voyage.config([key[, value]]);
 */
function config(key, val) {
	if (!key && !val) {
		return configs;
	} else if (key && val === undefined) {
		return configs[key];
	} else if (key && typeof key === 'string') {
		configs[key] = val;
	} else if (key && typeof key === 'object') {
		configs = key;
	}
}

/**
 * Restful Resource Mapping
 * Usage: Voyage.resource(base[, mapping[, only]]);
 *
 * Mapped Resources:
 * 	HEAD	/base		-> controller#index
 * 	GET		/base		-> controller#index
 * 	POST	/base		-> controller#create
 * 	OPTIONS	/base		-> controller#options
 * 	HEAD	/base/:id	-> controller#view
 * 	GET		/base/:id	-> controller#view
 * 	PUT		/base/:id	-> controller#update
 * 	PATCH	/base/:id	-> controller#update
 * 	DELETE	/base/:id	-> controller#delete
 * 	OPTIONS	/base/:id	-> controller#options
 */
function resource(base, mapping, only) {
	var path = '/' + base.replace(/^\//, '');

	_resource('options', path, base, 'options', mapping, only);
	_resource('head', path, base, 'index', mapping, only);
	_resource('get', path, base, 'index', mapping, only);
	_resource('post', path, base, 'create', mapping, only);

	_resource('options', path + '/:id', base, 'options', mapping, only);
	_resource('head', path + '/:id', base, 'view', mapping, only);
	_resource('get', path + '/:id', base, 'view', mapping, only);
	_resource('put', path + '/:id', base, 'update', mapping, only);
	_resource('patch', path + '/:id', base, 'update', mapping, only);
	_resource('delete', path + '/:id', base, 'delete', mapping, only);
}

/**
 * Drop/remove a route
 * Usage: Voyage.drop(path); // Drop path from all HTTP methods (GET, POST, etc)
 * Usage: Voyage.drop('get', path); // Drop path from only the GET HTTP method
 */
function drop(method, path) {
	var options, index;

	if (!path) {
		path = method;

		for (method in routes) {
			drop(method, path);
		}
	} else {
		method	= method.toLowerCase();
		path	= '/' + path.replace(/^\/|\/$/g, '').replace('*', ':params');

		if (path in routes[method]) {
			if (routes[method][path].options.resource) {
				if (routes.options && routes.options[path]) {
					options	= routes.options[path].options;
					index	= options.allowed.indexOf(method);

					if (index >= 0) {
						options.allowed.splice(index, 1);
					}
				}
			}

			delete routes[method][path];
		}
	}
}

/**
 * Map a pathname
 * Usage: Voyage.map(method, path, mapping[, options]);
 *
 * method string GET, POST, HEAD, etc... (case insensitive; custom methods work, too!)
 * path string The pathname you would like to map
 * mapping ->
 * 	Function function (req, resp, mapping) {} (compatible with Connect/Express),
 * 	Object {controller: '...', action: '...', ...},
 * 	String "controller#action"
 * options object (optional)
 */
function map(method, path, mapping, options) {
	var dummy, path2;

	options			= options || {};
	method			= method.toLowerCase();
	path			= '/' + path.replace(/^\/|\/$/g, '').replace('*', ':params');
	routes[method]	= routes[method] || {};

	if (mapping && typeof mapping === 'string') {
		dummy	= mapping.split('#');
		mapping	= {
			controller: dummy[0],
			action: dummy[1] || 'index'
		};
	} else if (typeof mapping === 'function') {
		mapping = { fn: mapping };
	} else if (!mapping || typeof mapping !== 'object') {
		mapping = {};
	}

	if (options.format && options.format.length) {
		if (options.format[0] !== '.') {
			options.format = '.' + options.format;
		}

		path2 = path += options.format;
	} else {
		path2 = path + '/?';
	}

	if (routes[method][path]) {
		throw new Error('Duplication error: "' + method.toUpperCase() + ' ' + path + '" already exists in Voyage');
	}

	if (path.indexOf(':') === -1) {
		routes[method][path] = {
			mapping: mapping,
			options: options
		};

		return;
	}

	path2	= path2.replace(/\./g, '\\.');
	dummy	= path.match(/:[^\/:?.]+/g);

	if (dummy && dummy.length) {
		dummy.forEach(function (item) {
			path2 = path2.replace(item, function () {
				var key		= item.substr(1),
					regexp	= options.constraints && options.constraints[key];
	
				if (
					regexp &&
					!regexp.global && !regexp.ignoreCase && !regexp.multiline &&
					!regexp.source.match(/(^|[^\[])\^/g) && !regexp.source.match(/\$/g)
				) {
					delete options.constraints[key];
					return '(' + regexp.source + ')';
				} else if (key in special) {
					return '(' + special[key] + ')';
				} else {
					return '([^\/]+)';
				}
			});
		});
	}

	path2 = new RegExp('^' + path2 + '$');

	routes[method][path] = {
		search: path2,
		mapping: mapping,
		options: options,
		params: dummy
	};
}

/**
 * Resolve Server, should only be used when Voyage.map() mappings are functions
 * Sample Usage:
 * 	Voyage.get('/', function (req, resp, mapping) { console.log('Someone visited!'); });
 * 	http.createServer(Voyage.resolveServer).listen(80);
 */
function resolveServer(req, resp) {
	var route = Voyage.resolve(req);

	if (route && route.mapping.fn) {
		route.mapping.fn(req, resp, route);
	} else if (route) {
		configs.log('Missed route for ' + req.url + ': ' + JSON.stringify(route));
	} else {
		configs.log('No route for: ' + req.url);
	}
}

/**
 * Resolve a Request
 * Usage: Voyage.resolve(req[, onMatch[, callback]])
 *
 * req ClientRequest|Object ClientRequest object or standard object (minimum {method: '...', url: '...'})
 * onMatch Function Called when a route is a possible map to URL. (ie. function (route, callback) { callback(true); })
 * callback Function Only necessary when onMatch is async
 */
function resolve(req, onMatch, callback) {
	var matched	= false,
		method	= req.method.toLowerCase(),
		req_url	= url.parse(req.url),
		path	= req_url.pathname.replace(/.\/$/g, '$1');

	if (!routes[method]) {
		return callback(false);
	}

	req_url.query	= configs.qs.parse(req_url.query);
	onMatch			= typeof onMatch === 'function' && onMatch || false;
	callback		= typeof callback === 'function' && callback || function () {};

	// Exact matches have ultimate priority
	if (path in routes[method]) {
		matched					= _clone(routes[method][path]);
		matched.url				= req_url;
		matched.mapping.params	= [];

		callback(matched);
		return matched;
	}

	_asyncSeries(routes[method], function (route, next) {
		var passed, parsed;

		if (route.search && route.search.test(path)) {
			parsed = _clone(route);
			passed = path.match(route.search).slice(1).every(function (mapping, j) {
				var name = route.params[j].substr(1);

				if (parsed.mapping[name]) { // do not override
					parsed.mapping['_' + name] = mapping; // but lets make sure we know about it
				} else {
					parsed.mapping[name] = mapping;
				}

				if (route.options.constraints && route.options.constraints[name]) {
					return route.options.constraints[name].test(mapping);
				}

				return true;
			});

			if (!Array.isArray(parsed.mapping.params)) {
				parsed.mapping.params = (parsed.mapping.params || '').split(/\//);

				if (parsed.mapping.params.length === 1 && parsed.mapping.params[0] === '') {
					parsed.mapping.params.shift();
				}
			}

			if (!passed) {
				return next();
			}

			delete parsed.params;

			if (onMatch) {
				onMatch(parsed, function (result) {
					if (result === true) {
						matched = parsed;
					}

					next(); // continue (routes placed later on have a higher ranking)
				});
			} else {
				matched = parsed;
				next(); // continue (routes placed later on have a higher ranking)
			}
		} else {
			next();
		}
	}, function () {
		matched.url = req_url;
		callback(matched);
	});

	if (!onMatch) {
		return matched;
	}
}

function parse_url(method, mapping) {
	var i, route, match, keys, possible, in_map;

	if (!mapping) {
		mapping	= method;
		method	= 'get';
	} else {
		method = method.toLowerCase();
	}

	if (mapping.format && mapping.format[0] !== '.') {
		mapping.format = '.' + mapping.format;
	}

	keys = Object.keys(mapping);

	for (i in routes[method]) {
		route	= routes[method][i];
		in_map	= Object.keys(route.mapping);

		if (keys.length === in_map.length && (!route.params || !route.params.length)) {
			possible = in_map.every(function (key) {
				return key in keys;
			});

			if (possible) {
				match = i;
				break; // Exact matches have ultimate priority
			}
		}

		possible = (route.params || []).every(function (param) {
			return param.substr(1) in mapping;
		});

		possible = possible && keys.every(function (key) {
			return mapping[key] === route.mapping[key] || (route.params || []).indexOf(':' + key) >= 0;
		});

		if (possible) {
			keys.forEach(function (key) {
				i = i.replace(':' + key, mapping[key]);
			});

			possible = !routes.search || route.search.test(i);

			if (possible && route.options.constraints) {
				possible = Object.keys(route.options.constraints).every(function (key) {
					return mapping[key] && route.options.constraints[key].test(mapping[key]);
				});
			}

			if (possible) {
				match = i;
			}
		}
	}

	if (match) {
		return match.replace(/[*\/]+$/, '');
	}
}

function _mapHelper(method) {
	return function (path, mapping, options) {
		Voyage.map(method, path, mapping, options);
	};
}

function _resource(method, path, base, action, mapping, only) {
	if (only && only.indexOf(action) < 0) return;

	mapping				= _clone(mapping) || {};
	mapping.controller	= mapping.controller || base;
	mapping.action		= action;

	Voyage[method](path, mapping, {
		resource: base
	});

	if (routes.options && routes.options[path]) {
		routes.options[path].options.allowed = routes.options[path].options.allowed || [];
		routes.options[path].options.allowed.push(method.toUpperCase());
	}
}

function _asyncSeries(obj, each, last) {
	var keys = Object.keys(obj);

	if (!keys.length) {
		return last();
	}

	function next() {
		var item = obj[keys.shift()];

		each(item, function () {
			if (keys.length) {
				next();
			} else {
				last();
			}
		});
	}

	next();
}

function _clone(source) {
	var i,
		clone = {};

	for (i in source) {
		if (source.hasOwnProperty(i)) {
			if (source[i] && typeof source[i] === 'object') {
				if (source[i].constructor === RegExp) {
					clone[i] = new RegExp(source[i]);
				} else if (Array.isArray(source[i])) {
					clone[i] = source[i].slice();
				} else {
					clone[i] = _clone(source[i]);
				}
			} else {
				clone[i] = source[i];
			}
		}
	}

	return clone;
}
