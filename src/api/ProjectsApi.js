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
    define(['ApiClient', 'model/CreateItem', 'model/CreateStorage', 'model/CreateVersion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateItem'), require('../model/CreateStorage'), require('../model/CreateVersion'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeDataManagement) {
      root.ForgeDataManagement = {};
    }
    root.ForgeDataManagement.ProjectsApi = factory(root.ForgeDataManagement.ApiClient, root.ForgeDataManagement.CreateItem, root.ForgeDataManagement.CreateStorage, root.ForgeDataManagement.CreateVersion);
  }
}(this, function(ApiClient, CreateItem, CreateStorage, CreateVersion) {
  'use strict';

  /**
   * Projects service.
   * @module api/ProjectsApi
   */

  /**
   * Constructs a new ProjectsApi. 
   * @alias module:api/ProjectsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getProject operation.
     * @callback module:api/ProjectsApi~getProjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a project for a given &#x60;project_id&#x60;. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:api/ProjectsApi~getProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getProject = function(hubId, projectId, callback) {
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        throw "Missing the required parameter 'hubId' when calling getProject";
      }

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getProject";
      }


      var pathParams = {
        'hub_id': hubId,
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}/projects/{project_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectHealth operation.
     * @callback module:api/ProjectsApi~getProjectHealthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns health information for the &#x60;project&#x60; domain. The health check assesses the current working status of the &#39;project&#39; domain service. 
     * @param {module:api/ProjectsApi~getProjectHealthCallback} callback The callback function, accepting three arguments: error, data, response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getProjectHealth = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/project/v1/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProjectHub operation.
     * @callback module:api/ProjectsApi~getProjectHubCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the hub for a given &#x60;project_id&#x60;. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:api/ProjectsApi~getProjectHubCallback} callback The callback function, accepting three arguments: error, data, response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getProjectHub = function(hubId, projectId, callback) {
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        throw "Missing the required parameter 'hubId' when calling getProjectHub";
      }

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling getProjectHub";
      }


      var pathParams = {
        'hub_id': hubId,
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}/projects/{project_id}/hub', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postItem operation.
     * @callback module:api/ProjectsApi~postItemCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new item in the &#39;data&#39; domain service. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateItem} body describe the item to be created
     * @param {module:api/ProjectsApi~postItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.postItem = function(projectId, body, callback) {
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling postItem";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling postItem";
      }


      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postStorage operation.
     * @callback module:api/ProjectsApi~postStorageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a storage location in the OSS where data can be uploaded to. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateStorage} body describe the file the storage is created for
     * @param {module:api/ProjectsApi~postStorageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.postStorage = function(projectId, body, callback) {
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling postStorage";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling postStorage";
      }


      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/storage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postVersion operation.
     * @callback module:api/ProjectsApi~postVersionCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new version of an item in the &#39;data&#39; domain service. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateVersion} body describe the version to be created
     * @param {module:api/ProjectsApi~postVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    this.postVersion = function(projectId, body, callback) {
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        throw "Missing the required parameter 'projectId' when calling postVersion";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling postVersion";
      }


      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_access_code'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/versions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
