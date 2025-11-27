import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "500px", // تقدر تغير الحجم حسب التصميم
    borderRadius: "15px",
    overflow: "hidden", // ده اللي بيظبط الحواف
};

const center = {
    lat: 25.197197, // برج خليفة
    lng: 55.274376, // برج خليفة
};

const MapComponent = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyArFe8D-6RC-suWm5iofqpGg2wz5HAVVQk", // حط الـ API Key بتاعك هنا
    });

    if (!isLoaded) return <div>Loading Map...</div>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17} // مستوى التكبير
        >
            <Marker position={center} /> {/* مثال على Marker */}
        </GoogleMap>
    );
};

export default MapComponent;
