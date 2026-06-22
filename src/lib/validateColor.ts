export const validateColor = (color: string) => {
    console.log(color)
    const result = /^[0-9A-F]{6}$/i.test(color);
    console.log(result)
    return result;
}