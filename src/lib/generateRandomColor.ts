export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 0xffffff); // 0xffffff = 16 777 215
  return randomColor.toString(16).padStart(6, '0');
}