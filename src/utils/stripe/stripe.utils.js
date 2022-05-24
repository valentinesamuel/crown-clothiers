import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(process.env.REACT_STRIPE_PUBLISHABLE_KEY);