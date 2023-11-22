var should	= require('should'),
	Voyage	= require('../lib/voyage.js');

/*
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
*/

describe('Voyage', function () {
	describe('Mapping', function () {
		it('should map "GET /:controller/:action" to any controller and action', function () {
			Voyage.map('get', '/:controller/:action');
			Voyage.routes.get.should.have.property('/:controller/:action');
		});

		it('should throw a duplication error when a duplicate route is created', function () {
			(function () {
				Voyage.get('/:controller/:action');
			}).should.throw();
		});
	});

	describe('Fetch routes', function () {
		it('should have "GET /:controller/:action" in routes list', function () {
			Voyage.routes.get.should.have.property('/:controller/:action');
		});
	});

	describe('Dropping Voyages', function () {
		it('should be able to drop "GET /:controller/:action" from the routes list', function () {
			Voyage.drop('get', '/:controller/:action');
			Voyage.routes.get.should.eql({});
		});
	});

	describe('Restful Resources', function () {
		it('should map all restful resources based on "Accounts" as the base', function () {
			Voyage.resource('accounts');

			Voyage.routes.head.should.have.property('/accounts');
			Voyage.routes.get.should.have.property('/accounts');
			Voyage.routes.post.should.have.property('/accounts');
			Voyage.routes.options.should.have.property('/accounts');

			Voyage.routes.head.should.have.property('/accounts/:id');
			Voyage.routes.get.should.have.property('/accounts/:id');
			Voyage.routes.put.should.have.property('/accounts/:id');
			Voyage.routes.patch.should.have.property('/accounts/:id');
			Voyage.routes.delete.should.have.property('/accounts/:id');
			Voyage.routes.options.should.have.property('/accounts/:id');
		});

		it('should have an OPTIONS route with a correct list of "allowed" HTTP methods that can be perform on each resource path', function () {
			Voyage.routes.options.should.have.property('/accounts');
			Voyage.routes.options['/accounts'].options.should.have.property('allowed');
			Voyage.routes.options['/accounts'].options.allowed.should.eql(['OPTIONS', 'HEAD', 'GET', 'POST']);

			Voyage.routes.options.should.have.property('/accounts/:id');
			Voyage.routes.options['/accounts/:id'].options.should.have.property('allowed');
			Voyage.routes.options['/accounts/:id'].options.allowed.should.eql(['OPTIONS', 'HEAD', 'GET', 'PUT', 'PATCH', 'DELETE']);
		});

		it('should be able to add resources to specified HTTP methods only', function () {
			Voyage.resource('comments', null, ['create']);

			Voyage.routes.post.should.have.property('/comments');

			Voyage.routes.head.should.not.have.property('/comments');
			Voyage.routes.get.should.not.have.property('/comments');
			Voyage.routes.options.should.not.have.property('/comments');

			Voyage.routes.head.should.not.have.property('/comments/:id');
			Voyage.routes.get.should.not.have.property('/comments/:id');
			Voyage.routes.put.should.not.have.property('/comments/:id');
			Voyage.routes.patch.should.not.have.property('/comments/:id');
			Voyage.routes.delete.should.not.have.property('/comments/:id');
			Voyage.routes.options.should.not.have.property('/comments/:id');
		});
	});

	describe('Reverse Routing', function () {
		it('should return "/accounts" when given a map with "{controller: "accounts", action: "index"}"', function () {
			Voyage.url({controller: 'accounts', action: 'index'}).should.equal('/accounts');
		});
	});

	describe('Resolver', function () {
		it('should return a map with "{controller: "accounts", action: "index", params: []}" when "GET /accounts" is requested', function () {
			var resolved = Voyage.resolve({
				method: 'GET',
				url: 'http://example.com/accounts'
			});

			resolved.mapping.should.eql({
				controller: 'accounts',
				action: 'index',
				params: []
			}, 'An extra property was probably added to the mapping during save/resolve');
		});
	});
});
