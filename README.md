# InstaPayments Checkout Experience

This project aims to develop a user-friendly, visually engaging, and responsive checkout experience for online shoppers. It focuses on the final three steps of the typical online shopping flow: checkout, payment options selection, and order confirmation.

## Table of Contents

1. [Assignment Overview](#assignment-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Local Development](#local-development)
5. [Deployment](#deployment)


## Assignment Overview

The assignment involves building a checkout experience using Next.js, incorporating features such as caching, dynamic UI elements, proper validation, visual appeal, responsiveness, and user-friendly flow. Additionally, it includes an extra challenge of implementing a White Labeling feature to customize the application's theme dynamically.

## Technologies Used

- Next.js with TypeScript
- Redux for state management
- Next.js Fetch API for data fetching and caching

## Features

- Checkout Page: Display order summary and allow users to proceed to payment selection.
- Payment Options Page: Render available payment methods and allow seamless switching between methods.
- Order Confirmation Page: Display order details, selected payment method, and transaction status (success, failure, pending).
- Form validation for user input errors.
- Caching is done by fetch api in nextjs 14
- Responsive design supporting multiple screen sizes.

## Local Development

1. Clone the repository:
```
git clone <repository_url>
cd instapayments-checkout
```

2. Install dependencies:

```
npm install
```


3. Start the development server:

```
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to view the application.


