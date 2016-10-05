#!/usr/bin/env node
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

var program = require('commander');
var colorsTmpl = require('colors-tmpl');
var packageJson = require('./package.json');

program
  .version(packageJson.version)
  .usage(colorsTmpl('[options] <command> [command-options] [command-args]' +
                    '\n\t {bold}iothub-explorer help <command>{/bold} will print command-specific help'))
  .command('login', 'Start a session on your IoT Hub')
  .command('logout', 'Terminate the current temporary session on your IoT Hub')
  .command('list', 'List the device identities currently in your IoT Hub device registry')
  .command('create <device-id|device-json>', 'Create a device identity in your IoT Hub device registry')
  .command('delete <device-id>', 'Delete a device identity from your IoT Hub device registry')
  .command('get <device-id>', 'Get a device identity from your IoT Hub device registry')
  .command('import-devices', 'Import device identities in bulk: local file -> azure blob storage -> iothub')
  .command('export-devices', 'Export device identities in bulk: iothub -> azure blob storage -> local file')
  .command('send <device-id> <message>', 'Sends a message to device (cloud-to-device/C2D)')
  .command('monitor-feedback', 'Monitor feedback sent by devices to acknowledge cloud-to-device (C2D) messages.')
  .command('monitor-events [device-id]', 'Listens to events coming from devices (or one in particular).')
  .command('monitor-uploads', 'Monitor the file upload notifications endpoint')
  .command('monitor-ops', 'Listens to the operations monitoring endpoint of your IoT Hub instance')
  .command('sas-token <device-id>', 'Generates a SAS Token for the given device')
  .command('simulate-device <device-id>', 'Simulates a device with the specified id.')
  .parse(process.argv);