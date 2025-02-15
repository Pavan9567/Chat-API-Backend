module.exports = ({ env }) => ({
    "users-permisssions": {
        config: {
            jwtSecret: env('JWT_SECRET', 's7/YVWB4C1QvLfmsHpdJOw=='),
        },
    },
});
