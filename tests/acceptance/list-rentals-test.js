import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals-practice/tests/helpers/module-for-acceptance';
import Ember from 'ember';

let StubMapsService = Ember.Service.extend({
  getMapElement() {
    return document.createElement('div');
  }
});

moduleForAcceptance('Acceptance | list rentals', {
  beforeEach() {
    this.application.register('service:stubMaps', StubMapsService);
    this.application.inject('component:location-map', 'maps', 'service:stubMaps');
  }
});
test('should show rentals as the home page', function(assert){
  visit('/');
  andThen(function(){
    assert.equal(currentURL(), '/rentals', 'should redirect automagically');
  })
});

test('should link the information to company', function(assert){
  visit('/');
  click('a:contains("About")');
  andThen(function(){
    assert.equal(currentURL(), '/about', 'should link to about page');
  })
});

test('should link to contact information', function(assert){
  visit('/');
  click('a:contains("Contact")');
  andThen(function(){
    assert.equal(currentURL(), '/contact', 'should link to contact page');
  })
});

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(function(){
    assert.equal(find('.listing').length, 3, 'should list the correct number of model array length');
  })
});

test('should filter the list of rentals by city', function(assert){
  visit('/');
  fillIn('.list-filter input', 'Seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function(){
    assert.equal(find('.listing').length, 1, 'should list the correct rental based off query');
    assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'Contains 1 listing with Seattle as location');
  })
});

test('should show details for a selected rental', function(assert){
  visit('/rentals');
  click('a:contains("Grand Old Mansion")');
  andThen(function(){
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to new route");
    assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", "should list rental title");
    assert.equal(find('.description').length, 1, "list description of property");
  })
});
