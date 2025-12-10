function myPlot1() {

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
                "#50af49", "#1f77b4", "#a65728", "#ef11ef", 
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

            Plotly.newPlot("myDiv1", traces, layout);
        }
    );
}
