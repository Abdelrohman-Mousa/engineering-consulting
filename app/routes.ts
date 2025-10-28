import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // الصفحة الرئيسية
    index("routes/home.tsx"),

    // باقي الصفحات
    route("about", "routes/about/About.tsx"),
    route("projects", "routes/projects/Projects.tsx"),
    route("services", "routes/services/Services.tsx"),
    route("contact", "routes/contact/Contact.tsx"),
    route("signin", "routes/signIn/SignIn.tsx"),


] satisfies RouteConfig;
