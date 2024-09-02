// haversineDistance.js
(function(global) {
    // Define the haversineDistance object
    var haversineDistance = {
        // Haversine formula to calculate the distance between two points on the Earth
        calculateDistance: function(lat1, lon1, lat2, lon2) {
            const R = 6371; // Radius of the Earth in kilometers
            const toRadians = function(degrees) {
                return degrees * (Math.PI / 180);
            };

            const dLat = toRadians(lat2 - lat1);
            const dLon = toRadians(lon2 - lon1);
            const a = 
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c; // Distance in kilometers

            return distance;
        }
    };

    // Expose the haversineDistance object to the global scope
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = haversineDistance;
    } else {
        global.haversineDistance = haversineDistance;
    }
})(this);