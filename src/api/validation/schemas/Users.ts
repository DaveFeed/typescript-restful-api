export const Users = {
    create: {
        username: { type: 'string', min: 1, max: 255, optional: false },
        password: { type: 'string', min: 1, optional: false },
        email: { type: 'string', min: 1, optional: false },
        loginDate: { type: 'number', positive: true, optional: false },
        createdAt: { type: 'number', positive: true, optional: false },
    },
    get: {
        id: { type: 'number', convert: true, optional: false, positive: true },
    },
    delete: {
        id: { type: 'number', convert: true, optional: false, positive: true },
    },
};
