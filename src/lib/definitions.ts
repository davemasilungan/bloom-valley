interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
}

export type { Product };

interface AddToCartButtonProps {
  product: Product;
}

export type { AddToCartButtonProps };

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type { CartModalProps };
