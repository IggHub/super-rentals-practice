import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals-practice/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

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

test('should list available rentals', function(assert){
});

test('should filter the list of rentals by city', function(assert){
});

test('should show details for a selected rental', function(assert){
});
