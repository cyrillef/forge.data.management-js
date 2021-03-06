/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ForgeDataManagement);
  }
}(this, function(expect, ForgeDataManagement) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ForgeDataManagement.ItemsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ItemsApi', function() {
    describe('getDataHealth', function() {
      it('should call getDataHealth successfully', function(done) {
        //uncomment below and update the code to test getDataHealth
        //instance.getDataHealth(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItem', function() {
      it('should call getItem successfully', function(done) {
        //uncomment below and update the code to test getItem
        //instance.getItem(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemParentFolder', function() {
      it('should call getItemParentFolder successfully', function(done) {
        //uncomment below and update the code to test getItemParentFolder
        //instance.getItemParentFolder(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemRefs', function() {
      it('should call getItemRefs successfully', function(done) {
        //uncomment below and update the code to test getItemRefs
        //instance.getItemRefs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemRelationshipsRefs', function() {
      it('should call getItemRelationshipsRefs successfully', function(done) {
        //uncomment below and update the code to test getItemRelationshipsRefs
        //instance.getItemRelationshipsRefs(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemTip', function() {
      it('should call getItemTip successfully', function(done) {
        //uncomment below and update the code to test getItemTip
        //instance.getItemTip(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getItemVersions', function() {
      it('should call getItemVersions successfully', function(done) {
        //uncomment below and update the code to test getItemVersions
        //instance.getItemVersions(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postItemRelationshipsRef', function() {
      it('should call postItemRelationshipsRef successfully', function(done) {
        //uncomment below and update the code to test postItemRelationshipsRef
        //instance.postItemRelationshipsRef(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
