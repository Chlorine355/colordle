export const validateColor = (color: string): {isValid: boolean; message?: string} => {
    if (color.length !== 6) {
        return {isValid: false, message: 'Hex-код цвета должен иметь длину 6 символов!'}
    } 
    const valid = /^[0-9A-F]{6}$/i.test(color);
    return valid ? {isValid: true} : {isValid: false, message: 'Hex-код цвета может состоять только из цифр и латинских букв, без #'}
}