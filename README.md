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


// Notes of progression:
<!-- Amazon.com appears to detect the Playwright browser build and force a CAPTCHA. Checked in with Vicenzo and switching to Target.com -->
<!-- Target.com appears to detect the Playwright browser build and throttle responses. Would be untenable in real-world conditions, but only slows things down for the purposes of this code challenge. -->
<!-- Refined tests to save price of first listed item from search as a variable and then later to select the same first item for test workflow. Seemed more elegant and possiblly reusable for future test setup function. -->
<!-- Added two tests for secondary workflow per user can add to cart directly from search results or on product detail view. As a regression test this would ensure that both methods function uniformly. -->


// Test design: (initial)

// Test 1: Target Price Consistency Qty: 1, Added from Search Results
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

// Test 2: Target Price Consistency Qty: 1, Added from Product Detail View
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

// Test 3: Target Price Consistency Qty: 3, Added from Search Results
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

// Test 4: Target Price Consistency Qty: 3, Added from Product Detail View
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