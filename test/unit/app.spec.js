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
            beforeAll(function (){
                spyOn(app, 'isPalindrome');
                app.isPalindrome('Aga');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('Aga');
            });

        });

        describe('and.callThrough', function () {
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('Aga');
            });
            it('should call isPalindrome function' + 'when call generateMessage function ', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('Aga');
            });
        });

        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome function and return true', function() {
                temp = app.isPalindrome('Aga');
                expect(wynik).toBe(true);
            });
            it('should call generateMessage and isPalindrome functions and return true', function() {
                temp = app.generateMessage('Aga');
                expect(temp).toEqual({vowel: 2, palindrome: true});
            });
        });
        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.returnValue(false);
            });
            it('should call isPalindrome function and return false', function() {
                temp = app.isPalindrome('Agnieszka');
                expect(wynik).toBe(false);
            });
            it('should call generateMessage and isPalindrome functions and return false', function() {
                temp = app.generateMessage('Aga');
                expect(temp).toEqual({vowel: 4, palindrome: false});
            });
        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function (){
                spyOn(app, 'vowelCount');
                app.vowelCount('Aga');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('Aga');
            });
        });

        describe('and.callThrough', function () {
            eforeAll(function (){
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('Aga');
            });
            it('should call vowelCount function' + 'when call generateMessage function ', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('Aga');
            });
        });

        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it('should call vowelCount function and return true', function() {
                temp = app.vowelCount('Aga');
                expect(temp).toBe(2);
            });
            it('should call generateMessage and vowelCount functions and return 2', function() {
                temp = app.generateMessage('Aga');
                expect(temp).toEqual({vowel: 2, palindrome: true});
            });
        });
        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'vowelCount').and.returnValue(4);
            });
            it('should call vowelCount function and return false', function() {
                temp = app.vowelCount('Agnieszka');
                expect(temp).toBe(4);
            });
            it('should call generateMessage and vowelCount functions and return 4', function() {
                temp = app.generateMessage('Agnieszka');
                expect(temp).toEqual({vowel: 4, palindrome: false});
            });
        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });
});

