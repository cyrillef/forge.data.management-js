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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HubResponse', 'model/ForbiddenResponse', 'model/NotFoundResponse', 'model/ProjectsResponse', 'model/HubsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HubResponse'), require('../model/ForbiddenResponse'), require('../model/NotFoundResponse'), require('../model/ProjectsResponse'), require('../model/HubsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeDataManagement) {
      root.ForgeDataManagement = {};
    }
    root.ForgeDataManagement.HubsApi = factory(root.ForgeDataManagement.ApiClient, root.ForgeDataManagement.HubResponse, root.ForgeDataManagement.ForbiddenResponse, root.ForgeDataManagement.NotFoundResponse, root.ForgeDataManagement.ProjectsResponse, root.ForgeDataManagement.HubsResponse);
  }
}(this, function(ApiClient, HubResponse, ForbiddenResponse, NotFoundResponse, ProjectsResponse, HubsResponse) {
  'use strict';

  /**
   * Hubs service.
   * @module api/HubsApi
   */

  /**
   * Constructs a new HubsApi. 
   * @alias module:api/HubsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var ForgeSDK = require('forge-apis');
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.mdClient = new ForgeSDK.HubsApi();
	  this.prjClient = new ForgeSDK.ProjectsApi();
    this.oauth2_access_code = new ForgeSDK.AuthClientThreeLegged('1234', '1223', 'http://localhost/', ['data:read']);

    /**
     * Callback function to receive the result of the getHub operation.
     * @callback module:api/HubsApi~getHubCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HubResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns data on a specific &#x60;hub_id&#x60;. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {module:api/HubsApi~getHubCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HubResponse}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HubResponse}
     */
    this.getHubEndPoint ='/project/v1/hubs/{hub_id}' ;
    this.getHub = function(hubId, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.mdClient.getHub(hubId, oauth, oauth.credentials);
			if (callback === undefined) {
				return (new Promise(function (resolve, reject) {
					pr.then(function (result) { resolve(result.body); })
						.catch(function (err) { reject(err); });
				})) ;
			}

			pr.then(function (result) { callback(null, result.body); })
				.catch(function (err) { callback(err, null); });
    };

    /**
     * Callback function to receive the result of the getHubProjects operation.
     * @callback module:api/HubsApi~getHubProjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a collection of projects for a given &#x60;hub_id&#x60;. A project represents an A360 project or a BIM 360 project which is set up under an A360 hub or BIM 360 account, respectively. Within a hub or an account, multiple projects can be created to be used. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {module:api/HubsApi~getHubProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectsResponse}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectsResponse}
     */
    this.getHubProjectsEndPoint ='/project/v1/hubs/{hub_id}/projects' ;
    this.getHubProjects = function(hubId, opts, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.prjClient.getHubProjects(phubId, opts, oauth, oauth.credentials);
			if (callback === undefined) {
				return (new Promise(function (resolve, reject) {
					pr.then(function (result) { resolve(result.body); })
						.catch(function (err) { reject(err); });
				})) ;
			}

			pr.then(function (result) { callback(null, result.body); })
				.catch(function (err) { callback(err, null); });
    };

    /**
     * Callback function to receive the result of the getHubs operation.
     * @callback module:api/HubsApi~getHubsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HubsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a collection of accessible hubs for this member. A Hub represents an A360 Team/Personal hub or a BIM 360 account. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {module:api/HubsApi~getHubsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HubsResponse}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HubsResponse}
     */
    this.getHubsEndPoint ='/project/v1/hubs' ;
    this.getHubs = function(opts, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.mdClient.getHubs(opts, oauth, oauth.credentials);
			if (callback === undefined) {
				return (new Promise(function (resolve, reject) {
					pr.then(function (result) { resolve(result.body); })
						.catch(function (err) { reject(err); });
				})) ;
			}

			pr.then(function (result) { callback(null, result.body); })
				.catch(function (err) { callback(err, null); });
    };
  };

  return exports;
}));
