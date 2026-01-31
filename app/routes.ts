import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // الصفحة الرئيسية
    index("routes/home.tsx"),

    // باقي الصفحات
    route("about", "routes/about/About.tsx"),
    route("projects", "routes/projects/Projects.tsx"),
    route("projectsDetails/:id", "routes/pages/ProjectDetails.$id.tsx"),
    route("consultationRequest", "routes/consultationRequest/ConsultationRequest.tsx"),
    route("contact", "routes/contact/Contact.tsx"),
    route("signin", "routes/signIn/SignIn.tsx"),

    // ✅ Dashboard Layout
    route("dashboard", "routes/dashboard/index.tsx", [
        index("routes/dashboard/dashboard-overview/PageOverview.tsx"),
        route("messages", "routes/dashboard/messages/MessageContact.tsx"),
        route("users", "routes/dashboard/users/Users.tsx"),
        route("consulting", "routes/dashboard/consultation-requests/ConsultationRequests.tsx"),
    ]),

] satisfies RouteConfig;
