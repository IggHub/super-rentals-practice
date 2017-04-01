import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('show', {path: '/:rental_id'});
  });
  this.route('favorites', {path: '/favs'}, function() {
    this.route('donut');
  });
  this.route('not-found', {path: '/*'});
});

export default Router;
