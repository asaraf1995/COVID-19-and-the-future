var monthDict = {
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October"
  };

  var stateDict = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

var data = {
    'all': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -5.26, -2.58, -5.22, -7.69, -8.14, -5.4, -7.89],
        ['Productivity', -17.5, -9.15, -11.3, -0.72, -3.05, 2.42, 0]
    ],
    'AK': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 100, 0, 0, 0, -100, 0, 0]
    ],
    'AL': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, -12.5, 0, 0],
        ['Productivity', 0, 50, -100, 0, -12.5, 0, 0]
    ],
    'AR': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 25, 50, 0, 0, 0, 0, 0]
    ],
    'AZ': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -5.49, 0, 0, -8.33, -4.18, -14.29, -10],
        ['Productivity', -11.37, -26.47, 25, 0.24, -3.48, 0, -10]
    ],
    'CA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -11.11, 0, 0, -9.15, -9.42, -4.35, -3.57],
        ['Productivity', -19.19, -5.38, 0, 0.44, -7.62, -2.17, 25]
    ],
    'CO': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -25, 0, 0, -6.94, -12.3, -0, -11.43],
        ['Productivity', 8.33, 9.09, 0, 9.83, -7.14, 0, 2.86]
    ],
    'CT': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, -25, 0, 0],
        ['Productivity', -60, 0, 0, 0, 25, 0, 0]
    ],
    'DC': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -4.17, 0, -16.67, 0],
        ['Productivity', -42.86, 7.69, -50, -12.5, -33.33, 0, -100]
    ],
    'DE': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', -50, 0, 0, 0, 0, 0, 0]
    ],
    'FL': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -7.69, 0, 0, -7.35, -20, -1.79, -50],
        ['Productivity', 0, -33.33, 37.5, 1.28, -4, 7.14, 0]
    ],
    'GA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -8.33, -5.95, -2.86, -16.67],
        ['Productivity', -40, 0, -33.33, -7.94, 1.19, 0, -33.33]
    ],
    'HI': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 0, -100, 0, -50, 0, 0, 0]
    ],
    'IA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, -25, 0, 0],
        ['Productivity', 0, -100, 0, 11.11, 0, 0, 0]
    ],
    'ID': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, -15.38, 0, 0],
        ['Productivity', -20, 0, 0, -8.33, -3.85, 0, 0]
    ],
    'IL': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -4, 0, 0, -7.62, -5, -8.57, -17.65],
        ['Productivity', -12, -30, 0, 0.91, -12.5, 8.57, -5.88]
    ],
    'IN': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -5.13, -8.33, 0, 0],
        ['Productivity', -25, -66.67, 0, 0, 0, 0, 0]
    ],
    'KS': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -8.33, -7.41, -33.33, 0],
        ['Productivity', 0, 0, 0, -2.08, 8, 0, -25]
    ],
    'KY': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, -10, 0, 0],
        ['Productivity', 0, 0, 0, -33.33, 10, 0, 0]
    ],
    'LA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -8.82, -4.48, -12.5, -16.67],
        ['Productivity', 0, -100, 0, -5.88, -10.45, 25, 0]
    ],
    'MA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, -14.29, -7.51, 0, 0, 0],
        ['Productivity', -23.33, 5.88, -28.57, -0.58, 75, 15.79, -21.43]
    ],
    'MD': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, -10, 0, -4.67, -5.56, -5.56, 0],
        ['Productivity', -50, 10, -41.67, -0.47, 0, 0, -25]
    ],
    'ME': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, -100, 0, 0, 0, 0],
        ['Productivity', 0, 0, 0, 0, -16.67, 0, 0]
    ],
    'MI': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -9.17, -11.59, -4.55, 0],
        ['Productivity', 0, 9.09, 0, 1.38, -2.17, -9.09, -12.5]
    ],
    'MN': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, -15.38, 0, -8.56, 0, -16.67, -10],
        ['Productivity', -25, -7.69, 0, -3.21, 6.25, -8.33, 0]
    ],
    'MO': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -16.9, -9.3, -17.65, 0],
        ['Productivity', 0, -20, 0, -7.04, 0, 23.53, 100]
    ],
    'MS': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, -10, 0, 0],
        ['Productivity', 0, 0, 0, 0, -20, 0, 0]
    ],
    'MT': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 22.22, 0, 0, 25, -50, 0, 0]
    ],
    'NC': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, -6.67, -6.9, -4.31, -0, 0],
        ['Productivity', 0, -25, 20, -1.72, -4.31, -8, 0]
    ],
    'ND': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 0, 0, 0, 0, 0, 0, 0]
    ],
    'NE': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', -100, 0, 0, -66.67, 100, 0, 0]
    ],
    'NH': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -5, -20, -20, 0],
        ['Productivity', -100, -100, 0, 5, 0, 0, -100]
    ],
    'NJ': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -15.83, 0, -25, -9.09, 0, -13.04, 0],
        ['Productivity', -30.77, 0, -25, 2.73, -33.33, 0, -100]
    ],
    'NM': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 0, -25, 0, -60, 0, 0, 0]
    ],
    'NV': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -10.2, -20, -8.33, 0],
        ['Productivity', 0, 100, 0, -2.72, -10, -8.33, 0]
    ],
    'NY': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 5.88, -9.38, 0, -7.19, -9.64, -6.25, -11.76],
        ['Productivity', -17.65, -9.38, -17.65, -1.37, 8.43, 15.62, 0]
    ],
    'OH': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -5.94, -16, -5, 0],
        ['Productivity', -16.67, 20, 0, -2.97, -8, 0, 20]
    ],
    'OK': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, -25, 0, 0],
        ['Productivity', 0, 0, 0, 0, 25, 0, 0]
    ],
    'OR': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -8.33, 0, 0, -13.27, -5.21, 0, 0],
        ['Productivity', -25, -26.67, 0, -5.1, -6.25, -22.22, 0]
    ],
    'PA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, -6.25, 0, -3.85, 0, 0, 0],
        ['Productivity', -42.11, 12.5, -66.67, 19.23, -4.76, 0, 0]
    ],
    'PR': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 0, 0, -100, 0, 0, 0, 0]
    ],
    'RI': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 0, 0, 0, 0, 0, 0, 0]
    ],
    'SC': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 10, 0, 0],
        ['Productivity', 0, 0, 0, 0, 20, 0, 0]
    ],
    'SD': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 0, 0, 0, 0, 0, -100, 0]
    ],
    'TN': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -7.69, -10.53, 0, 0],
        ['Productivity', -25, 50, 0, 7.69, -5.26, 0, 0]
    ],
    'TX': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -6.25, -8.64, 0, -10],
        ['Productivity', -16.67, -14.29, 0, -3.94, 0, 2.56, 30]
    ],
    'UT': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 100, -6.45, -4.69, 0, 0],
        ['Productivity', -33.33, -25, 0, 3.23, -1.56, 66.67, 11.11]
    ],
    'VA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, -3.7, 7.14, -12.5, 0],
        ['Productivity', -16.67, -20, -50, 3.7, 42.86, -12.5, 0]
    ],
    'VT': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, -100, 0, 0, 0, 0],
        ['Productivity', -55.56, 0, 0, -100, 100, 0, 0]
    ],
    'WA': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', -8.16, -11.76, 0, -5.88, -7.89, 0, 0],
        ['Productivity', -22.45, -35.29, 0, 0, 0, 0, 0]
    ],
    'WI': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, -22.22, 0, -15, -8.33, 0, 0],
        ['Productivity', 0, -11.11, 0, 25, -25, 0, 0]
    ],
    'WV': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 50, -22.22, 0, 0],
        ['Productivity', -100, 0, 0, 50, 22.22, 0, 100]
    ],
    'WY': [
        ['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        ['Employment', 0, 0, 0, 0, 0, 0, 0],
        ['Productivity', 0, 0, 0, 0, 0, 0, 0]
    ]
};

$(function () {
    function drawChart(state1, state2) {

        var state;
        if (typeof state2 !== "undefined") {
            state = state1 + '_' + state2;
        } else {
            state = state1;
        }

        if (state.length === 2 || state === 'all') {
        var chart = c3.generate({
            bindto: "#barchart",
            data: {
            x : 'x',
            columns: eval(data[state]),
            type: 'area',
            types: {
                Productivity: 'area',
            }, 
            colors: {
                Employment: '#1f77b3',
                Productivity: '#ff7f0f'
            }
            },
            bar: {
            width: {
                ratio: 0.25
            }
            },
            axis: {
            x: {
                type: 'category'
            }
            },
            grid: {
            y: {
                lines: [{value:0}]
            }
            },
            tooltip: {
            format: {
                title: function (d) { 
                return monthDict[d + 4]; 
                },
                value: function (value) {
                return value + '%';
                }
            }
            },
            legend: {
            position: 'right'
            }
        });
        } 
        else if (state.length > 2 && state !== 'all') {
            var s1 = data[state.substring(0, 2)];
            var s2 = data[state.substring(3, 5)];
            var d = [['x', 'April', 'May', 'June', 'July', 'August', 'September', 'October']];
            d.push(['EmpS1'].concat(s1[1].slice(1, 8)));
            d.push(['ProdS1'].concat(s1[2].slice(1, 8)));
            d.push(['EmpS2'].concat(s2[1].slice(1, 8)));
            d.push(['ProdS2'].concat(s2[2].slice(1, 8)));
            var state_name = d;
            var chart = c3.generate({
                bindto: "#barchart",
                data: {
                x : 'x',
                columns: eval(state_name),
                type: 'area',
                types: {
                    ProdS1: 'area',
                    ProdS2: 'area'
                }, 
                colors: {
                    EmpS1: '#1f77b3',
                    EmpS2: '#ff7f0f',
                    ProdS1: '#144c72',
                    ProdS2: '#c25a00'
                },
                names: {
                    EmpS1: 'Employment - ' + stateDict[state.substring(0, 2)],
                    EmpS2: 'Employment - ' + stateDict[state.substring(3, 5)],
                    ProdS1: 'Productivity - ' + stateDict[state.substring(0, 2)],
                    ProdS2: 'Productivity - ' + stateDict[state.substring(3, 5)]
                },
                groups: [
                    ['EmpS1', 'EmpS2']
                ]
                },
                bar: {
                width: {
                    ratio: 0.25
                }
                },
                axis: {
                x: {
                    type: 'category'
                }
                },
                grid: {
                y: {
                    lines: [{value:0}]
                }
                },
                tooltip: {
                format: {
                    title: function (d) { 
                    return monthDict[d + 4]; 
                    },
                    value: function (value) {
                    return value + '%';
                    }
                }
                },
                legend: {
                position: 'right'
                }
            });
        }
    }
    drawChart('IL', 'NY');
});