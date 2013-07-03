/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
  var app = require('./app');

  app.initialize();

  var orientation = window.cordova.require('cordova/plugin/firefoxos/orientation');
  var notification = window.cordova.require('cordova/plugin/firefoxos/notification');

  function vibrate() {
    notification.vibrate(100);
  }

  function getOrientation() {
    alert(orientation.getCurrentOrientation());
  };
  var button = document.getElementById('getOrientationButton');
  button.addEventListener('click', getOrientation, false);
  var button = document.getElementById('vibrateButton');
  button.addEventListener('click', vibrate, false);
});
