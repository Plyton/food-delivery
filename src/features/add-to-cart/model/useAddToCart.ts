export function useAddToCart() {
  const addToCart = (id: string | number) => {
    console.log(id);
  };
  return {
    addToCart,
  };
}
