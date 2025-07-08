# Split The Bill 

A simple app to help you split receipts and bills fairly.

## Tech Used

- 🟦 TypeScript (with type annotations)
- ⚛️ React (with `useState`)
- 🧠 Event handling
- ✅ Input validation
- 🔀 Conditional logic
- ⚡️ Vite (for fast builds and dev server)
- 🧹 ESLint (for code quality)

## How It Works

The app uses useState to track:
- Total bill
- Number of people
- Tip percentage
   - When the user enters values, it calculates how much each person should pay.
   - Input is validated to make sure values are numbers and not empty.
   - The result is shown in real-time using conditional logic.

## How to Run This App

1. **Clone the repository**

```bash
git clone https://github.com/eliseusoh/todays-todos.git
cd todays-todos
```

2. **Install dependencies**

```bash
npm start
```

3. **Start development server**

```bash
npm run dev
```




