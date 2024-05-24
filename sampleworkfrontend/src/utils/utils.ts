export const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const getToken = (): string | null => {
    return localStorage.getItem("bearer");
};

export const authenticatedFetch = async (endpoint: string, options: RequestInit = {}) => {
    const token = getToken();

    const authOptions = {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(endpoint, authOptions);

    return response;
};

export const NameInvalidMessage = "Name must be at least 3 characters long";
export const EmailInvalidMessage = "Please provide a valid email address";
export const PasswordInvalidMessage = "Password must be at least 6 characters long";