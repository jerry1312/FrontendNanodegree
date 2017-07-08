/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        //cecks all feeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //check all feeds have url and ins't null
        it('Has url defined and not null', function() {
            for(var i=0; i < allFeeds.length; i++){
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url.length > 0).toBe(true);
            }
        });


        // checks all feed have name and isn't null
        it("Has name and isn't null", function() {
          for(var i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length > 0).toBe(true);
          }
        });
    });


    //New test suites named "The menu"
    describe("The menu", function() {

       //Test to entries that the menu hidden by default
        it("check menu element hidden by default", function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Test to ensure that the menu appear and hidden.
        it('check menu display/hide on click', function() {
         // Trigger event on menu
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
         // Trigger event on menu
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });
    });

    //A new test suites named "Initial Entries"
    describe("Initial Entries", function() {

       // Call loadFeed() for initial entries
       
       beforeEach(function(done) {
          loadFeed(0, done);
       });

       //checks for atleast single entry in feed container
       it('Have a Single Entry', function(done) {
          expect($('.feed .entry').length > 0).toBe(true);
          done();
        });
    });


      // A new test suite named "New Feed Selection"
    describe("New Feed Selection", function(){
        var oldfeed;
        var newfeed;

       //beforeEach wait for async calls to finish
        beforeEach(function(done) {
            //Load the first feed
            loadFeed(0 ,function() {
              //Save content of feed to variable
              oldfeed = $('.feed').html();
              //Load second feed
              loadFeed(1, function() {
                //Save contentof feed to variable
                newfeed = $('.feed').html();
                done();
              });
            });
        });

        //Test to ensure that content are different
        it('feed changes content at reload' , function() {
           expect(oldfeed).not.toEqual(newfeed);
        });
    });

}());
