/* Modules */

// Export
export const name = "Jesse";
export const age = 40;

const n = "Jesse";
const a = 40;

export { n, a };

// default export
const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + 'is' + age + 'years old.';
};

export default message; // 每一個檔案只能有一個 default export

