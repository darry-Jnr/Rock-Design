// assets.js
const BASE_URL = "https://res.cloudinary.com/dwlgcj8ht/image/upload/f_auto,q_auto/Rockdesign/assets/images/";

/**
 * Dynamic URL Generator
 * @param {string} name - The filename as it appears in Cloudinary
 */
export const img = (name) => `${BASE_URL}${name}`;