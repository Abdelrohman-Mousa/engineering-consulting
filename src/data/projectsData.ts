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
        key: "modernVilla",
        category: "categories.residential",
        image: project1,
        filterCategory: "Residential",

        name: "projects.modernVilla.name",
        description: "projects.modernVilla.description",
        client: "projects.modernVilla.client",
        location: "projects.modernVilla.location",
        big_Description: "projects.modernVilla.bigDescription",

        supervisors: [
            {
                image: supervisor_img_2,
                name: "projects.modernVilla.supervisors.1.name",
                role: "projects.modernVilla.supervisors.1.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.modernVilla.supervisors.2.name",
                role: "projects.modernVilla.supervisors.2.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.modernVilla.supervisors.3.name",
                role: "projects.modernVilla.supervisors.3.role"
            }
        ]
    },

    {
        id: 2,
        key: "interiorDesign",
        category: "categories.commercial",
        image: project2,
        filterCategory: "Commercial",


        name: "projects.interiorDesign.name",
        description: "projects.interiorDesign.description",
        client: "projects.interiorDesign.client",
        location: "projects.interiorDesign.location",
        big_Description: "projects.interiorDesign.bigDescription",

        supervisors: [
            {
                image: supervisor_img_1,
                name: "projects.interiorDesign.supervisors.1.name",
                role: "projects.interiorDesign.supervisors.1.role"
            },
            {
                image: supervisor_img_2,
                name: "projects.interiorDesign.supervisors.2.name",
                role: "projects.interiorDesign.supervisors.2.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.interiorDesign.supervisors.3.name",
                role: "projects.interiorDesign.supervisors.3.role"
            }
        ]
    },

    {
        id: 3,
        key: "steelStructure",
        category: "categories.interior",
        image: project3,
        filterCategory: "Interior Design",


        name: "projects.steelStructure.name",
        description: "projects.steelStructure.description",
        client: "projects.steelStructure.client",
        location: "projects.steelStructure.location",
        big_Description: "projects.steelStructure.bigDescription",

        supervisors: [
            {
                image: supervisor_img_3,
                name: "projects.steelStructure.supervisors.1.name",
                role: "projects.steelStructure.supervisors.1.role"
            },
            {
                image: supervisor_img_2,
                name: "projects.steelStructure.supervisors.2.name",
                role: "projects.steelStructure.supervisors.2.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.steelStructure.supervisors.3.name",
                role: "projects.steelStructure.supervisors.3.role"
            }
        ]
    },

    {
        id: 4,
        key: "landscapeProject",
        category: "categories.renovation",
        image: project4,
        filterCategory: "Renovation",


        name: "projects.landscapeProject.name",
        description: "projects.landscapeProject.description",
        client: "projects.landscapeProject.client",
        location: "projects.landscapeProject.location",
        big_Description: "projects.landscapeProject.bigDescription",

        supervisors: [
            {
                image: supervisor_img_2,
                name: "projects.landscapeProject.supervisors.1.name",
                role: "projects.landscapeProject.supervisors.1.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.landscapeProject.supervisors.2.name",
                role: "projects.landscapeProject.supervisors.2.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.landscapeProject.supervisors.3.name",
                role: "projects.landscapeProject.supervisors.3.role"
            }
        ]
    },

    {
        id: 5,
        key: "foodFactory",
        category: "categories.visualization",
        image: project5,
        filterCategory: "3D Visualization",


        name: "projects.foodFactory.name",
        description: "projects.foodFactory.description",
        client: "projects.foodFactory.client",
        location: "projects.foodFactory.location",
        big_Description: "projects.foodFactory.bigDescription",

        supervisors: [
            {
                image: supervisor_img_1,
                name: "projects.foodFactory.supervisors.1.name",
                role: "projects.foodFactory.supervisors.1.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.foodFactory.supervisors.2.name",
                role: "projects.foodFactory.supervisors.2.role"
            },
            {
                image: supervisor_img_2,
                name: "projects.foodFactory.supervisors.3.name",
                role: "projects.foodFactory.supervisors.3.role"
            }
        ]
    },

    {
        id: 6,
        key: "luxuryApartmentInterior",
        category: "categories.commercial",
        image: project6,
        filterCategory: "Commercial",


        name: "projects.luxuryApartmentInterior.name",
        description: "projects.luxuryApartmentInterior.description",
        client: "projects.luxuryApartmentInterior.client",
        location: "projects.luxuryApartmentInterior.location",
        big_Description: "projects.luxuryApartmentInterior.bigDescription",

        supervisors: [
            {
                image: supervisor_img_3,
                name: "projects.luxuryApartmentInterior.supervisors.1.name",
                role: "projects.luxuryApartmentInterior.supervisors.1.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.luxuryApartmentInterior.supervisors.2.name",
                role: "projects.luxuryApartmentInterior.supervisors.2.role"
            },
            {
                image: supervisor_img_5,
                name: "projects.luxuryApartmentInterior.supervisors.3.name",
                role: "projects.luxuryApartmentInterior.supervisors.3.role"
            }
        ]
    },

    {
        id: 7,
        key: "industrialSteelHangar",
        category: "categories.interior",
        image: project7,
        filterCategory: "Interior Design",


        name: "projects.industrialSteelHangar.name",
        description: "projects.industrialSteelHangar.description",
        client: "projects.industrialSteelHangar.client",
        location: "projects.industrialSteelHangar.location",
        big_Description: "projects.industrialSteelHangar.bigDescription",

        supervisors: [
            {
                image: supervisor_img_2,
                name: "projects.industrialSteelHangar.supervisors.1.name",
                role: "projects.industrialSteelHangar.supervisors.1.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.industrialSteelHangar.supervisors.2.name",
                role: "projects.industrialSteelHangar.supervisors.2.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.industrialSteelHangar.supervisors.3.name",
                role: "projects.industrialSteelHangar.supervisors.3.role"
            }
        ]
    },

    {
        id: 8,
        key: "luxuryLandscapeRenovation",
        category: "categories.renovation",
        image: project8,
        filterCategory: "Renovation",


        name: "projects.luxuryLandscapeRenovation.name",
        description: "projects.luxuryLandscapeRenovation.description",
        client: "projects.luxuryLandscapeRenovation.client",
        location: "projects.luxuryLandscapeRenovation.location",
        big_Description: "projects.luxuryLandscapeRenovation.bigDescription",

        supervisors: [
            {
                image: supervisor_img_5,
                name: "projects.luxuryLandscapeRenovation.supervisors.1.name",
                role: "projects.luxuryLandscapeRenovation.supervisors.1.role"
            },
            {
                image: supervisor_img_4,
                name: "projects.luxuryLandscapeRenovation.supervisors.2.name",
                role: "projects.luxuryLandscapeRenovation.supervisors.2.role"
            },
            {
                image: supervisor_img_6,
                name: "projects.luxuryLandscapeRenovation.supervisors.3.name",
                role: "projects.luxuryLandscapeRenovation.supervisors.3.role"
            }
        ]
    },

    {
        id: 9,
        key: "frozenFoodFactoryVisualization",
        category: "categories.visualization",
        image: project9,
        filterCategory: "3D Visualization",


        name: "projects.frozenFoodFactoryVisualization.name",
        description: "projects.frozenFoodFactoryVisualization.description",
        client: "projects.frozenFoodFactoryVisualization.client",
        location: "projects.frozenFoodFactoryVisualization.location",
        big_Description: "projects.frozenFoodFactoryVisualization.bigDescription",

        supervisors: [
            {
                image: supervisor_img_1,
                name: "projects.frozenFoodFactoryVisualization.supervisors.1.name",
                role: "projects.frozenFoodFactoryVisualization.supervisors.1.role"
            },
            {
                image: supervisor_img_6,
                name: "projects.frozenFoodFactoryVisualization.supervisors.2.name",
                role: "projects.frozenFoodFactoryVisualization.supervisors.2.role"
            },
            {
                image: supervisor_img_2,
                name: "projects.frozenFoodFactoryVisualization.supervisors.3.name",
                role: "projects.frozenFoodFactoryVisualization.supervisors.3.role"
            }
        ]
    },

    {
        id: 10,
        key: "contemporaryResidentialVilla",
        category: "categories.residential",
        image: project10,
        filterCategory: "Residential",


        name: "projects.contemporaryResidentialVilla.name",
        description: "projects.contemporaryResidentialVilla.description",
        client: "projects.contemporaryResidentialVilla.client",
        location: "projects.contemporaryResidentialVilla.location",
        big_Description: "projects.contemporaryResidentialVilla.bigDescription",

        supervisors: [
            {
                image: supervisor_img_1,
                name: "projects.contemporaryResidentialVilla.supervisors.1.name",
                role: "projects.contemporaryResidentialVilla.supervisors.1.role"
            },
            {
                image: supervisor_img_5,
                name: "projects.contemporaryResidentialVilla.supervisors.2.name",
                role: "projects.contemporaryResidentialVilla.supervisors.2.role"
            },
            {
                image: supervisor_img_4,
                name: "projects.contemporaryResidentialVilla.supervisors.3.name",
                role: "projects.contemporaryResidentialVilla.supervisors.3.role"
            }
        ]
    },

    {
        id: 11,
        key: "urbanOfficeComplex",
        category: "categories.commercial",
        image: project11,
        filterCategory: "Commercial",


        name: "projects.urbanOfficeComplex.name",
        description: "projects.urbanOfficeComplex.description",
        client: "projects.urbanOfficeComplex.client",
        location: "projects.urbanOfficeComplex.location",
        big_Description: "projects.urbanOfficeComplex.bigDescription",

        supervisors: [
            {
                image: supervisor_img_6,
                name: "projects.urbanOfficeComplex.supervisors.1.name",
                role: "projects.urbanOfficeComplex.supervisors.1.role"
            },
            {
                image: supervisor_img_2,
                name: "projects.urbanOfficeComplex.supervisors.2.name",
                role: "projects.urbanOfficeComplex.supervisors.2.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.urbanOfficeComplex.supervisors.3.name",
                role: "projects.urbanOfficeComplex.supervisors.3.role"
            }
        ]
    },

    {
        id: 12,
        key: "industrialWarehouseExpansion",
        category: "categories.interior",
        image: project12,
        filterCategory: "Interior Design",


        name: "projects.industrialWarehouseExpansion.name",
        description: "projects.industrialWarehouseExpansion.description",
        client: "projects.industrialWarehouseExpansion.client",
        location: "projects.industrialWarehouseExpansion.location",
        big_Description: "projects.industrialWarehouseExpansion.bigDescription",

        supervisors: [
            {
                image: supervisor_img_2,
                name: "projects.industrialWarehouseExpansion.supervisors.1.name",
                role: "projects.industrialWarehouseExpansion.supervisors.1.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.industrialWarehouseExpansion.supervisors.2.name",
                role: "projects.industrialWarehouseExpansion.supervisors.2.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.industrialWarehouseExpansion.supervisors.3.name",
                role: "projects.industrialWarehouseExpansion.supervisors.3.role"
            }
        ]
    },

    {
        id: 13,
        key: "ecoResortLandscape",
        category: "categories.renovation",
        image: project13,
        filterCategory: "Renovation",


        name: "projects.ecoResortLandscape.name",
        description: "projects.ecoResortLandscape.description",
        client: "projects.ecoResortLandscape.client",
        location: "projects.ecoResortLandscape.location",
        big_Description: "projects.ecoResortLandscape.bigDescription",

        supervisors: [
            {
                image: supervisor_img_3,
                name: "projects.ecoResortLandscape.supervisors.1.name",
                role: "projects.ecoResortLandscape.supervisors.1.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.ecoResortLandscape.supervisors.2.name",
                role: "projects.ecoResortLandscape.supervisors.2.role"
            },
            {
                image: supervisor_img_5,
                name: "projects.ecoResortLandscape.supervisors.3.name",
                role: "projects.ecoResortLandscape.supervisors.3.role"
            }
        ]
    },

    {
        id: 14,
        key: "seasideResidentialVilla",
        category: "categories.residential",
        image: project14,
        filterCategory: "Residential",


        name: "projects.seasideResidentialVilla.name",
        description: "projects.seasideResidentialVilla.description",
        client: "projects.seasideResidentialVilla.client",
        location: "projects.seasideResidentialVilla.location",
        big_Description: "projects.seasideResidentialVilla.bigDescription",

        supervisors: [
            {
                image: supervisor_img_2,
                name: "projects.seasideResidentialVilla.supervisors.1.name",
                role: "projects.seasideResidentialVilla.supervisors.1.role"
            },
            {
                image: supervisor_img_3,
                name: "projects.seasideResidentialVilla.supervisors.2.name",
                role: "projects.seasideResidentialVilla.supervisors.2.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.seasideResidentialVilla.supervisors.3.name",
                role: "projects.seasideResidentialVilla.supervisors.3.role"
            }
        ]
    },


    {
        id: 15,
        key: "familyResidentialComplex",
        category: "categories.residential",
        image: project15,
        filterCategory: "Residential",


        name: "projects.familyResidentialComplex.name",
        description: "projects.familyResidentialComplex.description",
        client: "projects.familyResidentialComplex.client",
        location: "projects.familyResidentialComplex.location",
        big_Description: "projects.familyResidentialComplex.bigDescription",

        supervisors: [
            {
                image: supervisor_img_3,
                name: "projects.familyResidentialComplex.supervisors.1.name",
                role: "projects.familyResidentialComplex.supervisors.1.role"
            },
            {
                image: supervisor_img_1,
                name: "projects.familyResidentialComplex.supervisors.2.name",
                role: "projects.familyResidentialComplex.supervisors.2.role"
            },
            {
                image: supervisor_img_2,
                name: "projects.familyResidentialComplex.supervisors.3.name",
                role: "projects.familyResidentialComplex.supervisors.3.role"
            }
        ]
    },



];

export default projectsData;
