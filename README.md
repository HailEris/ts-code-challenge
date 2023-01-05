# ts-code-challenge

Challenge text contained within email from Sarah H. @ Talent Systems sent 9:54am PST on Jan 3rd, 2023


Reported problem:

As an amazon.com customer I want the cart/checkout experience to be flawless.

Recently it has been observed some differences between quantity and total price until I get to the checkout page.

This problems have caused an increase in support tickets and buyers leaving the item on the cart and not finishing the purchase.

 

Your task:

Using your preferred automation framework/language, create a test case that adds an alexa to the cart, and exercise test cases to ensure that the problem listed above does not happen.

Use the most common automation coding standards on your code.

Use an online repository to share the code with us, preferred github


// Test design:

// Test 1: Single QTY Item - Cart Checkout Flow
//     Navigate to Amazon.com
//     Validate successfull navigation
//     Enter text "Alexa" in search field and Submit
//     Validate successful navigation
//     Save Price for item "All-New Exho Dot (5th Gen, 2022 release)" as variable: echoDotPrice
//     Select item
//     Validate successful nacigation to product page
//     Valiate Price == echoDotPrice
//     Click "Add to Cart" button
//     Click "No thanks" button on Protection Plan Pop-up
//     Validate successful navigation to Cart Subtotal View
//     Validate Price == echoDotPrice
//     Click "Go to Cart" button
//     Validate successful navigation to Shopping Cart view
//     Validate Price == echoDotPrice
//     end

// Test 2: 3 QTY Item - Cart Checkout Flow
//     Navigate to Amazon.com
//     Validate successfull navigation
//     Enter text "Alexa" in search field and Submit
//     Validate successful navigation
//     Save Price for item "All-New Exho Dot (5th Gen, 2022 release)" as variable: echoDotPrice
//     Change Qty dropdown to 3
//     Select item
//     Validate successful navigation to product page
//     Valiate Price == echoDotPrice * 3
//     Click "Add to Cart" button
//     Click "No thanks" button on Protection Plan Pop-up
//     Validate successful navigation to Cart Subtotal View
//     Validate Price == echoDotPrice * 3
//     Click "Go to Cart" button
//     Validate successful navigation to Shopping Cart view
//     Validate Price == echoDotPrice * 3
//     end