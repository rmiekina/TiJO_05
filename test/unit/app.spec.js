describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return true when bla bla ', function () {
            expect(app.generateMessage("Aga")).toEqual({vowel: 2, palindrome: true});
        });

         it('should return false when bla bla ', function () {
             expect(app.generateMessage("Agnieszka")).toEqual({vowel: 4, palindrome: false});
    });

    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });
});

