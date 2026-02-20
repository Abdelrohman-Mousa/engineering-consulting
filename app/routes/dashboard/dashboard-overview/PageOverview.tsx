import "./page-overview.scss";
import StatsCard from "~/components/stats-card/StatsCard";
import { useEffect, useState } from "react";
import { getDashboardStats } from "/src/auth/dashboard";
import CircularIndeterminate from "~/components/CircularIndeterminate";
import {userXAxis, userYAxis, consultXAxis, consultYAxis} from "~/constants";
import {
    Category,
    ChartComponent,
    ColumnSeries,
    DataLabel,
    SeriesCollectionDirective,
    SeriesDirective,
    SplineAreaSeries,
    Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Inject } from "@syncfusion/ej2-react-grids";
import {getUserGrowthPerDay, getConsultGrowthPerDay} from "../../../../src/auth/graph";


const PageOverview = () => {

    const [dashboardStats, setDashboardStats] = useState<any>(null);
    const [userGrowth, setUserGrowth] = useState<any[]>([]);

    const [consultGrowth, setConsultGrowth] = useState<any[]>([]);

    useEffect(() => {
        const fetchStats = async () => {
            const data = await getDashboardStats();
            setDashboardStats(data);
        };
        fetchStats();
    }, []);

    // Graph
    useEffect(() => {
        getUserGrowthPerDay().then(setUserGrowth);
        getConsultGrowthPerDay().then(setConsultGrowth);

    }, []);

    if (!dashboardStats) {
        return <CircularIndeterminate />;
    }


    const {totalUsers, usersJoined, totalConsultations, requestConsulting, activeUsers} = dashboardStats;

    return (
        <div className="page-overview">
            <div className="title-overview">
              <h1>Welcome to the Dashboard</h1>
              <p>Here you can monitor key data, review incoming requests, and manage messages and consultations efficiently from one place.</p>
            </div>

            <section className="flex flex-col gap-6 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Total Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Consultations"
                        total={totalConsultations}
                        currentMonthCount={requestConsulting.currentMonth}
                        lastMonthCount={requestConsulting.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Active Users"
                        total={activeUsers.total}
                        currentMonthCount={activeUsers.currentMonth}
                        lastMonthCount={activeUsers.lastMonth}
                    />

                </div>
            </section>
           {/*=====================================================*/}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <ChartComponent
                    id="chart-1"
                    primaryXAxis={userXAxis}
                    primaryYAxis={userYAxis}
                    title="User Growth"
                    tooltip={{ enable: true }}
                    legendSettings={{ visible: false }}
                >
                    <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip ]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={userGrowth}
                            xName="day"
                            yName="count"
                            type="Column"
                            name="Column"
                            columnWidth={0.3}
                            cornerRadius={{ topLeft: 10, topRight: 10 }}
                            marker={{
                                dataLabel: {
                                    visible: true,
                                    position: "Top",
                                    font: { fontWeight: "500", color: "#16406a" }
                                }
                            }}

                        />
                        <SeriesDirective
                            dataSource={userGrowth}
                            xName="day"
                            yName="count"
                            type="SplineArea"
                            name="Wave"
                            fill="rgba(71, 132, 238, 0.3)"
                            border={{ width: 2, color: '#4784EE' }}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>

                {/*==================Consulting================*/}
                <ChartComponent
                    id="chart-2"
                    primaryXAxis={consultXAxis}
                    primaryYAxis={consultYAxis}
                    title="Consultations"
                    tooltip={{ enable: true }}
                    legendSettings={{ visible: false }}
                >
                    <Inject services={[ColumnSeries, SplineAreaSeries, Category, DataLabel, Tooltip]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={consultGrowth}
                            xName="day"
                            yName="count"
                            type="Column"
                            name="Column"
                            columnWidth={0.3}
                            cornerRadius={{ topLeft: 10, topRight: 10 }}
                            marker={{
                                dataLabel: {
                                    visible: true,
                                    position: "Top",
                                    font: { fontWeight: "500", color: "#16406a" }
                                }
                            }}

                        />
                        <SeriesDirective
                            dataSource={consultGrowth}
                            xName="day"
                            yName="count"
                            type="SplineArea"
                            name="Wave"
                            fill="rgba(71, 132, 238, 0.3)"
                            border={{ width: 2, color: '#4784EE' }}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </section>
        </div>
    )
}
export default PageOverview
