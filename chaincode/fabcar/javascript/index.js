/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

// const FabCar = require('./lib/fabcar');

// module.exports.FabCar = FabCar;
// module.exports.contracts = [FabCar];

const Farmer_Con = require('./lib/Farmer');
const Farm_Con = require('./lib/Farm');
const Crop_Con = require('./lib/Crop');

module.exports.Farmer_Con = Farmer_Con;
module.exports.Farm_Con = Farm_Con;
module.exports.Crop_Con = Crop_Con;
module.exports.contracts = [Farmer_Con, Farm_Con, Crop_Con];