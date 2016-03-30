/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var scatterHover = require('../scatter/hover');


module.exports = function hoverPoints(pointData, xval, yval, hovermode) {
    var scatterPointData = scatterHover(pointData, xval, yval, hovermode);
    if(!scatterPointData || scatterPointData[0].index === false) return;

    var newPointData = scatterPointData[0],
        cdi = newPointData.cd[newPointData.index];

    newPointData.a = cdi.a;
    newPointData.b = cdi.b;
    newPointData.c = cdi.c;

    // TODO: how to actually display a, b, and c?
};
