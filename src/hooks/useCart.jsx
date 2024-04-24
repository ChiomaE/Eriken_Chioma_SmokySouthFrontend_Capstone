
import React, { createContext, useContext, useEffect, useState } from "react";
import { food } from "../data";
const CartContext = createContext(null)
const CART_KEY = 'cart'
const EMPTY_CART = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
}

export default function CartProvider({children}) {
    const initCart = getCartFromLocalStorage();
    const [cartItems, setCartItems] = useState(initCart.items);
    const[totalPrice, setTotalPrice] = useState(initCart.totalPrice);
    const [totalCount, setTotalCount] = useState(initCart.totalCount)

    useEffect(() => {
        const totalPrice = sum(cartItems.map(item => item.price))
        setTotalPrice(totalPrice)
        setTotalCount(cartItems.length)
    }, [cartItems])

    function getCartFromLocalStorage() {
        try {
            const storedCart = localStorage.getItem(CART_KEY);
            return storedCart ? JSON.parse(storedCart) : EMPTY_CART;
        } catch (error) {
            console.error('Error parsing cart data from localStorage:', error);
            // Clear localStorage to remove invalid data
            localStorage.removeItem(CART_KEY);
            // Return empty cart
            return EMPTY_CART;
        }
    }

    const sum = items => {
        return items.reduce((prevValue, curValue) => prevValue + curValue, 0)
    }

    const removeFromCart = foodId => {
        const filteredCartItems = cartItems.filter(item => item.food.id !== foodId);
        setCartItems(filteredCartItems);
    }

    const changeQuantity = (cartItem, newQuantity) =>{
        const {food} = cartItem;

        const changedCartItem = {
            ...cartItem, 
            quantity: newQuantity,
            price: food.price * newQuantity
        }

        setCartItems(
            cartItems.map(item => cartItem.food.id === food.id ? changedCartItem : item)
        )
    }

    const addToCart = food => {
        console.log("Adding to cart:", food.name);
        console.log("Food price:", food.price);
        const cartItem = cartItems.find(item => item.food.id === food.id)
        if(cartItem){
            changeQuantity(cartItem, cartItem.quantity + 1)
        } else{
            setCartItems([...cartItems, {food, quantity: 1, price: food.price}])
        }
    }

    return <CartContext.Provider value={{cart:{items: cartItems, totalPrice, totalCount}, removeFromCart, changeQuantity, addToCart}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
