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
    define(['ApiClient', 'model/VersionResponse', 'model/BadInputResponse', 'model/ForbiddenResponse', 'model/NotFoundResponse', 'model/ItemResponse', 'model/JsonApiCollection', 'model/RefsResponse', 'model/CreateRef'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VersionResponse'), require('../model/BadInputResponse'), require('../model/ForbiddenResponse'), require('../model/NotFoundResponse'), require('../model/ItemResponse'), require('../model/JsonApiCollection'), require('../model/RefsResponse'), require('../model/CreateRef'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeDataManagement) {
      root.ForgeDataManagement = {};
    }
    root.ForgeDataManagement.VersionsApi = factory(root.ForgeDataManagement.ApiClient, root.ForgeDataManagement.VersionResponse, root.ForgeDataManagement.BadInputResponse, root.ForgeDataManagement.ForbiddenResponse, root.ForgeDataManagement.NotFoundResponse, root.ForgeDataManagement.ItemResponse, root.ForgeDataManagement.JsonApiCollection, root.ForgeDataManagement.RefsResponse, root.ForgeDataManagement.CreateRef);
  }
}(this, function(ApiClient, VersionResponse, BadInputResponse, ForbiddenResponse, NotFoundResponse, ItemResponse, JsonApiCollection, RefsResponse, CreateRef) {
  'use strict';

  /**
   * Versions service.
   * @module api/VersionsApi
   */

  /**
   * Constructs a new VersionsApi. 
   * @alias module:api/VersionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var ForgeSDK = require('forge-apis');
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.mdClient = new ForgeSDK.VersionsApi();
    this.oauth2_access_code = new ForgeSDK.AuthClientThreeLegged('1234', '1223', 'http://localhost/', ['data:read']);

    /**
     * Callback function to receive the result of the getVersion operation.
     * @callback module:api/VersionsApi~getVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the version with the given &#x60;version_id&#x60;. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {module:api/VersionsApi~getVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionResponse}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VersionResponse}
     */
    this.getVersionEndPoint ='/data/v1/projects/{project_id}/versions/{version_id}' ;
    this.getVersion = function(projectId, versionId, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.mdClient.getVersion(projectId, versionId, oauth, oauth.credentials);
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
     * Callback function to receive the result of the getVersionItem operation.
     * @callback module:api/VersionsApi~getVersionItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the item the given version is associated with. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {module:api/VersionsApi~getVersionItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemResponse}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemResponse}
     */
    this.getVersionItemEndPoint ='/data/v1/projects/{project_id}/versions/{version_id}/item' ;
    this.getVersionItem = function(projectId, versionId, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.mdClient.getVersionItem(projectId, versionId, oauth, oauth.credentials);
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
     * Callback function to receive the result of the getVersionRefs operation.
     * @callback module:api/VersionsApi~getVersionRefsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonApiCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {module:api/VersionsApi~getVersionRefsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonApiCollection}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JsonApiCollection}
     */
    this.getVersionRefsEndPoint ='/data/v1/projects/{project_id}/versions/{version_id}/refs' ;
    this.getVersionRefs = function(projectId, versionId, opts, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.mdClient.getVersionRefs(projectId, versionId, opts, oauth, oauth.credentials);
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
     * Callback function to receive the result of the getVersionRelationshipsRefs operation.
     * @callback module:api/VersionsApi~getVersionRelationshipsRefsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RefsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the custom relationships that are associated to the given &#x60;version_id&#x60;. Custom relationships can be established between a version of an item and other resources within the &#39;data&#39; domain service (folders, items, and versions). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterType filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterId filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target
     * @param {Array.<String>} opts.filterRefType filter by &#x60;refType&#x60;
     * @param {module:model/String} opts.filterDirection filter by the direction of the reference
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * @param {module:api/VersionsApi~getVersionRelationshipsRefsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RefsResponse}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RefsResponse}
     */
    this.getVersionRelationshipsRefsEndPoint ='/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs' ;
    this.getVersionRelationshipsRefs = function(projectId, versionId, opts, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.mdClient.getVersionRelationshipsRefs(projectId, versionId, opts, oauth, oauth.credentials);
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
     * Callback function to receive the result of the postVersionRelationshipsRef operation.
     * @callback module:api/VersionsApi~postVersionRelationshipsRefCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a custom relationship between a version and another resource within the &#39;data&#39; domain service (folder, item, or version). 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {String} versionId the &#x60;version id&#x60;
     * @param {module:model/CreateRef} body describe the ref to be created
     * @param {module:api/VersionsApi~postVersionRelationshipsRefCallback} callback The callback function, accepting three arguments: error, data, response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.postVersionRelationshipsRefEndPoint ='/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs' ;
    this.postVersionRelationshipsRef = function(projectId, versionId, body, callback) {
			//this.apiClient.applyToAuthObjects (this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']) ;
			var oauth = this.apiClient.getAuthObject(this.oauth2_access_code, this.oauth2_application, ['oauth2_access_code']);
			var pr = this.mdClient.postVersionRelationshipsRef(projectId, versionId, oauth, oauth.credentials);
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
