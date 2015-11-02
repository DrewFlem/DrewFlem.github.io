'use strict';

/**
 * @ngdoc function
 * @name slideshowApp.controller:Slide00Ctrl
 * @description
 * # Slide00Ctrl
 * Controller of the slideshowApp
 */
angular.module('slideshowApp')
  .controller('Slide00Ctrl', function ($scope) {
    // Directions for use:
    // Left Click - go deeper into table
    // Right Click - climb higher in table

    // weights: Availibity Target
    var weights = [
        ['ACH Transmissions', 99.5],
        ['ATC Homepage', 99.95],
        ['ATC Mobile', 99.95],
        ['ATC SYC', 99.95],
        ['ATX', 99.95],
        ['Customer Care Media', 99.95],
        ['Customer Care', 99.5],
        ['Dealer Site', 99.95],
        ['EBS', 99.5],
        ['ECR', 99.5],
        ['Financial Systems', 99.5],
        ['FTP Sterling', 99.5],
        ['Fuel', 99.5],
        ['HomeNet', 99.5],
        ['HomeNet Login', 99.5],
        ['KBB Classifieds', 99.5],
        ['KBB Control Modes', 99.5],
        ['KBB Home', 99.5],
        ['KBB InfoDriver', 99.5],
        ['KBB KarPower', 99.5],
        ['KBB LeadDriver', 99.5],
        ['KBB Price Advisor', 99.5],
        ['KBB QuickValues', 99.5],
        ['M.power', 99.5],
        ['Manheim Mobile', 99.5],
        ['Manheim.com', 99.5],
        ['OVE.com', 99.5],
        ['RMB', 99.5],
        ['SalesForce', 99.5],
        ['Simulcast', 99.5],
        ['Simulcast Everywhere', 99.5],
        ['Simulcast Mobile', 99.5],
        ['vAuto Composite', 99.5],
        ['vAuto RealDeal', 99.5],
        ['VinS Dealer Site', 99.5],
        ['VinS Login', 99.5]
    ];

    var dataConfig = [
        ['Business Unit', 'Parent', 'Relative Importance (size)', 'Availability (color)'],

        ['Media', null, null, null],
        ['Software', null, null, null],
        ['Enterprise', null, null, null],
        ['Auctions', null, null, null]
    ];

    var rawData = [
        ['ACH Transmissions', 'Auctions', 4, 100],
        ['ATC Homepage', 'Media', 10, 99.91318182],
        ['ATC Mobile', 'Media', 7, 99.88272727],
        ['ATC SYC', 'Media', 5, 99.94136364],
        ['ATX', 'Media', 5, 99.97863636],
        ['Customer Care Media', 'Media', 6, 99.885],
        ['Customer Care', 'Auctions', 4, 100],
        ['Dealer Site', 'Media', 8, 99.82727273],
        ['EBS', 'Enterprise', 6, 100],
        ['ECR', 'Auctions', 4, 100],
        ['Financial Systems', 'Auctions', 4, 100],
        ['FTP Sterling', 'Auctions', 4, 100],
        ['Fuel', 'Enterprise', 4, 99.83318182],
        ['HomeNet', 'Software', 10, 99.985],
        ['HomeNet Login', 'Software', 10, 99.94590909],
        ['KBB Classifieds', 'Media', 9, 98.99090909],
        ['KBB Control Modes', 'Media', 8, 99.23954545],
        ['KBB Home', 'Media', 10, 99.095],
        ['KBB InfoDriver', 'Media', 5, 99.40818182],
        ['KBB KarPower', 'Media', 5, 99.75],
        ['KBB LeadDriver', 'Media', 5, 99.32318182],
        ['KBB Price Advisor', 'Media', 5, 98.73909091],
        ['KBB QuickValues', 'Media', 5, 99.81545455],
        ['M.power', 'Auctions', 10, 100],
        ['Manheim Mobile', 'Auctions', 7, 100],
        ['Manheim.com', 'Auctions', 10, 100],
        ['OVE.com', 'Auctions', 10, 99.88590909],
        ['RMB', 'Enterprise', 5, 100],
        ['SalesForce', 'Enterprise', 6, 99.83181818],
        ['Simulcast', 'Auctions', 9, 99.84181818],
        ['Simulcast Everywhere', 'Auctions', 8, 100],
        ['Simulcast Mobile', 'Auctions', 5, 100],
        ['vAuto Composite', 'Software', 10, 99.88727273],
        ['vAuto RealDeal', 'Software', 10, 99.87863636],
        ['VinS Dealer Site', 'Software', 10, 99.82772727],
        ['VinS Login', 'Software', 5, 99.72681818]
    ];

    function getWeightedData(weights, rawData) {
        var minAvail = 10000;
        var maxAvail = 0;

        var weightedArray = rawData.map(function(buInfo) {
            var i = 0;
            var weightAvail = null;

            while (i < weights.length) {
                if (weights[i][0] === buInfo[0]) {
                    weightAvail = weights[i][1];
                    break;
                }
                i += 1;
            }

            if (weightAvail === null) {
                return buInfo;
            } else {
                var weightedAvail = buInfo[3]/weightAvail;

                if (weightedAvail > maxAvail) {
                    maxAvail = weightedAvail;
                }
                if (weightedAvail < minAvail) {
                    minAvail = weightedAvail;
                }

                return [buInfo[0], buInfo[1], buInfo[2], weightedAvail];
            }
        });

        var adjustedValues = weightedArray.map(function(weighted) {
            if (weighted[3] !== null && typeof weighted[3] !== 'string') {
                var adjAvail = (((weighted[3] - minAvail) * (100 - 10)) / (maxAvail - minAvail)) + 10;

            	return [weighted[0], weighted[1], weighted[2], adjAvail];
            } else {
                return weighted;
            }
        });

        return adjustedValues;
    }

    var data = getWeightedData(weights, rawData);

    var dataGroups = {};
    for (var i = 1; i < (dataConfig.length); i++) {
        dataGroups[dataConfig[i][0]] = [];
        dataGroups[dataConfig[i][0]].push(dataConfig[0]);
        dataGroups[dataConfig[i][0]].push(dataConfig[i]);
    }

    for (var j = 0; j < data.length; j++) {
        dataGroups[data[j][1]].push(data[j]);
    }

    function displayData(dataGroups) {
        var i = 0;
        for (var data in dataGroups) {
            if (dataGroups.hasOwnProperty(data)) {
                i++;
                $scope['chartObject' + i] = {
                    "type": "TreeMap",
                    "displayed": true,
                    "data": dataGroups[data],
                    "options": {
                        minColor: '#e7711c',
                        midColor: '#fff',
                        maxColor: '#4374e0',
                        showScale: true,
                        height: 425,
                        width: '100%'
                    },
                    "formatters": {}
                };
            }
        }
    }

    displayData(dataGroups);
});
