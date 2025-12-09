function myPlot1() { //Split Violin plots
    d3.csv("https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/HL_before_DMI_Violin.csv", function (err, rows) { 
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        const trace1 = {
            type: 'violin',
            x: unpack(rows, 'mouse_group'),
            y: unpack(rows, 'half_life'),
            
            legendgroup: 'Ctrl',
            scalegroup: 'Ctrl',
            name: 'Ctrl',
            side: 'negative',
            points: 'all',
            jitter: 0.2, // small value make data points closer
            pointpos: -1.2, //position for the scatter points away from violin plot
            marker: {
                color: 'rgba(179, 245, 233, 100)',
                line: {
                    color: 'rgba(141, 211, 199, 100)',
                    width: 1,
                },
                symbol: 'circle',
                size: 5,
            },
            
            box: {
                visible: true
            },
            line: {
                color: 'rgba(56, 209, 183, 100)',
                width: 2,
            },
            meanline: {
                visible: true,
                color: 'orange',
            },
            fillcolor: 'rgba(179, 245, 233, 100)',
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'condition'),
                operation: '=',
                value: 'Ctrl'
            }],
        };
        console.log(trace1);


        const trace2 = {
            type: 'violin',
            x: unpack(rows, 'mouse_group'),
            y: unpack(rows, 'half_life'),
            legendgroup: 'ISO',
            scalegroup: 'ISO',
            name: 'ISO',
            side: 'positive',
            points: 'all',
            jitter: 0.2, // small value make data points closer
            pointpos: 1.2,
            marker: {
                color: 'rgba(236, 172, 93, 0.6)',
                line: {
                    color: 'rgba(244, 139, 10, 0.6)',
                    width: 1,
                },
                symbol: 'circle',
                size: 5,
            },
            
            box: {
                visible: true
            },
            line: {
                color: 'rgba(244, 139, 10, 0.6)',
                width: 2,
            },
            meanline: {
                visible: true,
                color: 'green',
            },
            fillcolor: 'rgba(236, 172, 93, 0.6)',
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'condition'),
                operation: '=',
                value: 'ISO', 
            }],
        };
        console.log(trace2);

        const data = [trace1, trace2]
        const layout = {
            responsive: true,
            showlegend: true,
            title: {
                text: "Split Violin Plot"
            },
            xaxis: {
                title: {
                    text: '6 Genetic Strains of Mice'
                },
                zeroline: true,
            },
            yaxis: {
                title: {
                    text: 'Half-Lives (Day)'
                },
                zeroline: true,
            },
            violingap: 0,
            violingroupgap: 0.5,
            violinmode: 'overlay',
        }

        const config = {
            toImageButtonOptions: {
                format: 'svg', // one of png, svg, jpeg, webp
                filename: 'custom_image',
                height: 500,
                width: 1000,
                scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
            }
        }

        Plotly.newPlot('myDiv1', data, layout, config);
    })
}

function myPlot2() { //Split Violin plots
    d3.csv("https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/C57BL6_Ctrl_ISO_RS_HLs.csv", function (err, rows) { 
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        const trace1 = {
            type: 'violin',
            x: unpack(rows, 'comparison'),
            y: unpack(rows, 'log_value_HL'),
            
            legendgroup: 'Group 1',
            scalegroup: 'Group 1',
            name: 'Group 1',
            side: 'negative',
            points: 'all',
            jitter: 0.3, // small value make data points closer
            pointpos: -1.4, //position for the scatter points away from violin plot
            marker: {
                color: 'rgba(179, 245, 233, 100)',
                line: {
                    color: 'rgba(141, 211, 199, 100)',
                    width: 1,
                },
                symbol: 'circle',
                size: 3,
            },
            
            box: {
                visible: true
            },
            line: {
                color: 'rgba(56, 209, 183, 100)',
                width: 1,
            },
            meanline: {
                visible: true,
                color: 'orange',
            },
            fillcolor: 'rgba(179, 245, 233, 100)',
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'group'),
                operation: '=',
                value: 'group_1'
            }],
        };
        console.log(trace1);


        const trace2 = {
            type: 'violin',
            x: unpack(rows, 'comparison'),
            y: unpack(rows, 'log_value_HL'),
            legendgroup: 'Group 2',
            scalegroup: 'Group 2',
            name: 'Group 2',
            side: 'positive',
            points: 'all',
            jitter: 0.3, // small value make data points closer
            pointpos: 1.4, 
            marker: {
                color: 'rgba(190, 186, 218, 0.9)',
                line: {
                    color: 'rgba(192, 131, 239, 0.6)',
                    width: 1,
                },
                symbol: 'circle',
                size: 3,
            },
            
            box: {
                visible: true
            },
            line: {
                color: 'rgba(160, 46, 248, 0.6)',
                width: 1,
            },
            meanline: {
                visible: true,
                color: 'Orange',
            },
            fillcolor: 'rgba(190, 186, 218, 0.9)',
            transforms: [{
                type: 'filter',
                target: unpack(rows, 'group'),
                operation: '=',
                value: 'group_2', 
            }],
        };
        console.log(trace2);

        const data = [trace1, trace2]
        const layout = {
            responsive: true,
            showlegend: true,
            title: {
                text: "Split Violin Plot"
            },
            xaxis: {
                title: {
                    text: 'Comparison of 3 Mouse Groups'
                },
                zeroline: true,
            },
            yaxis: {
                title: {
                    text: 'Log10(Half-Life)'
                },
                zeroline: true,
            },
            violingap: 0,
            violingroupgap: 0.6,
            violinmode: 'overlay',
        }

        const config = {
            toImageButtonOptions: {
                format: 'svg', // one of png, svg, jpeg, webp
                filename: 'custom_image',
                height: 500,
                width: 1000,
                scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
            }
        }

        Plotly.newPlot('myDiv2', data, layout, config);
    })
}

function myPlot3() { //Histogram of Log Value of Half-Lives.
    d3.csv("https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/C57BL6_Ctrl_OS_RS_HLs_log10.csv", function (err, rows) { 
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        var x1 = unpack(rows, 'ctrl_log_10_HL');
        var x2 = unpack(rows, 'os_log_10_HL');
        var x3 = unpack (rows, 'rs_log_10_HL')
        var y1 = unpack(rows, 'ctrl_uniprot');
        var y2 = unpack(rows, 'os_uniprot');
        var y3 = unpack (rows, 'rs_uniprot')
        console.log(x1, x2, x3, y1, y2, y3)
       
        const trace1 = {
            type: 'histogram',
            x: x1,
            //y: y1
            name: 'Control',
            autobinx: false,
            histnorm:"count",
            marker: {
                color: "rgba(100, 255, 229, 0.7)",
                 line: {
                  color:  "rgba(11, 163, 115, 0.7)",
                  width: 1
                }
              },
              opacity: 0.5,
              type: "histogram",
              xbins: {
                start: -0.5,
                end: 2.0,
                size: 0.02,
              }
        };
        console.log(trace1);


        const trace2 = {
            type: 'histogram',
            x: x2,
            //y: y1
            name: 'Oxidative Stress',
            autobinx: false,
            histnorm:"count",
            marker: {
                color: "rgba(244, 174, 88, 0.5)",
                 line: {
                  color:  "rgba(210, 143, 18, 0.9)",
                  width: 1
                }
              },
              opacity: 0.5,
              type: "histogram",
              xbins: {
                start: -0.5,
                end: 2.0,
                size: 0.02,
                
              }
        };
       
        console.log(trace2);
        const trace3 = {
            type: 'histogram',
            x: x3,
            //y: y1
            name: 'Reductive Stress',
            autobinx: false,
            histnorm:"count",
            marker: {
                color: "rgba(100, 255, 103, 0.7)",
                 line: {
                  color:  "rgba(58, 201, 18, 0.7)",
                  width: 1
                }
              },
              opacity: 0.5,
              type: "histogram",
              xbins: {
                start: -0.5,
                end: 2.0,
                size: 0.02,
              }
        };
        console.log(trace3);



        var data = [trace1, trace2, trace3];
        var layout = {
            bargap: 0,
            bargroupgap: 0,
            barmode: "overlay",
            title: {
              text: "Histogram of Half-Lives in 3 Mouse Groups"
            },
            xaxis: {
                title: {
                    text: "Log10 (Half-Life) Values"
                }
            },
            yaxis: {
                title: {
                    text: "Protein Counts"
                }
            }
        };
        const config = {
            toImageButtonOptions: {
                format: 'svg', // one of png, svg, jpeg, webp
                filename: 'custom_image',
                height: 500,
                width: 1000,
                scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
            }
        };

        Plotly.newPlot('myDiv3', data, layout, config);
    })
}

function myPlot4() { //Histogram of Protein Half-Lives (Days).
    d3.csv("https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/C57BL6_Ctrl_OS_RS_HLs_log10.csv", function (err, rows) { 
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }
        var x1 = unpack(rows, 'ctrl_half_life');
        var x2 = unpack(rows, 'os_half_life');
        var x3 = unpack (rows, 'rs_half_life')
        var y1 = unpack(rows, 'ctrl_uniprot');
        var y2 = unpack(rows, 'os_uniprot');
        var y3 = unpack (rows, 'rs_uniprot')
        console.log(x1, x2, x3, y1, y2, y3)
       
        const trace1 = {
            type: 'histogram',
            x: x1,
            //y: y1
            name: 'Control',
            autobinx: false,
            histnorm:"count",
            marker: {
                color: "rgba(124, 206, 233, 0.7)",
                 line: {
                  color:  "rgba(11, 120, 163, 0.7)",
                  width: 1
                }
              },
              opacity: 0.7,
              type: "histogram",
              xbins: {
                start: -5,
                end: 60.0,
                size: 0.3,
              }
        };
        console.log(trace1);


        const trace2 = {
            type: 'histogram',
            x: x2,
            //y: y2
            name: 'Oxidative Stress',
            autobinx: false,
            histnorm:"count",
            marker: {
                color: "rgba(244, 174, 88, 0.5)",
                 line: {
                  color:  "rgba(210, 143, 18, 0.9)",
                  width: 1
                }
              },
              opacity: 0.7,
              type: "histogram",
              xbins: {
                start: -5,
                end: 60.0,
                size: 0.3,
                
              }
        };
        console.log(trace2);
        const trace3 = {
            type: 'histogram',
            x: x3,
            //y: y3
            name: 'Reductive Stress',
            autobinx: false,
            histnorm:"count",
            marker: {
                color: "rgba(203, 255, 100, 0.7)",
                 line: {
                  color:  "rgba(58, 201, 18, 0.7)",
                  width: 1
                }
              },
              opacity: 0.7,
              type: "histogram",
              xbins: {
                start: -5,
                end: 60.0,
                size: 0.3,
              }
        };
        console.log(trace3);



        var data = [trace1, trace2, trace3];
        var layout = {
            bargap: 0,
            bargroupgap: 0,
            barmode: "overlay",
            title: {
              text: "Histogram of Half-Lives in 3 Mouse Groups"
            },
            xaxis1: {
                title: {
                    text: "Protein Half-Lives (Day)"
                }
            },
            yaxis: {
                title: {
                    text: "Protein Counts"
                }
            }
        };
        const config = {
            toImageButtonOptions: {
                format: 'svg', // one of png, svg, jpeg, webp
                filename: 'custom_image',
                height: 500,
                width: 1000,
                scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
            }
        };

        Plotly.newPlot('myDiv4', data, layout, config);
    })
}

function myPlot5() {
    d3.csv("https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/C57BL6_Ctrl_OS_RS_HLs_log10.csv", 
    function (err, rows) { 
        if (err) throw err;

        function unpack(rows, key) {
            return rows.map(function(row) { return parseFloat(row[key]); });
        }

        const data1 = unpack(rows, 'ctrl_log_10_HL');
        const data2 = unpack(rows, 'os_log_10_HL');
        const data3 = unpack(rows, 'rs_log_10_HL');

        const trace1 = {
            type: 'histogram',
            x: data1,
            name: 'Control',
            marker: { color: "rgba(124, 206, 233, 0.7)", line: { color: "rgba(11, 120, 163, 0.7)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -0.5, end: 2, size: 0.02 },
            xaxis: 'x',
            yaxis: 'y'
        };

        const trace2 = {
            type: 'histogram',
            x: data2,
            name: 'Oxidative Stress',
            marker: { color: "rgba(244, 174, 88, 0.5)", line: { color: "rgba(210, 143, 18, 0.9)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -0.5, end: 2, size: 0.02 },
            xaxis: 'x2',
            yaxis: 'y2'
        };

        const trace3 = {
            type: 'histogram',
            x: data3,
            name: 'Reductive Stress',
            marker: { color: "rgba(203, 255, 100, 0.7)", line: { color: "rgba(58, 201, 18, 0.7)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -0.5, end: 2, size: 0.02 },
            xaxis: 'x3',
            yaxis: 'y3'
        };

        const layout = {
            title: 'Protein Half-Life Distributions under 3 Different Conditions',
            grid: {
                rows: 3,
                columns: 1,
                pattern: 'independent',
                roworder: 'top to bottom'
            },
            height: 800,
            margin: { t: 80, l: 60, r: 30, b: 80 },
            showlegend: true,

            // --- X-axes (only show bottom title) ---
            xaxis:  { range: [-0.5, 2], showticklabels: true, title: '' },
            xaxis2: { range: [-0.5, 2], showticklabels: true, title: '' },
            xaxis3: { range: [-0.5, 2], title: 'Protein Half-Lives (in Log10 Values) ' }, // bottom one only

            // --- Y-axes ---
            yaxis:  { title: 'Protein Counts' },
            yaxis2: { title: 'Protein Counts' },
            yaxis3: { title: 'Protein Counts' }
        };


        const config = {
            toImageButtonOptions: {
                format: 'svg',
                filename: 'protein_half_life_histograms',
                height: 800,
                width: 900,
                scale: 1
            }
        };

        Plotly.newPlot('myDiv5', [trace1, trace2, trace3], layout, config);
    });
}



function myPlot6() {
    d3.csv("https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/C57BL6_Ctrl_OS_RS_HLs_log10.csv", 
    function (err, rows) { 
        if (err) throw err;

        function unpack(rows, key) {
            return rows.map(function(row) { return parseFloat(row[key]); });
        }

        const data1 = unpack(rows, 'ctrl_half_life');
        const data2 = unpack(rows, 'os_half_life');
        const data3 = unpack(rows, 'rs_half_life');

        const trace1 = {
            type: 'histogram',
            x: data1,
            name: 'Control',
            marker: { color: "rgba(124, 206, 233, 0.7)", line: { color: "rgba(11, 120, 163, 0.7)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -10, end: 60, size: 0.3 },
            xaxis: 'x',
            yaxis: 'y'
        };

        const trace2 = {
            type: 'histogram',
            x: data2,
            name: 'Oxidative Stress',
            marker: { color: "rgba(244, 174, 88, 0.5)", line: { color: "rgba(210, 143, 18, 0.9)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -10, end: 60, size: 0.3 },
            xaxis: 'x2',
            yaxis: 'y2'
        };

        const trace3 = {
            type: 'histogram',
            x: data3,
            name: 'Reductive Stress',
            marker: { color: "rgba(203, 255, 100, 0.7)", line: { color: "rgba(58, 201, 18, 0.7)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -10, end: 60, size: 0.3 },
            xaxis: 'x3',
            yaxis: 'y3'
        };

        const layout = {
            title: 'Protein Half-Life Distributions under Different Conditions',
            grid: {
                rows: 3,
                columns: 1,
                pattern: 'independent',
                roworder: 'top to bottom'
            },
            height: 800,
            margin: { t: 80, l: 60, r: 30, b: 80 },
            showlegend: true,

            // --- X-axes (only show bottom title) ---
            xaxis:  { range: [-2, 60], showticklabels: true, title: '' },
            xaxis2: { range: [-2, 60], showticklabels: true, title: '' },
            xaxis3: { range: [-2, 60], title: 'Protein Half-Life (Days)' }, // bottom one only

            // --- Y-axes ---
            yaxis:  { title: 'Protein Counts' },
            yaxis2: { title: 'Protein Counts' },
            yaxis3: { title: 'Protein Counts' }
        };


        const config = {
            toImageButtonOptions: {
                format: 'svg',
                filename: 'protein_half_life_histograms',
                height: 800,
                width: 900,
                scale: 1
            }
        };

        Plotly.newPlot('myDiv6', [trace1, trace2, trace3], layout, config);
    });
}


function myPlot7() {
    d3.csv("https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/C57BL6_Ctrl_OS_RS_HLs_log10.csv",
    function (err, rows) { 
        if (err) throw err;

        function unpack(rows, key) {
            return rows.map(function(row) { return parseFloat(row[key]); }).filter(v => !isNaN(v));
        }

        const data1 = unpack(rows, 'ctrl_half_life');
        const data2 = unpack(rows, 'os_half_life');
        const data3 = unpack(rows, 'rs_half_life');

        // Gaussian Kernel Density Estimation (KDE)
        function kde(data, bandwidth = 0.5, minX = -2, maxX = 55, step = 0.3) {
            const kernel = x => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
            const xs = [];
            const ys = [];
            for (let x = minX; x <= maxX; x += step) {
                const density = data.reduce((sum, xi) => sum + kernel((x - xi) / bandwidth), 0);
                ys.push(density / (data.length * bandwidth));
                xs.push(x);
            }
            return xs.map((x, i) => [x, ys[i]]);
        }

        const trend1 = kde(data1, 0.5);
        const trend2 = kde(data2, 0.5);
        const trend3 = kde(data3, 0.5);

        // compute max histogram count for scaling KDE to same vertical scale
        function findMaxCount(data, binSize = 0.3, minX = -2, maxX = 55) {
            const counts = {};
            data.forEach(v => {
                const bin = Math.floor((v - minX) / binSize);
                counts[bin] = (counts[bin] || 0) + 1;
            });
            return Math.max(...Object.values(counts));
        }

        const max1 = findMaxCount(data1);
        const max2 = findMaxCount(data2);
        const max3 = findMaxCount(data3);

        const scale1 = max1 / Math.max(...trend1.map(d => d[1]));
        const scale2 = max2 / Math.max(...trend2.map(d => d[1]));
        const scale3 = max3 / Math.max(...trend3.map(d => d[1]));

        const trace1 = {
            type: 'histogram',
            x: data1,
            name: 'Control',
            marker: { color: "rgba(124, 206, 233, 0.7)", line: { color: "rgba(11, 120, 163, 0.7)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -2, end: 55, size: 0.3 },
            xaxis: 'x',
            yaxis: 'y'
        };

        const trendTrace1 = {
            type: 'scatter',
            mode: 'lines',
            x: trend1.map(d => d[0]),
            y: trend1.map(d => d[1] * scale1),
            line: { color: 'rgba(11, 120, 163, 1)', width: 2 },
            name: 'Trend (Ctrl)',
            xaxis: 'x',
            yaxis: 'y'
        };

        const trace2 = {
            type: 'histogram',
            x: data2,
            name: 'Oxidative Stress',
            marker: { color: "rgba(244, 174, 88, 0.5)", line: { color: "rgba(210, 143, 18, 0.9)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -2, end: 55, size: 0.3 },
            xaxis: 'x2',
            yaxis: 'y2'
        };

        const trendTrace2 = {
            type: 'scatter',
            mode: 'lines',
            x: trend2.map(d => d[0]),
            y: trend2.map(d => d[1] * scale2),
            line: { color: 'rgba(210, 143, 18, 1)', width: 2 },
            name: 'Trend (OS)',
            xaxis: 'x2',
            yaxis: 'y2'
        };

        const trace3 = {
            type: 'histogram',
            x: data3,
            name: 'Reductive Stress',
            marker: { color: "rgba(203, 255, 100, 0.7)", line: { color: "rgba(58, 201, 18, 0.7)", width: 1 } },
            opacity: 0.7,
            xbins: { start: -2, end: 55, size: 0.3 },
            xaxis: 'x3',
            yaxis: 'y3'
        };

        const trendTrace3 = {
            type: 'scatter',
            mode: 'lines',
            x: trend3.map(d => d[0]),
            y: trend3.map(d => d[1] * scale3),
            line: { color: 'rgba(58, 201, 18, 1)', width: 2 },
            name: 'Trend (RS)',
            xaxis: 'x3',
            yaxis: 'y3'
        };

        const layout = {
            title: 'Protein Half-Life Distributions under Different Conditions',
            grid: { rows: 3, columns: 1, pattern: 'independent', roworder: 'top to bottom' },
            height: 800,
            margin: { t: 80, l: 60, r: 30, b: 80 },
            showlegend: true,

            xaxis:  { range: [-2, 55], title: '' },
            xaxis2: { range: [-2, 55], title: '' },
            xaxis3: { range: [-2, 55], title: 'Protein Half-Life (Days)' },

            yaxis:  { title: 'Count' },
            yaxis2: { title: 'Count' },
            yaxis3: { title: 'Count' }
        };

        const config = {
            toImageButtonOptions: {
                format: 'svg',
                filename: 'protein_half_life_histograms_kde',
                height: 800,
                width: 900,
                scale: 1
            }
        };

        Plotly.newPlot('myDiv7',
            [trace1, trendTrace1, trace2, trendTrace2, trace3, trendTrace3],
            layout,
            config
        );
    });
}

function myPlot8() {

    function unpack(rows, key) {
        return rows.map(r => r[key]);
    }

    d3.csv(
        "https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/Combined%20PTM%20Predictions_Q5S007.csv",
        function(err, rows) {
            if (err) {
                console.error("CSV load error:", err);
                return;
            }

            const uniqueLabels = [...new Set(unpack(rows, "Combined_PTM_Type"))];

            // --- Define custom colors for each group ---
            const colors = [
                "#50af49", "#1f77b4", "#a65728", "ef11ef", 
                "#edaa15", "#15edcd", "#e377c2", "#7f7f7f",
                "#bcbd22", "#17becf"
            ];
            const colorMap = {};
            uniqueLabels.forEach((label, i) => {
                colorMap[label] = colors[i % colors.length]; // cycle if more groups than colors
            });

            const traces = [];

            uniqueLabels.forEach(label => {
                const xGroup = [];
                const yGroup = [];
                rows.forEach(row => {
                    if (row.Combined_PTM_Type === label) {
                        xGroup.push(Number(row.Site_Sequence));
                        yGroup.push(Number(row.Probability_Score));
                    }
                });

                // --- Lollipop stems ---
                xGroup.forEach((xVal, i) => {
                    traces.push({
                        type: "scatter",
                        mode: "lines",
                        x: [xVal, xVal],
                        y: [0, yGroup[i]],
                        line: { color: colorMap[label], width: 2 },
                        showlegend: false,
                        hoverinfo: "none"
                    });
                });

                // --- Lollipop heads ---
                traces.push({
                    type: "scatter",
                    mode: "markers",
                    x: xGroup,
                    y: yGroup,
                    name: label,
                    marker: { size: 9, color: colorMap[label], line: { width: 1 } }
                });
            });

            const allScores = unpack(rows, "Probability_Score").map(Number);
            const layout = {
                title: "PTM Predictions for Q5S007",
                xaxis: {
                    title: "Protein Position (Site_Sequence)",
    
                    showline: true,
                  
                },
                yaxis: {
                    title: "Prediction Probability",
                    range: [0.3, 1],
                    zeroline: false,
                    showline: true,
                    linecolor: 'black',
                    anchor: 'x',
                    position: -1 // Move y-axis left
                },
                margin: { t: 50, l: 60, r: 20, b: 80 }
            };

            Plotly.newPlot("myDiv8", traces, layout);
        }
    );
}
