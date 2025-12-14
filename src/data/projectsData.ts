import project1 from "/assets/images/ModernVilla.jpg";
import project2 from "/assets/images/InteriorDesign.jpg";
import project3 from "/assets/images/SteelStructure.jpg";
import project4 from "/assets/images/project4.jpg";
import project5 from "/assets/images/FoodFactory.jpg";
import project6 from "/assets/images/project6.jpg";
import project7 from "/assets/images/project7.jpg";
import project8 from "/assets/images/project8.jpg";
import project9 from "/assets/images/project9.jpg";
import project10 from "/assets/images/project10.jpg";
import project11 from "/assets/images/project11.jpg";
import project12 from "/assets/images/project12.jpg";
import project13 from "/assets/images/project13.jpg";
import project14 from "/assets/images/project14.jpg";
import project15 from "/assets/images/project15.jpg";
import supervisor_img_1 from "/assets/images/eng_1.jpg";
import supervisor_img_2 from "/assets/images/eng_2.jpg";
import supervisor_img_3 from "/assets/images/eng_3.jpg";
import supervisor_img_4 from "/assets/images/eng_4.jpg";
import supervisor_img_5 from "/assets/images/eng_5.jpg";
import supervisor_img_6 from "/assets/images/eng_6.jpg";

const projectsData = [

    {
        id: 1,
        name: "Modern Villa",
        category: "Residential",
        image: project1,
        description: "A modern residential villa project with luxury finishing.",
        client: "private Project",
        location: "Cairo, Egypt",
        projectSupervisor_img_1: supervisor_img_2,
        projectSupervisor_img_2: supervisor_img_1,
        projectSupervisor_img_3: supervisor_img_3,
        projectSupervisor_name_1: "Eng. Ahmed Samir",
        projectSupervisor_name_2: "Eng. Omar Khaled",
        projectSupervisor_name_3: "Eng. Sara Adel",
        projectSupervisor_role_1: "Project Manager ",
        projectSupervisor_role_2: "Senior Structural Engineer",
        projectSupervisor_role_3: "Quality Control Engineer",
        big_Description: "This project focuses on delivering a complete engineering solution that includes site evaluation, architectural planning, and structural design. The work covers preparing accurate drawings, ensuring compliance with engineering standards, and providing technical guidance throughout the project's development. Our goal was to create a balanced design that combines functionality, safety, and visual harmony while addressing the client’s specific requirements. Through careful analysis and modern engineering practices, we ensured that the project is both efficient and durable, offering high performance and long-term stability."
    },
    {
        id: 2,
        name: "Interior Design",
        category: "Commercial",
        image: project2,
        description: "Interior design project for a modern office.",
        client: "Elite Business Co.",
        location: "New Cairo, Egypt",

        projectSupervisor_img_1: supervisor_img_1,
        projectSupervisor_img_2: supervisor_img_2,
        projectSupervisor_img_3: supervisor_img_3,

        projectSupervisor_name_1: "Eng. Ahmed Fathy",
        projectSupervisor_name_2: "Eng. Kareem Tarek",
        projectSupervisor_name_3: "Eng. Sarah Mostafa",

        projectSupervisor_role_1: "Lead Interior Designer",
        projectSupervisor_role_2: "Lighting & Materials Specialist",
        projectSupervisor_role_3: "Execution & Finishing Supervisor",

        big_Description:
            "This commercial interior design project focuses on creating a functional and visually appealing office space. The team worked on space planning, furniture layout, lighting design, and material selection to achieve a modern and productive work environment. The project ensures that the space aligns with the client's branding and operational needs while maintaining comfort and high-quality finishing.",
    },

    {
        id: 3,
        name: "Steel Structure",
        category: "Interior Design",
        image: project3,
        description: "Steel framework project for industrial building.",
        client: "Industrial Engineering Co.",
        location: "6th of October City, Egypt",

        projectSupervisor_img_1: supervisor_img_3,
        projectSupervisor_img_2: supervisor_img_2,
        projectSupervisor_img_3: supervisor_img_1,

        projectSupervisor_name_1: "Eng. Dina Osama",
        projectSupervisor_name_2: "Eng. Hossam Abdelrazek",
        projectSupervisor_name_3: "Eng. Mahmoud Reda",

        projectSupervisor_role_1: "Structural Design Lead",
        projectSupervisor_role_2: "Steel Detailing Engineer",
        projectSupervisor_role_3: "Site Erection Supervisor",

        big_Description:
            "The project involves designing and implementing a complete steel structure system for an industrial facility. It includes load analysis, structural modeling, fabrication drawings, and supervising the on-site erection process. The goal is to deliver a durable, safe, and highly stable steel framework capable of supporting heavy industrial operations.",
    },

    {
        id: 4,
        name: "Landscape Project",
        category: "Renovation",
        image: project4,
        description: "Renovation and landscaping for a residential garden.",
        client: "Green Life Homes",
        location: "Alexandria, Egypt",

        projectSupervisor_img_1: supervisor_img_2,
        projectSupervisor_img_2: supervisor_img_3,
        projectSupervisor_img_3: supervisor_img_1,

        projectSupervisor_name_1: "Eng. Abdelrohman Marei",
        projectSupervisor_name_2: "Eng. Nesma Adel",
        projectSupervisor_name_3: "Eng. Youssef Saeed",

        projectSupervisor_role_1: "Landscape Architect",
        projectSupervisor_role_2: "Planting & Irrigation Specialist",
        projectSupervisor_role_3: "Site Implementation Engineer",

        big_Description:
            "This landscape renovation project transforms a residential outdoor area into a functional and visually appealing garden space. The work includes softscape selection, hardscape elements, lighting planning, and modern irrigation solutions. The focus is to create a balanced environment that combines aesthetics, comfort, and sustainability while meeting the client's lifestyle needs.",
    },

    {
        id: 5,
        name: "Food Factory",
        category: "3D Visualization",
        image: project5,
        description: "3D visualization for an industrial food factory.",
        client: "Global Food Industries",
        location: "Ismailia, Egypt",

        projectSupervisor_img_1: supervisor_img_1,
        projectSupervisor_img_2: supervisor_img_3,
        projectSupervisor_img_3: supervisor_img_2,

        projectSupervisor_name_1: "Eng. Tamer Hassan",
        projectSupervisor_name_2: "Eng. Nourhan Emad",
        projectSupervisor_name_3: "Eng. Alaa Mohamed",

        projectSupervisor_role_1: "3D Visualization Lead",
        projectSupervisor_role_2: "Industrial Layout Engineer",
        projectSupervisor_role_3: "Quality & Compliance Supervisor",

        big_Description:
            "This project includes producing high-quality 3D visualizations for an industrial food production facility. It showcases accurate layouts, machinery placement, workflow optimization, and material flow paths. The objective is to help the client visualize the complete factory design before execution, ensuring functional efficiency and compliance with food industry standards.",
    },
    {
        id: 6,
        name: "Luxury Apartment Interior",
        category: "Commercial", // نفس فئة المشروع 2
        image: project6,
        description: "High-end interior design for a premium apartment.",
        client: "Skyline Properties",
        location: "Dubai, UAE",

        projectSupervisor_img_1: supervisor_img_3,
        projectSupervisor_img_2: supervisor_img_1,
        projectSupervisor_img_3: supervisor_img_5,

        projectSupervisor_name_1: "Eng. Lina Fares",
        projectSupervisor_name_2: "Eng. Karim Mansour",
        projectSupervisor_name_3: "Eng. Reem Hossam",

        projectSupervisor_role_1: "Interior Architect",
        projectSupervisor_role_2: "Material & Lighting Specialist",
        projectSupervisor_role_3: "Execution Supervisor",

        big_Description:
            "This project delivers a luxurious interior design concept for a high-end apartment. The team focused on premium materials, customized furniture, and modern lighting solutions to create a sophisticated living space tailored to the client's lifestyle. The design ensures comfort, elegance, and functionality.",
    },

    {
        id: 7,
        name: "Industrial Steel Hangar",
        category: "Interior Design", // نفس فئة المشروع 3
        image: project7,
        description: "Steel hangar construction for industrial storage.",
        client: "Mega Logistics Group",
        location: "Jeddah, Saudi Arabia",

        projectSupervisor_img_1: supervisor_img_2,
        projectSupervisor_img_2: supervisor_img_3,
        projectSupervisor_img_3: supervisor_img_1,

        projectSupervisor_name_1: "Eng. Wael Mostafa",
        projectSupervisor_name_2: "Eng. Hana El-Sherif",
        projectSupervisor_name_3: "Eng. Ayman Yasser",

        projectSupervisor_role_1: "Lead Structural Engineer",
        projectSupervisor_role_2: "Steel Detailing Specialist",
        projectSupervisor_role_3: "On-site Supervisor",

        big_Description:
            "The project includes the design and construction of a steel hangar used for industrial storage. It features heavy-duty structural members, precision steel detailing, and an efficient load-bearing design. The hangar ensures stability, safety, and long-term performance under industrial operations.",
    },

    {
        id: 8,
        name: "Luxury Landscape Renovation",
        category: "Renovation", // نفس فئة المشروع 4
        image: project8,
        description: "Full renovation of a high-end landscape area.",
        client: "Palm Green Resorts",
        location: "Sharm El Sheikh, Egypt",

        projectSupervisor_img_1: supervisor_img_5,
        projectSupervisor_img_2: supervisor_img_4,
        projectSupervisor_img_3: supervisor_img_6,

        projectSupervisor_name_1: "Eng. Amira Khaled",
        projectSupervisor_name_2: "Eng. Yassin Mahmoud",
        projectSupervisor_name_3: "Eng. Lobna Hassan",

        projectSupervisor_role_1: "Landscape Architect",
        projectSupervisor_role_2: "Irrigation & Softscape Designer",
        projectSupervisor_role_3: "Implementation Supervisor",

        big_Description:
            "This landscape renovation focuses on creating a luxurious outdoor environment with modern hardscape elements, water features, and eco-friendly irrigation systems. The team worked on enhancing the outdoor experience while ensuring long-term sustainability and visual harmony.",
    },

    {
        id: 9,
        name: "Frozen Food Factory Visualization",
        category: "3D Visualization", // نفس فئة المشروع 5
        image: project9,
        description: "Full 3D visualization for a frozen food facility.",
        client: "ColdTech Industries",
        location: "Riyadh, Saudi Arabia",

        projectSupervisor_img_1: supervisor_img_1,
        projectSupervisor_img_2: supervisor_img_6,
        projectSupervisor_img_3: supervisor_img_2,

        projectSupervisor_name_1: "Eng. Sami Khalil",
        projectSupervisor_name_2: "Eng. Nourhan Adel",
        projectSupervisor_name_3: "Eng. Fady Youssef",

        projectSupervisor_role_1: "Visualization Specialist",
        projectSupervisor_role_2: "Industry Layout Engineer",
        projectSupervisor_role_3: "Quality & Standards Inspector",

        big_Description:
            "This project includes producing advanced 3D visualizations for a frozen food production facility. It highlights equipment layout, workflow optimization, and material movement simulation. The design ensures efficiency and compliance with industrial hygiene standards.",
    },

    {
        id: 10,
        name: "Contemporary Residential Villa",
        category: "Residential", // نفس فئة المشروع 1
        image: project10,
        description: "A modern villa with integrated architectural and structural design.",
        client: "Al-Fakhry Family",
        location: "North Coast, Egypt",

        projectSupervisor_img_1: supervisor_img_1,
        projectSupervisor_img_2: supervisor_img_5,
        projectSupervisor_img_3: supervisor_img_4,

        projectSupervisor_name_1: "Eng. Ahmed Lotfy",
        projectSupervisor_name_2: "Eng. Basma El-Shazly",
        projectSupervisor_name_3: "Eng. Mohamed Raafat",

        projectSupervisor_role_1: "Project Lead Architect",
        projectSupervisor_role_2: "Structural Analysis Engineer",
        projectSupervisor_role_3: "Quality Assurance Supervisor",

        big_Description:
            "This residential villa project features contemporary architecture with detailed structural analysis and modern finishing materials. The design combines aesthetics with functional planning, ensuring a comfortable living experience that matches the client's vision and the site's natural environment.",
    },
    {
        id: 11,
        name: "Urban Office Complex",
        category: "Commercial",
        image: project11,
        description: "Modern office complex with smart design and energy efficiency.",
        client: "UrbanCorp",
        location: "Abu Dhabi, UAE",

        projectSupervisor_img_1: supervisor_img_6,
        projectSupervisor_img_2: supervisor_img_2,
        projectSupervisor_img_3: supervisor_img_3,

        projectSupervisor_name_1: "Eng. Hala Youssef",
        projectSupervisor_name_2: "Eng. Omar Fathy",
        projectSupervisor_name_3: "Eng. Nada Khaled",

        projectSupervisor_role_1: "Lead Architect",
        projectSupervisor_role_2: "Structural Engineer",
        projectSupervisor_role_3: "Project Coordinator",

        big_Description:
            "This office complex project focuses on modern architecture integrated with sustainable design solutions. The team planned space utilization, energy-efficient systems, and structural stability to ensure a functional and innovative working environment."
    },

    {
        id: 12,
        name: "Industrial Warehouse Expansion",
        category: "Interior Design",
        image: project12,
        description: "Steel structure expansion for an existing warehouse.",
        client: "Global Logistics",
        location: "Cairo, Egypt",

        projectSupervisor_img_1: supervisor_img_2,
        projectSupervisor_img_2: supervisor_img_3,
        projectSupervisor_img_3: supervisor_img_1,

        projectSupervisor_name_1: "Eng. Tamer Hossam",
        projectSupervisor_name_2: "Eng. Salma Fathy",
        projectSupervisor_name_3: "Eng. Mohamed Nader",

        projectSupervisor_role_1: "Structural Design Lead",
        projectSupervisor_role_2: "Detailing Engineer",
        projectSupervisor_role_3: "On-Site Supervisor",

        big_Description:
            "This project involves expanding an industrial warehouse using steel structure solutions. The focus was on load-bearing design, efficient use of materials, and seamless integration with existing structures while ensuring safety and long-term durability."
    },

    {
        id: 13,
        name: "Eco-Resort Landscape",
        category: "Renovation",
        image: project13,
        description: "Sustainable landscape design for an eco-resort.",
        client: "Green Horizons Resorts",
        location: "Sharm El Sheikh, Egypt",

        projectSupervisor_img_1: supervisor_img_3,
        projectSupervisor_img_2: supervisor_img_1,
        projectSupervisor_img_3: supervisor_img_5,

        projectSupervisor_name_1: "Eng. Rania Samir",
        projectSupervisor_name_2: "Eng. Yassin Adel",
        projectSupervisor_name_3: "Eng. Dina Khaled",

        projectSupervisor_role_1: "Landscape Architect",
        projectSupervisor_role_2: "Irrigation Specialist",
        projectSupervisor_role_3: "Site Implementation Supervisor",

        big_Description:
            "This eco-resort landscape project integrates sustainable materials, native plant selection, and water-efficient irrigation systems. The aim is to create a beautiful, eco-friendly environment that enhances guest experience while minimizing environmental impact."
    },

    {
        id: 14,
        name: "Seaside Residential Villa",
        category: "Residential",
        image: project14,
        description: "Modern villa design with seaside view and luxurious finishes.",
        client: "El-Sahel Group",
        location: "North Coast, Egypt",

        projectSupervisor_img_1: supervisor_img_2,
        projectSupervisor_img_2: supervisor_img_3,
        projectSupervisor_img_3: supervisor_img_1,

        projectSupervisor_name_1: "Eng. Ahmed El-Masry",
        projectSupervisor_name_2: "Eng. Salma Tarek",
        projectSupervisor_name_3: "Eng. Omar Fathi",

        projectSupervisor_role_1: "Lead Architect",
        projectSupervisor_role_2: "Structural Engineer",
        projectSupervisor_role_3: "Project Manager",

        big_Description:
            "This seaside residential villa project features modern architectural design with luxurious interior and exterior finishes. The design optimizes natural lighting, sea views, and functional layout while ensuring structural stability and long-lasting durability."
    },
    {
        id: 15,
        name: "Family Residential Complex",
        category: "Residential",
        image: project15,
        description: "A modern residential complex designed for families with integrated facilities.",
        client: "Al-Madina Development",
        location: "New Cairo, Egypt",

        projectSupervisor_img_1: supervisor_img_3,
        projectSupervisor_img_2: supervisor_img_1,
        projectSupervisor_img_3: supervisor_img_2,

        projectSupervisor_name_1: "Eng. Farah Youssef",
        projectSupervisor_name_2: "Eng. Mostafa Adel",
        projectSupervisor_name_3: "Eng. Hadi Samir",

        projectSupervisor_role_1: "Lead Architect",
        projectSupervisor_role_2: "Structural Engineer",
        projectSupervisor_role_3: "Site Construction Manager",

        big_Description:
            "This residential complex was designed to provide a comfortable and efficient living environment for families. The project includes multi-unit buildings, green open spaces, and essential community facilities. The design focuses on maximizing natural light, ensuring privacy between units, and creating pedestrian-friendly pathways. Structural work was planned to meet modern safety standards while optimizing material usage. The final result delivers a high-quality living experience with long-term durability and architectural elegance."
    }


];

export default projectsData;
