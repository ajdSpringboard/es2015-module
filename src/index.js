import { choice, remove } from "./helpers";
import fruits from "./foods";

const firstChoice = choice(fruits);
console.log(`I'd like one ${firstChoice}, please.`);
console.log(`Here you go: ${firstChoice}`);
console.log("Delicious! May I have another?");
remove(fruits, firstChoice);
console.log(`I'm sorry, we're all out. We have ${fruits.length} fruits left.`);
