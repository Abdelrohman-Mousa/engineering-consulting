import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // الصفحة الرئيسية
    index("routes/home.tsx"),

    // باقي الصفحات
    route("about", "routes/about/About.tsx"),
    route("projects", "routes/projects/Projects.tsx"),
    route("projectsDetails/:id", "routes/pages/ProjectDetails.$id.tsx"),
    route("services", "routes/services/Services.tsx"),
    route("contact", "routes/contact/Contact.tsx"),
    route("signin", "routes/signIn/SignIn.tsx"),

    // ✅ Dashboard (Protected + Layout)
    route("dashboard", "routes/dashboard/_layout.tsx", [
        index("routes/dashboard/index.tsx"),
    ]),

] satisfies RouteConfig;
