import type { AxisModel } from "@syncfusion/ej2-react-charts";

export const userXAxis: AxisModel = {
    valueType: "Category",
    title: "Day",
    majorGridLines: { width: 0 },
    labelStyle: { fontWeight: "500" },
};

export const userYAxis: AxisModel = {
    title: "Users Count",
    minimum: 0,
    majorGridLines: { width: 1 },
    labelStyle: { fontWeight: "500" },
};

// Consulting
export const consultXAxis: AxisModel = {
    valueType: "Category",
    title: "Consulting Styles",
    majorGridLines: { width: 0 },
    labelStyle: { fontWeight: "500" },
};

export const consultYAxis: AxisModel = {
    title: "Consulting Count",
    minimum: 0,
    majorGridLines: { width: 1 },
    labelStyle: { fontWeight: "500" },
};