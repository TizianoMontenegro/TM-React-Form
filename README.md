# React Form with Validation using Zod and React Hook Form

A reusable and customizable form component built with React, Zod, and React Hook Form. This form includes validation for common fields such as name, email, password, and password confirmation, with real-time error handling.

## Features

- 🛠 **Zod Validation Schema**: Robust form validation using Zod
- 📋 **React Hook Form Integration**: Efficient form state management
- 🚨 **Real-Time Error Handling**: Instant validation feedback with clear error messages
- 🔒 **Password Confirmation Check**: Ensures password and confirm password fields match
- 🎨 **Custom Input Component**: Reusable styled input field with error display
- 📱 **Responsive Design**: Simple and clean UI with CSS styling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TizianoMontenegro/TM-React-Form.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

The form component can be used directly in your React application:

```jsx
import CustomForm from './components/CustomForm/CustomForm';

function App() {
  return (
    <div className="App">
      <CustomForm />
    </div>
  )
}
```

### Form Fields
- **Name**: Required text field
- **Email**: Validates email format
- **Password**: Minimum 6 characters
- **Confirm Password**: Must match password field

### Validation Rules
- All fields are required
- Email must be in valid format
- Password requires minimum 6 characters
- Confirm password must match password

## Dependencies

- [React](https://react.dev/)
- [Zod](https://zod.dev/) (Schema validation)
- [React Hook Form](https://react-hook-form.com/) (Form management)
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) (Zod integration)

## Project Structure

```
src/
├── components/
│   └── CustomForm/
│       ├── CustomForm.tsx
│       └── CustomInput/
│           ├── CustomInput.tsx
│           └── CustomInput.css
├── models/
│   └── index.ts
└── App.css
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

[MIT](https://choosealicense.com/licenses/mit/)
